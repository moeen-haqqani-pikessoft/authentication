import { ConsoleLogger, Injectable } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { HttpException, HttpStatus } from '@nestjs/common';
import { SingleUserService } from 'src/singleuser/singleuser.service';

@Injectable()
export class UserService {
  //inject user repository
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectDataSource() private dataSource: DataSource,
    private readonly singleUserService: SingleUserService,
  ) {}
  //create using query builder
  // async create(createUserDto: CreateUserDto): Promise<void> {
  //   const result=await this.dataSource
  //     .createQueryBuilder()
  //     .insert()
  //     .into(User)
  //     .values([
  //       {
  //         firstName: createUserDto.firstName,
  //         lastName: createUserDto.lastName,
  //         age: createUserDto.age,
  //       },
  //     ])
  //     .execute();

  //     console.log(result);

  // }
  create(createUserDto: CreateUserDto): Promise<User> {
    try {
      const user: User = new User();
      user.firstName = createUserDto.firstName;
      user.lastName = createUserDto.lastName;
      user.age = createUserDto.age;
      //this.singleUserService.
      return this.userRepository.save(user);
    } catch (err) {
      console.log(err);
      throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
    }
  }
  //find by query builder
  // async findAll(): Promise<User[]> {
  //   await this.dataSource.createQueryBuilder(User, "user")
  //   .getMany();

  //   const users =  await this.userRepository.find();
  //   console.log(users)
  //   return users;

  // }
  //where clause using query builder
  // async findAll(): Promise<User> {
  //   const user = await this.dataSource
  //     .createQueryBuilder()
  //     .select('user')
  //     .from(User, 'user')
  //     .where('user.id = :id', { id: 1 })
  //     .getOne();
  //   return user;
  // }

  //where clause
  // async findAll(): Promise<User> {
  //   const data=await this.userRepository.findOneBy({
  //     firstName: "saeed",})

  //   return data;
  // }
  findAll(): Promise<User[]> {
    try {
      return this.userRepository.find();
    } catch (err) {
      console.log(err);
      throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
    }
  }

  // findOne(id: number) {
  //   return this.userRepository.findOne(id);
  // }

  update(id: number, updateUserDto: UpdateUserDto) {
    try {
      const user: User = new User();
      user.firstName = updateUserDto.firstName;
      user.lastName = updateUserDto.lastName;
      user.age = updateUserDto.age;
      user.id = id;
      return this.userRepository.save(user);
    } catch (err) {
      console.log(err);
      throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
    }
  }

  remove(id: number) {
    try {
      return this.userRepository.delete(id);
    } catch (err) {
      console.log(err);
      throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
    }
  }
}
