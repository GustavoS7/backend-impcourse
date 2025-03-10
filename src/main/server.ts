import { env } from './app/config';
import { app } from './app/app';

app.listen(env.PORT, () => console.log('📚 Server is running ' + env.PORT));
