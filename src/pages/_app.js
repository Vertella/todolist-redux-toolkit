import { Provider } from 'react-redux';
import { store } from "../store";
import todoSlice from '@/todoSlice';



function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
