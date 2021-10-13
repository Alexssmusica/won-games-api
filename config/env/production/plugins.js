module.exports = ({ env }) => ({
    upload: {
        provider: 'aws-s3',
        providerOptions: {
            accessKeyId: env('AWS_ACCESS_KEY_ID'),
            secretAccessKey: env('AWS_ACCESS_SECRET'),
            region: env('AWS_REGION'),
            params: {
                Bucket: env('AWS_BUCKET'),
            },
        },
    },
    graphql: {
        endpoint: '/graphql',
        shadowCRUD: true,
        playgroundAlways: true,
        depthLimit: 7,
        amountLimit: 10000,
        disabledPlugins: [],
        disabledExtensions: [],
        apolloServer: {
            tracing: true,
        },
    },
})
