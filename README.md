# HCG_Interview_Test

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.2.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Technologies used

- Angular verison 14
- NodeJS v16.17.0
- UI libraries: [TailwindCSS](https://tailwindui.com/)
- Icon pack: [Boxicons](https://boxicons.com/)
- State management: [NgRx](https://ngrx.io/)

## Features / Tasks completed

- Create a web application with 4 sections: Header, Menu / Navigator, Footer, and a section for rendering content.
- Menu / Navigator section contains:
  - Games / Game Versions: display all available versions as menu
    dropdown items / sub items with side menu.
  - Generations: Display all available generations as menu dropdown
    items / sub items with side menu.
  - Locations.
  - Items.
- Create a home page. Home page contains:

  - Trailer section.
    - Create a carousel with each carousel item is a video clip.
    - Carousel includes 4 video clips from YouTube:
    - https://youtu.be/D0zYJ1RQ-fs
    - https://youtu.be/1roy4o4tqQM
    - https://youtu.be/bILE5BEyhdo
    - https://youtu.be/uBYORdr_TY8 \* Display 3 items on screen at the same time. Need navigation
      buttons, dots, or swipe gestures to view all items in carousel.
  - Pokémon section
    - Display 10 Pokémons with image and name.
    - Display 5 Pokémons on each row.
    - Have a “View More” button on the top right corner of this section to open the Pokémon list.
    - When clicking a Pokémon image / name: display a modal / dialog / popup which contains details of the selected Pokémon, contents
      are divided into 2 columns, image on the left side and details
      information on the other side.
  - Item section.
    - Display 10 items with image and name.

- Create a Pokémon list page. Pokémon list page contains:
  - Have a search bar at the top of the list to filter Pokémon by name. Debounce time for search is 300ms.
  - Display 5 Pokémons on each row.
  - Use pagination. Default is 20 Pokémons visible at the same time.
  - Have a dropdown to change the number of visible Pokémons (10, 20, 50, 100).
  - When clicking a Pokémon image / name: display a modal / dialog / popup which contains details of the selected Pokémon, contents are divided into 2 columns, image on the left side and details information on the other side.
  - Can filter Pokémon with query params on URL.
  - Apply state management to manage the data.
  - Implement animations for better experiencing.
