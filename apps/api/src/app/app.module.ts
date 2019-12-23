import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { environment } from '../environments/environment';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { LdapAuthStrategy } from './auth/strategies/ldap-auth-strategy';
import { EmployeesModule } from './employees/employees.module';
import { ProjectEntity } from './projects/project.entity';
import { ProjectsModule } from './projects/projects.module';
import { UserEntity } from './users/user.entity';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...environment.db,
      type: 'mysql',
      entities: [UserEntity, ProjectEntity], // todo: use string with glob
    }),
    AuthModule.register({
      strategy: new LdapAuthStrategy({
        ...environment.ldap,
      }),
    }),
    UsersModule,
    EmployeesModule,
    ProjectsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
