import { BadGatewayException, Injectable } from '@nestjs/common';
import { IBaseService } from './typing/interface/IBase.service';
import { Base, TOmitBase } from '.';
import { BaseRepository } from './base.repository';
import { Document } from 'mongoose';
import { BaseUtil } from './utils';
import { TData } from 'src/lib';

@Injectable()
export class BaseService<T extends Base> implements IBaseService<T>{
	constructor(
	private readonly genericRepository: BaseRepository<T>) {}
	
	create(data: TOmitBase<T>): Promise<TData<T>> {
		const dataToInsert:T ={
			...data,
			...BaseUtil.getBaseSchemaProperty() as any,
		}
		try {
			return new Promise<T & Document>((resolve, reject) => {
				this.genericRepository.create({...dataToInsert as any,...BaseUtil.getBaseSchemaProperty()})
					.then(create => resolve(create))
					.catch(err => reject(err))
			})
	} catch (error) {
			throw new BadGatewayException(error);
		}
	}

  getAll(): Promise<T[]> {
	  try {
		return <Promise<T[]>>this.genericRepository.getAll();
	  } catch (error) {
		throw new BadGatewayException(error);
	}
  }

  get(id: string) {
  	return this.genericRepository.getById(id);
  }

  delete(id: string) {
	try {
		this.genericRepository.delete(id)
	} catch (error) {
		throw new BadGatewayException(error);
	}
  }

  update(data: T & Document): Promise<T>{
	try {
		return new Promise<any> ((resolve, reject) => {
			this.genericRepository.getById(data.id)
			.then(responseGet => {
				try {
					if (responseGet == null) reject('Not existing')
					this.genericRepository.update(data)
					.then(response => resolve(response))
					.catch(err => reject(err))
				}
				catch(e) {
						reject(e)
				}
			})
			.catch(err => reject(err))
			}) 
	} catch (error) {
		throw new BadGatewayException(error);
	}
  }
}