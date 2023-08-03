import { Body, Controller, Get, Post, Put,Param, Delete } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user.models';
import { userUpdateDTO } from './userUpdate.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

 @Post()
  async createUser(@Body() userDTO: User){
    return this.appService.createUser(userDTO)
  }
 

 @Get()
 readUser(){
 return this.appService.readUser()

 }

 @Put(':id')
 async UpdateUser(
  @Param('id') id:String,@Body() Updatedata:userUpdateDTO
 ):Promise<User>
 {
 return this.appService.UpdateUser(id,Updatedata)
 }
 
 @Delete(':id')

  async deleteUser(@Param('id') id:String)
  {
  return this.appService.deleteUser(id)
}

}


 



 



