# increase-formik-performance-react

This is a repository which shows you an alternative method on how you can solve Formik ussues when using heavy [CSS-In-JS libraries](https://itnext.io/how-to-increase-css-in-js-performance-by-175x-f30ddeac6bce?gi=9a28432e6a86) such as emotion-based ones like Material-UI.

Since Formik re-renders the component every time you change an input, the UI component needs to re-render completely, heavily tasking the user's CPU.

This will show you an alternative method than the one posted by Matt Faircliff and Julian Rachmann [here](https://medium.com/@mfaircliff/optimise-your-large-formik-forms-in-create-react-app-b63a409700e2) - Post from

I've been using this same code in production without issues. This may look like a hack, and I'm more than welcome to receive feedback from it.

## The concept

We simply let the `<TextField />` component handle its own internal state, and then we propagate the change to Formik with an onBlur event. We also add additional safeguards to allow for pre-filled passwords to work and when you change an attribute of the TextField to work correctly as simply having the internal state wouldn't populate correctly if the `<Formik initialValues>` changed when having `enableReinitialize={true}`.

The piece of code that you want is located in: [src/components/Fields/Form/PerformantTextField/index.tsx](src/components/Fields/Form/PerformantTextField/index.tsx)

# Just for fun

- TypeScript
- Yarn 2 (V 3.1.1) (Not using Zero Installs)
- Vite instead of Webpack. This project weas bootstrapped with Create Vite App
- Material UI V5 (Note, this method also works in MUI V4)

# To start:

- `yarn dev`
- Navigate to [localhost:3000](http://localhost:3000/)
- The [http://localhost:3000/performant](http://localhost:3000/performant) shows the current solution.
- The http://localhost:3000/performant
