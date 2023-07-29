# dummy-app
Cereza soft tech proof. React Native App

   <p align="left">
   <img src="https://img.shields.io/badge/STATUS-EN%20DESAROLLO-green">
   </p>

Dummy-app es una aplicación diseñada con expo - react native para mostrar una lista de productos y poder acceder a ellos y conocer
todas sus imagenes y caracteristicas. Los productos son obtenidos desde `https://dummyjson.com/products`

Se pueden agregar los productos a una lista de favoritos y se pueden eliminar en cualquier momento, asi como también es posible marcar
cada producto como comprado y observarlos en otra lista desde donde se puede acceder a ellos en cualquier momento y eliminarlos de
la misma.

La navegación es muy sencilla y está compuesta por tres pestañas. Una para la lista de todos los productos, otra para acceder a ver
la lista de favoritos y una última para ver la lista de productos marcados como comprados.

La navegación esta diseñada mediante createNativeStackNavigator y createBottomTabNavigator y las funcionalidades de Agregar a favoritos
y marcar los productos como comprados están hechos mediante React-Redux y Redux Toolkit. La persistencia en la navegación está incorporada
con redux-persist.

## Acceso al proyecto

1. Clona el código

   `git clone https://github.com/nhsiciliano/dummy-app.git`

2. Instala las dependencias de desarrollo

   `npm install`

3. Inicia un servidor local de desarrollo

   `npx expo start`

4. Puedes iniciar este proyecto en dispositivos IOS: tecla `i` o en dispositivos Android: tecla `a`
