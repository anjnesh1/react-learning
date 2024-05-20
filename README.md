# React

## Parcel 
 -  https://parceljs.org/
 - Created Dev build
 - Created Local server
 - HMR : Hot module replacement = 
 - parcel uses File watching algorithms which is written in c++;
 - Caching - parcel used cache for faster builds.
 - parcel also do image optimization( IM is one of the costly operations )
 - minification for production build
 - Bundling- it will bundle the package
 - compressing: it compress the file
 - Consistent Hashing- 
 - Code splitting
 - Differential bundling= support older browsers
 - Diagnostics
 - Error Handling= better error suggestion
 - Https
 - Tree shaking- remove unused code for you
 - Different dev and prod bundles

 How to create prod build:
    npx parcel build index.html
    when you will run this command in this app- you will get error because of the config done in package.json "main": "App.js",


## React Component
   ### Class Based component (Old ways to create component)
   ### Functional component (New ways to create component)
      It is nothing but a javascript function which returns JSX. In other words, It is a simple js function which return React element.


Component composition- A React component called inside a component is called Component Composition.