# NestJS Answers With Short Code Examples

## Middle

1) How DI works?
```ts
@Injectable()
class UsersService {}

@Controller('users')
class UsersController {
  constructor(private readonly users: UsersService) {}
}
```

2) What are modules?
```ts
@Module({
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
```

3) Middleware vs Guards vs Interceptors vs Pipes?
```ts
@UseGuards(AuthGuard)
@UseInterceptors(LoggingInterceptor)
@Post()
create(@Body(new ValidationPipe()) dto: CreateUserDto) {}
```

4) DTO validation?
```ts
class CreateUserDto {
  @IsEmail() email!: string;
  @MinLength(8) password!: string;
}
```

5) Global pipes/filters/interceptors?
```ts
app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
app.useGlobalFilters(new HttpExceptionFilter());
```

6) Feature module structure?
```txt
users/
  users.module.ts
  users.controller.ts
  users.service.ts
```

7) Async errors/custom exceptions?
```ts
if (!user) throw new NotFoundException('User not found');
```

8) Test service with mocks?
```ts
const mod = await Test.createTestingModule({
  providers: [UsersService, { provide: RepoToken, useValue: { find: jest.fn() } }],
}).compile();
```

9) JWT auth with Passport?
```ts
@UseGuards(AuthGuard('jwt'))
@Get('me')
me(@Req() req: any) { return req.user; }
```

10) Consistent responses?
```ts
@Injectable()
class TransformInterceptor implements NestInterceptor {
  intercept(_ctx: ExecutionContext, next: CallHandler) { return next.handle().pipe(map(data => ({ data }))); }
}
```

## Senior

1) Modular architecture for many teams?
```txt
Domain modules + shared platform modules (auth, db, logging) with strict exports.
```

2) Provider scopes and performance?
```ts
@Injectable({ scope: Scope.DEFAULT }) // prefer singleton
class PricingService {}
```

3) Advanced authorization?
```ts
@SetMetadata('permissions', ['users:read'])
@UseGuards(JwtGuard, PermissionsGuard)
@Get() listUsers() {}
```

4) Observability in Nest?
```ts
this.logger.log(JSON.stringify({ route: req.url, ms, traceId }));
```

5) Transactions and eventual consistency?
```ts
await this.prisma.$transaction(async (tx) => {
  await tx.order.create({ data: order });
  await tx.outbox.create({ data: event });
});
```

6) Reusable dynamic modules?
```ts
@Module({})
export class CacheModule {
  static forRoot(ttl: number): DynamicModule { return { module: CacheModule, providers: [{ provide: 'TTL', useValue: ttl }], exports: ['TTL'] }; }
}
```

7) Multi-tenant backend?
```ts
// tenant resolved from host/header, injected via request context
const tenantId = req.headers['x-tenant-id'];
```

8) Optimize cold start / throughput?
```ts
// avoid heavy request-scoped providers and eager connections for serverless
```

9) Migrate Express to Nest incrementally?
```ts
// start with one module in Nest, proxy remaining routes to legacy service
```

10) Enforce architecture constraints?
```json
{
  "scripts": {
    "lint": "eslint .",
    "test:e2e": "jest --config test/jest-e2e.json"
  }
}
```
