import {  Get, Post, Delete, Put, Body, Param} from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { IBaseService } from './typing/interface/IBase.service'
import { Base, IBaseController, TDocument } from './typing';
import { CreateQuery } from 'mongoose';

export class BaseController<T extends Base> implements IBaseController<T>{

	constructor(private readonly baseService: IBaseService<T>) {}

	@Get()
	@ApiResponse({ status: 200, description: 'Ok'})
	async getAll(): Promise<T[]> {
	  return this.baseService.getAll()
	}

	@Get(':id')
	@ApiResponse({ status: 200, description: 'Entity retrieved successfully.'})
	@ApiResponse({ status: 404, description: 'Entity does not exist'})
	async get(@Param('id') id: number): Promise<T> {
	  return this.baseService.get(id)
	}

	@Post()
	@ApiResponse({ status: 201, description: 'The record has been successfully created.'})
	@ApiResponse({ status: 403, description: 'Forbidden.'})
	@ApiResponse({ status: 400, description: 'Bad Request.'})
	async create(@Body() entity: CreateQuery<T>): Promise<TDocument<T>> {
		return this.baseService.create(entity);
	}

	@Delete(':id')
	@ApiResponse({ status: 200, description: 'Entity deleted successfully.'})
	@ApiResponse({ status: 400, description: 'Bad Request.'})
	async delete(@Param('id') id: number) {
	  this.baseService.delete(id);
	}

	@Put()
	@ApiResponse({ status: 400, description: 'Bad Request.'})
	@ApiResponse({ status: 200, description: 'Entity deleted successfully.'})
	async update(@Body() entity: T): Promise<T> {
	  return this.baseService.update(entity);
	}

}