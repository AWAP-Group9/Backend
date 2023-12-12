import server from './app';

const PORT = process.env.PORT || 4004;

server.listen(3001, () => {
  // eslint-disable-next-line no-console
  console.log(`app is listening on localhost:${3001}`);
});
