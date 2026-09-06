# NodeJS + MVC

1. per installare express npm install Express
2. per installare EJS npm install EJS
3. per eseguire applicazione node app.js


# Unipegaso
### Tecnologie Web
### Lezione 59 NodeJS MVC

vedi qui https://chatgpt.com/share/6a9ddc4e-1710-83ed-a5c1-e31de84835f0

l'app funziona così:

Browser
   │
   │ GET /
   ▼
Express (Node.js)
   │
   │ prepara i dati
   ▼
EJS
   │
   │ inserisce i dati nell'HTML
   ▼
HTML
   │
   ▼
Browser

## come funziona?
1. app.js → contiene il server Express.
2. views/index.ejs → contiene l'HTML della homepage.
3. views/item.ejs → contiene l'HTML della pagina del singolo item.

in index c'è un link per tornare alla home. è stata aggiunta una navigazione tra le due rotte
             GET /
              │
              ▼
        ┌─────────────┐
        │  index.ejs  │
        │             │
        │ Item 1 ────────────┐
        │ Item 2 ─────────┐  │
        │ Item 3 ──────┐  │  │
        └──────────────┼──┼──┘
                       │  │
              GET /item/3 ...
                       │
                       ▼
                 item.ejs
                       │
                   "Torna"
                       │
                       ▼
                    GET /

non stiamo più solo navigando tra pagine di un sito: nell'app le pagine sono collegate alle rotte e le rotte ricevono e utilizzano dati
