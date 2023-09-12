## PING PONG

npm start, that's it.

## CI/CD
Consists of 2 stage:
    - Build
    - Rollout

* Test stage skipped.
* Seperated some common variables as environment variables to ease changes.
* Use dockerx for faster build.
* Rollout deployment after build stage is done instead of setting the image manually (k8s deployment must image pull policy must be always).
