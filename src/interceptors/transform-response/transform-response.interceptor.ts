import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface StandardResponse<T> {
  success: boolean;
  message: string;
  statusCode: number;
  data: T | null;
}

@Injectable()
export class TransformResponseInterceptor<T>
  implements NestInterceptor<T, StandardResponse<T>> {

  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<StandardResponse<T>> {
    const httpContext = context.switchToHttp();
    const response = httpContext.getResponse();
    const statusCode = response.statusCode;

    return next.handle().pipe(
      map((data) => {
        return {
          success: true,
          message: 'Data berhasil diproses',
          statusCode: statusCode,
          data: data ?? null,
        };
      }),
    );
  }
}