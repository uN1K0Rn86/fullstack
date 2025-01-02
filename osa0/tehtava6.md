```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
        Note right of browser: Payload is delivered in JSON form.
    activate server
    server->>browser: {"message":"note created"}

    Note right of browser: The payload appears as a new note on the HTML document.
```