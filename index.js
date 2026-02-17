import e from 'express';

const app = e();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({
        message: "Hello from a container!",
        service: 'hello-node',
        pod: process.env.POD_NAME || 'unknown',
        time: new Date().toISOString()
    });
});

// health end-points for the probes
// both of these end-points are needed for kubernetes to know that our app is alive and well
app.get(('/readyz'), (req,res) => res.status(200).send('ready!'));
app.get(('/healthz'), (req,res) => res.status(200).send('ok!'));

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}!`);
})