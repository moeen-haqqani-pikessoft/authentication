import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { single } from 'rxjs';
import { DataSource, Repository } from 'typeorm';
import { CreateSingleUserDto } from './dto/create-singleuser.dto';
import { SingleUser } from './entities/singleuser.entity';
@Injectable()
export class SingleUserService {
  //inject user repository
  constructor(
    @InjectRepository(SingleUser)
    private readonly userRepository: Repository<SingleUser>,
    @InjectDataSource() private dataSource: DataSource,
  ) {}
  create(createSingleUserDto: CreateSingleUserDto): Promise<SingleUser> {
    try {
      const user: SingleUser = new SingleUser();
      user.name = createSingleUserDto.name;
      // user.photos=createSingleUserDto.photos;

      return this.userRepository.save(user);
    } catch (err) {
      console.log(err);
      throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
    }
  }
  async findAll(): Promise<SingleUser[]> {
    return await this.userRepository.find();
    //to see lazy relation functionality,uncomment the code below in it
    // const users=await this.userRepository.find();
    // const firstUser=users[3];
    // const photos=await firstUser.photos;
    // console.log(photos)
    // return users;
  }
  //getting a user with all of its photos using query builder
  //   async findAll(): Promise<SingleUser> {
  //     const userWithPhots= await this.dataSource.createQueryBuilder(SingleUser, "user")
  //       .leftJoinAndSelect('user.photos', 'photo')
  //       .where('user.id = :id', { id: 4})
  //       .getOne();
  // return userWithPhots;
  //    }
}
