import { BadGatewayException, Injectable } from '@nestjs/common';
import { IBaseService } from './typing/interface/IBase.service';
import { Base } from '.';
import { BaseRepository } from './base.repository';
import { CreateQuery, Document } from 'mongoose';

@Injectable()
export class BaseService<T extends Base> implements IBaseService<T>{
	constructor(
	private readonly genericRepository: BaseRepository<T>) {}
	
	create(data: CreateQuery<T>): Promise<T & Document> {
		try {
			return new Promise<T & Document>((resolve, reject) => {
				this.genericRepository.create(data)
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

  get(id: number): Promise<T> {
	try {
		  
	} catch (error) {
		throw new BadGatewayException(error);
	}
  	return <Promise<T>>this.genericRepository.get(id);
  }

  delete(id: number) {
	try {
		this.genericRepository.delete(id)
	} catch (error) {
		throw new BadGatewayException(error);
	}
  }

  update(data: T & Document): Promise<T>{
	try {
		return new Promise<any> ((resolve, reject) => {
			this.genericRepository.get(data.id)
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