async function bootstrap() {
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(
        AppModule,
        {
            transport: Transport.KAFKA,
            options: {
                client: {
                    brokers: ['localhost:9092']
                },
                consumer: {
                    groupId: 'auth-consumer'
                }
            }
        }
    )
    await app.listen();
}