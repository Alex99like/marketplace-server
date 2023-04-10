import { Module } from '@nestjs/common';
import { ReviewService } from './review.service';
import { ReviewController } from './review.controller';
import { PrismaService } from 'src/prisma.service';
import { UserService } from 'src/user/user.service';

@Module({
  controllers: [ReviewController],
  providers: [ReviewService, PrismaService, UserService],
})
export class ReviewModule {}
