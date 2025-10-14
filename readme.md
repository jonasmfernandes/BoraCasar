# BoraCasar

[![Ask DeepWiki](https://devin.ai/assets/askdeepwiki.png)](https://deepwiki.com/jonasmfernandes/BoraCasar)

BoraCasar is a mobile application built with React Native and Expo, designed to help couples plan their dream wedding seamlessly. The app aims to reduce the stress of wedding organization, allowing users to focus on the romance.

The initial screen welcomes users with the slogans:
*   "Seu casamento dos sonhos, perfeitamente planejado" (Your dream wedding, perfectly planned).
*   "Menos estresse, mais amor" (Less stress, more love).

## Technologies Used

*   **Framework:** React Native with Expo
*   **Language:** TypeScript
*   **Routing:** Expo Router
*   **UI Components:**
    *   `expo-linear-gradient` for gradient effects.
*   **Fonts:** `@expo-google-fonts/inter` for typography.

## Project Structure

The project is organized into the following directories:

*   **`app/`**: Contains the main screen layouts and navigation logic using Expo Router. `index.tsx` serves as the entry point screen.
*   **`assets/`**: Holds static assets like custom fonts (`.ttf`) and images (`.png`, `.jpg`).
*   **`components/`**: Includes reusable React components, such as the custom `Button.tsx`.
*   **`constants/`**: Stores global application constants, including color palettes (`Colors.ts`) and typography styles (`Fonts.ts`).

## Getting Started

To run this project locally, follow these steps:

### Prerequisites

*   Node.js (LTS version recommended)
*   npm or yarn
*   Expo Go app on your mobile device or an emulator/simulator set up.

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/jonasmfernandes/BoraCasar.git
    cd BoraCasar
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```
    or if you use yarn:
    ```bash
    yarn install
    ```

3.  **Run the application:**
    ```bash
    npm start
    ```
    This will start the Metro bundler. You can then scan the QR code with the Expo Go app on your device or run the app on a simulator.

    You can also run platform-specific commands:
    *   For Android: `npm run android`
    *   For iOS: `npm run ios`
    *   For Web: `npm run web`