import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorators/roles.decorators';
import { RequestWithUser } from '../interfaces/request-with-user.interface';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<string[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );

    if (!requiredRoles) {
      return false;
    }

    const request = context.switchToHttp().getRequest<RequestWithUser>();
    const { user } = request;

    const userRoles: string[] = user?.roles || [];
    const hasRoles = requiredRoles.every(role => userRoles.includes(role));

    return hasRoles;
  }
}
