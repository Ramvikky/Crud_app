import { Injectable } from '@nestjs/common';
import { User, UserDocument } from './user.models';
import { Model} from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Console } from 'console';


@Injectable()
export class AppService {

  constructor(
    @InjectModel('user') private readonly userModel: Model<UserDocument>
  ){}


  // Creating a user (POST) 

async createUser(user:User) :Promise<User> {

  const newUser = new this.userModel(user)
 return newUser.save()
}


 // Reading the user collection(GET)
 
 async readUser(){
  return this.userModel.find({})
  .then((user)=>{return user})
  .catch((err)=>console.log(err))
 }


// Updating the user (PUT)

 async UpdateUser(id,data):Promise<User>{

 return this.userModel.findByIdAndUpdate(id,data,{new:true,upsert:true})

 }


// Deleting the user (DELETE)

async deleteUser(id):Promise<User>
{
return this.userModel.findByIdAndRemove(id)
} 
  }
