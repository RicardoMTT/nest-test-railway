import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';

@Injectable()
export class TokenExpirationGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization;
    
    if (!token) {
      throw new UnauthorizedException('Token no proporcionado');
    }

    const [, jwtToken] = token.split(' ');

    try {
      const decodedToken = this.jwtService.verify(jwtToken,{
        secret:'secreto'
      });

      if (Date.now() >= decodedToken.exp * 1000) {
        const response = context.switchToHttp().getResponse<Response>();
        response.status(401).json({ message: 'Token expirado' });
        return false;
      }

      request.user = decodedToken;
      return true;
    } catch (error) {
        console.log('error',error);
        
      throw new UnauthorizedException('Token inválido');
    }
  }
}
