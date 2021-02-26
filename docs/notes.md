# Decisions:

- I used `create-react-app` as a starting point to speed up setup process, even though I’m aware of limited options of configuration (without ejecting webpack config)
- I used `session storage` instead of backend api calls, and created 2 timeouts to fake api response delay
- I used `typescript` just to learn something new while completing this task (I’ve never had an opportunity to work with typescript in my projects)
- I used `styled-components` as they were already used in atlaskit (however, I’m used to writing scss files and didn’t become a styled-components fan after this exercise :) )

# To Do

I did the "best effort in a reasonable time" approach to solving the homework task, however if I had more time I would also look at the following items:

- Add unit tests
- Use rem (not px)
- Image optimisation (consider using external service)
- Phone validation (consider using external service, for example: Twilio)
- Test and improve accessibility
- Improve pages look & feel
- Read about typescript best practices and improve types/interfraces approach
- Add Cancel button on the form + modal with message: “Your changes will be lost. Are you sure you want to exit the page”
- Improve form validation UX

# Bugs / limitations of atlaskit packages:

I noticed atlaskit components do not have the best UX. Also the documentation is quite buggy. I noted few points here:

- Errors in example files: https://codesandbox.io/s/xo1l5?module=/example.tsx&file=/example.tsx
- Form header component - missing heading level selection (hardcoded H2, bad accessibility approach)
- form fields are validated by default on change, alerting user immediately when they start typing first letter - bad UX) I changed it and trigger errors onBlur only, but current App UX is also not optimal and couldn't be fixed due to atlaskit limitations)
- there is no easy way to trigger validate function on blur with empty value to display “field required” error message. I decided to trigger required validation on submit only (try leaving date field empty)
- https://codesandbox.io/s/fbfhm?module=/example.tsx&file=/example.tsx:1422-1432 “valid” message is visible on start (with empty value)
- Poor UX of date picker (can’t easily move between years) + bugs in the code sandbox https://codesandbox.io/s/xsku8?module=/example.tsx
