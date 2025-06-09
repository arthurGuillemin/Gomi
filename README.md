# GOMI ♻️ – Projet CloudVision

GOMI est une application web fullstack permettant de :

- Trier des déchets grâce à une IA de classification d’image.
- Générer des recettes avec les ingrédients de son frigo grâce à une IA.
- Gérer des utilisateurs (authentification et db).
- Proposer une interface fluide en React pour utiliser tous les services.

---

## 📁 Structure du projet

Ce repository principal utilise des **submodules Git** pour organiser le code :

```bash
.
├── client/           # Interface React (Frontend)
├── server/           # API Flask (Backend + Auth)
├── AI/
│   ├── ai-trie/      # App Gradio IA de tri des déchets
│   └── ai-recipeV2/  # App Gradio IA de d'identification d'ingrédients et de generation d'une recette
    └── ai-recipe-ollama/  #V1 de l'ia pour generation de la recette (Flask + Ollama)
```

⚠️ Tous les submodules doivent être initialisés après un clone :
```bash
git clone --recurse-submodules https://github.com/arthurGuillemin/Gomi.git
```
## 📦 Submodules Hugging Face

Les projets IA sont des submodules Git, même s’ils sont hébergés sur Hugging Face :

- [`ia/ai-trie`](https://huggingface.co/spaces/ankz22/trash-classifier/tree/main)
- [`ia/ai-recipe`](https://huggingface.co/spaces/ankz22/Fridge_recipe_app2/tree/main)

> **Note :** GitHub ne crée pas de lien cliquable automatiquement pour ces submodules, car Hugging Face n’est pas reconnu comme un provider Git natif.

---

## 🌍 Déploiement

- 🌐 **App principale** (frontend) : [Netlify](https://gomiproject.netlify.app/)
- 🧠 **IA tri des déchets** (Gradio) : [Hugging Face](https://huggingface.co/spaces/ankz22/trash-classifier)
- 🍳 **IA recettes** (Gradio) : [Hugging Face](https://huggingface.co/spaces/ankz22/Fridge_recipe_app2)
- 🗄️ **Backend** : [Azure Web App](https://flask-backend-gomi-hbbjbyc9agend4fh.francecentral-01.azurewebsites.net)

---

---

## 🚀 Lancement (optionnel)

L'application est **déjà déployée**. Le lancement local n’est **pas oblgatoire**.

### Pré-requis

- Node.js (Frontend)
- Python 3.11+ (Backend + IA)
- `pip` & `venv`
- Docker (si utilisé)
- **Fichier `.env` requis dans le backend pour utiliser Supabase** (non fourni pour des raisons de sécurité)

### Lancer manuellement

```bash
# Frontend
cd client
npm install
npm run dev
```

```bash
# Backend
cd server/server
python -m venv .venv
source .venv/bin/activate  # (ou .venv\Scripts\activate sur Windows)
pip install -r ../requirements.txt
python run.py
```

```bash
# IA - tri des déchets
cd AI/ai-trie
python app.py
```

```bash
# IA - génération de recette
cd AI/ai-recipe
python app.py
```

```bash
# IA - génération de recette - Ollama
cd AI/ai-recipe-Ollama
pip install -r requirements.txt
ollama run llava
python app.py
```

---

## 📚 Techs utilisées

- **Frontend** : React, Vite
- **Backend** : Flask, Gunicorn, Supabase ,  Werkzeug , marshmallow, pytest 
- **IA** : Gradio, Transformers , torch , torchvision , pillow , ollama
- **DevOps** : Docker, Github Actions , Git Submodules, Hugging Face Spaces, netlify , Azure

---


## 👨‍💻 Auteurs

Arthur Guillemin – [Hugging Face](https://huggingface.co/ankz22)
Kelly Gama - [Github](https://github.com/yelineeee)
Emilie Caverne [Github](https://github.com/emilie-caverne)
Ryan Annic [Github](https://github.com/gladiaaa)
