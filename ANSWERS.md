- [x] Why would you use class component over function components (removing hooks from the question)?
You would use class components instead of functional components because you are working for a company that has a robust code base that uses class components and it would be to costly to transition the codebase to functional components.
- [x] Name three lifecycle methods and their purposes.
    ComponentDidMount is a method that runs as soons as the components are mounted on the DOM it is used to make api calls, set up subscriptions and also create event listeners.
    ComponentDidUpdate is a method that runs whenever the DOM is rerendered.
    ComponentDidUnmount is a method that runs when a component is unmounted from the DOm is can be used to remove subscriptions and event listeners that have had their associated components unmounted.
- [x] What is the purpose of a custom hook?
    The purpose of custom hooks is to give you reusable hooks that have the functionality of the basic hooks as well often used methods such as event handlers.
- [x] Why is it important to test our apps?
    It's important to test our apps so that we have confidence that our users will get the best possible experience when they use our apps.