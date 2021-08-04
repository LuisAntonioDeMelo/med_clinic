import 'dotenv/config'
import app from './app'

const getPort = (url : string | undefined) => {
    const port = url === undefined? [] : url.split(':');
    return port.length > 0 ? port[port.length -1] : '3333';
}

const port = getPort(process.env.APP_API_URL);

app.listen(port, () => {
    console.log(' ============= // Running // ============= ');
    console.log(`🔥 Server running on port ${port} ! 🔥`);
  });