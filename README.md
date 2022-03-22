# Alvaro Scelza

Personal website and blog.

## Technology stack
- Python 3
- [Pelican 4](https://docs.getpelican.com/en/4.7.2/quickstart.html)

## Installation and running

- Create virtual environment and activate it. Example: `virtualenv venv`
- Enter environment: Example: `venv\Scripts\activate`
- `pip install -r requirements.txt`
- `python -m pelican content` para generar la carpeta 'output'.
- `python -m pelican --listen --output ./output` para levantar el servidor.

## Deployment

- pelican content
- ghp-import output -b master
- git push origin master
