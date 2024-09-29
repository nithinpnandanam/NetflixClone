<h1 align="center">NetflixClone</h1>
<p align="center">A Clone of Netflix App </p>

## Video 
- [Vide Demo in Youtube](https://developers.google.com/youtube/v3/getting-started)
  
## Setup
```
# install dependencies
npm install

# run project
npm run dev

# run build
npm run build
```
## Feature List
- **User Authentication:** Includes a login page and a sign-up option for new users.
- **Movie Listing:** A dedicated page for browsing movies categorized by genre.
- **Multi-Language Support:** The application supports multiple languages for diverse user accessibility.
- **Personalized Recommendations:** Provides movie suggestions tailored to user input and preferences.


## Login Credentials
- **Username:** `chandler5@gmail.com`
- **Password:** `Chandler1!`

> [!NOTE]
> - This project originally featured an ***AI recommendation system*** called ***GPT Search***, allowing users to request movie suggestions.
> - The implementation utilized OpenAI APIs.
> - However, the free tier for these APIs has now ended.
> - As a result, we have adopted an alternative approach that restricts users to a predefined list of questions, with hardcoded responses.

> [!IMPORTANT]
> - For the project to run we need **personalised TMDB api key** so that data from TMDB website can be accessed
> - [Create personalised TMDB key](https://www.themoviedb.org/)
> - Create an anv file in the root folder and add the **personalised TMDB api key** as shown below
> - ```
>   VITE_TMDB_Key= " Your personalised TMDB api key "
>   ```

## Contributing and Support

Feel free to open a pull request if you can help in improving this project.

