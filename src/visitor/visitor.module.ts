import { Module } from '@nestjs/common';
import { VisitorService } from './visitor.service';
import { VisitorController } from './visitor.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { UserModule } from '../user/user.module';
import { EmployeeModule } from '../employee/employee.module';
import { DirectorateHasSectorModule } from '../directorate_has_sector/directorate_has_sector.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from '../auth/auth.module';

@Module({
    imports: [
        PrismaModule, 
        UserModule, 
        EmployeeModule, 
        DirectorateHasSectorModule,
        ConfigModule,
        AuthModule
    ],
    controllers: [VisitorController],
    providers: [VisitorService],
    exports: [VisitorService]
})
export class VisitorModule {}
