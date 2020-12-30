import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { Validation } from "src/modules/app/validation.pipe";

export class ServiceConfig{
    static configureServices(app:INestApplication){
        this.configureSwagger(app);
        this.configureCORS(app);
        app.useGlobalPipes(new Validation());
    }
    private static configureSwagger(app:INestApplication){
        const options = new DocumentBuilder()
            .setTitle('AudioAcademy example')
            .setDescription('The AudioAcademy API description')
            .setVersion('1.0')
            .addTag('AudioAcademy')
            .build();
        const document = SwaggerModule.createDocument(app, options);
        SwaggerModule.setup('api', app, document);
    }
    private static configureCORS(app:INestApplication){
        app.enableCors();
    }
}