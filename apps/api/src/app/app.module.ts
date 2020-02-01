import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { environment } from '../environments/environment';
import { AuthModule } from './auth/auth.module';
import { LdapAuthStrategy } from './auth/strategies/ldap-auth-strategy';
import { ormConfig } from './orm.config';
import { ProjectsModule } from './projects/projects.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormConfig),
    AuthModule.register({
      strategy: new LdapAuthStrategy({
        ...environment.ldap,
      }),
    }),
    UsersModule,
    ProjectsModule,
  ],
})
export class AppModule {}
