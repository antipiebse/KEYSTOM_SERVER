import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductTag } from '../productsTag/entities/productTag.entity';
import { Product } from './entities/product.entity';
import { ProductImage } from 'src/apis/productImage/entities/productImage.entity';
import { ElasticsearchService } from '@nestjs/elasticsearch';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(ProductTag)
    private readonly productTagRepository: Repository<ProductTag>,
    private readonly elasticsearchService: ElasticsearchService,

    @InjectRepository(ProductImage)
    private readonly productImageRepository: Repository<ProductImage>,
  ) {}
  // async findAll() {
  //   return await this.productRepository.find({
  //     relations: ['productTags'],
  //     order: {
  //       createdAt: 'DESC',
  //     },
  //   });
  // }

  // async findString({ search }) {
  //   const result = await this.elasticsearchService.search({
  //     index: 'myproduct',
  //     sort: 'updatedat:asc',
  //     size: 8,
  //     query: {
  //       bool: {
  //         should: [
  //           { match: { title: `${search}` } },
  //           { match: { description: `${search}` } },
  //         ],
  //       },
  //     },
  //   });
  //   const arr = [];
  //   const products = result.hits.hits.map((el: any) => ({
  //     id: el._source.id,
  //   }));
  //   for (let i = 0; products.length > i; i++) {
  //     const product1 = await this.productRepository.findOne({
  //       where: { id: products[i].id },
  //       relations: ['productTags'],
  //     });
  //     arr.push(product1);
  //   }
  //   return arr;
  // }
  // async findPrice({ price }) {
  //   const result = await this.elasticsearchService.search({
  //     index: 'myproduct',
  //     sort: 'updatedat:asc',
  //     size: 8,
  //     query: {
  //       bool: {
  //         should: [{ match: { price: `${price}` } }],
  //       },
  //     },
  //   });

  //   const arr = [];
  //   const products = result.hits.hits.map((el: any) => ({
  //     id: el._source.id,
  //   }));
  //   for (let i = 0; products.length > i; i++) {
  //     const product1 = await this.productRepository.findOne({
  //       where: { id: products[i].id },
  //       relations: ['productTags'],
  //     });
  //     arr.push(product1);
  //   }
  //   return arr;
  // }
  async findAll({ page }) {
    return await this.productRepository
      .createQueryBuilder('product')
      .leftJoinAndSelect('product.productTags', 'tags')
      .orderBy('product.createdAt', 'DESC')
      .skip(0 + Number((page - 1) * 10))
      .take(10)
      .getMany();
  }

  async findImage({ productId }) {
    return await this.productImageRepository.find({
      where: { product: productId },
      relations: ['product'],
    });
  }

  async findOne({ productId }) {
    return await this.productRepository.findOne({ where: { id: productId } });
  }

  async findCount() {
    return await this.productRepository.count();
  }

  // async findBest() {
  //   return await this.productRepository.find({
  //     order: {
  //       like: 'DESC',
  //     },
  //     take: 3,
  //   });
  // }

  async create({ imageUrls, ...rest }) {
    // ????????? ????????????????????? ??????
    const { productTags, ...product } = rest;

    //productTags ??????
    const tags = [];
    const Tagslength = productTags ? productTags.length : 0;
    for (let i = 0; Tagslength > i; i++) {
      const tagname = productTags[i].replace('#', '');
      //?????? ????????? ???????????? ??????
      const prevTag = await this.productTagRepository.findOne({ tag: tagname });

      //????????? ??????
      if (prevTag) {
        tags.push(prevTag);
      }
      //????????? ????????? ????????????
      else {
        this.productTagRepository.save({ tag: tagname });
      }
    }
    const result = await this.productRepository.save({
      ...product,
      thumbnail: imageUrls[0],
      productTags: tags,
    });

    // ????????? ??????!
    const imagelength = productTags ? productTags.length : 0;
    for (let i = 0; i < imagelength; i++) {
      if (i === 0) {
        await this.productImageRepository.save({
          url: imageUrls[i],
          isThumbnail: true,
          product: result,
        });
      } else {
        await this.productImageRepository.save({
          url: imageUrls[i],
          product: result,
        });
      }
    }
    return result;
  }

  async update({ imageUrls, ...rest }, productId) {
    // ????????? ????????????????????? ??????
    const { productTags, ...product } = rest;
    //productTags ??????
    const tags = [];
    const Tagslength = productTags ? productTags : 0;
    for (let i = 0; Tagslength > i; i++) {
      const tagname = productTags[i].replace('#', '');
      //?????? ????????? ???????????? ??????
      const prevTag = await this.productTagRepository.findOne({ tag: tagname });

      //????????? ??????
      if (prevTag) {
        tags.push(prevTag);
      }
      //????????? ????????? ????????????
      else {
        const tag = this.productTagRepository.save({
          tag: tagname,
        });
        tags.push(tag);
      }
    }
    const target = await this.productRepository.findOne({ id: productId });

    const result = await this.productRepository.save({
      ...target,
      ...product,
      thumbnail: imageUrls[0],
      productTags: tags,
    });

    // ????????? ????????? ????????? ??????
    this.productImageRepository.delete({ product: target });

    // ????????? ??????!
    for (let i = 0; i < imageUrls.length; i++) {
      if (i === 0) {
        this.productImageRepository.save({
          url: imageUrls[i],
          isThumbnail: true,
          product: result,
        });
      } else {
        this.productImageRepository.save({
          url: imageUrls[i],
          product: result,
        });
      }
    }
    return result;
  }

  async delete({ productId }) {
    await this.productImageRepository.delete({ product: productId });
    const result = await this.productRepository.delete({ id: productId });
    return result.affected ? true : false;
  }
}
