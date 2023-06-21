import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // Lógica de autorización y verificación de autenticación
    const request = context.switchToHttp().getRequest();    
    if ((request.headers.authorization).split(' ')[1] === 'test1') {
      return true; // Se permite el acceso
    }
    return false; // Se deniega el acceso
  }
}
