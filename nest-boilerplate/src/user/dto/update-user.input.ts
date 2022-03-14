import { CreateUserInput } from './create-user.input';
import { PartialType } from '@nestjs/mapped-types';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  id: number;
}
