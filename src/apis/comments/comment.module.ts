import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Review } from '../review/entities/review.entity';
import { CommentResolver } from './comment.resolver';
import { CommentService } from './comment.service';
import { Comment } from './entities/comment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Comment, Review])],
  providers: [CommentResolver, CommentService],
})
export class CommentModule {}
