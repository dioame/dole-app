# Dole App

A Laravel application with React (Inertia.js) for managing households and related data.

## Requirements

Before installing, make sure you have the following installed on your system:

- **PHP** >= 8.2
- **Composer** (PHP package manager)
- **Node.js** >= 18.x and **npm** (or **yarn**)
- **SQLite** (or MySQL/PostgreSQL if you prefer)

## Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd dole-app
```

### 2. Install PHP Dependencies

```bash
composer install
```

### 3. Install Node.js Dependencies

```bash
npm install
```

### 4. Environment Configuration

Copy the `.env.example` file to `.env` (if it exists):

```bash
cp .env.example .env
```

If `.env.example` doesn't exist, create a `.env` file with the following basic configuration:

```env
APP_NAME="Dole App"
APP_ENV=local
APP_KEY=
APP_DEBUG=true
APP_URL=http://localhost:8000

DB_CONNECTION=sqlite
# DB_DATABASE=database/database.sqlite (for SQLite, the path is relative to project root)

SESSION_DRIVER=file
QUEUE_CONNECTION=sync
```

### 5. Generate Application Key

```bash
php artisan key:generate
```

### 6. Database Setup

If using SQLite (default), ensure the database file exists:

```bash
touch database/database.sqlite
```

Or if using MySQL/PostgreSQL, update your `.env` file with database credentials and create the database.

### 7. Run Migrations

```bash
php artisan migrate
```

### 8. Build Frontend Assets

For development:

```bash
npm run dev
```

For production:

```bash
npm run build
```

## Running the Application

### Development Mode

You can run the application in development mode using the provided script:

```bash
composer run dev
```

This will start:
- Laravel development server (http://localhost:8000)
- Queue worker
- Vite dev server for hot module replacement

Alternatively, you can run them separately:

**Terminal 1 - Laravel Server:**
```bash
php artisan serve
```

**Terminal 2 - Vite Dev Server:**
```bash
npm run dev
```

**Terminal 3 - Queue Worker (if using queues):**
```bash
php artisan queue:listen
```

### Production Mode

1. Build the frontend assets:
```bash
npm run build
```

2. Start the Laravel server:
```bash
php artisan serve
```

Or configure your web server (Apache/Nginx) to point to the `public` directory.

## Additional Commands

### Code Formatting

Format code with Prettier:
```bash
npm run format
```

Check formatting:
```bash
npm run format:check
```

### Linting

Run ESLint:
```bash
npm run lint
```

### Type Checking

Check TypeScript types:
```bash
npm run types
```

### PHP Code Style

Format PHP code with Laravel Pint:
```bash
composer run lint
```

### Testing

Run tests:
```bash
composer run test
```

Or with PHPUnit directly:
```bash
php artisan test
```

## Project Structure

- `app/` - Laravel application code (Controllers, Models, etc.)
- `resources/js/` - React components and frontend code
- `routes/` - Application routes
- `database/` - Migrations and seeders
- `public/` - Public assets and entry point
- `config/` - Configuration files

## Technologies Used

- **Laravel 12** - PHP framework
- **React 19** - Frontend library
- **Inertia.js** - SPA framework for Laravel
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Build tool and dev server
- **Laravel Fortify** - Authentication scaffolding

## Troubleshooting

### Permission Issues

If you encounter permission issues, ensure the storage and cache directories are writable:

```bash
chmod -R 775 storage bootstrap/cache
```

### Clear Cache

If you experience issues, try clearing the cache:

```bash
php artisan config:clear
php artisan cache:clear
php artisan view:clear
```

### Rebuild Assets

If frontend changes aren't showing:

```bash
npm run build
```

Or restart the Vite dev server:

```bash
npm run dev
```

## License

[Add your license information here]

