import { SetMetadata } from '@nestjs/common';
import { EnumUserType } from '../enum/enum';

export const Roles = (...roles: EnumUserType[]) => SetMetadata('roles', roles);