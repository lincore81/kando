# Planning


## Learning Objectives
By working on this project, I want to learn/refamiliarise/experience the following:
- [ ] practical react
    - [ ] functional components
    - [ ] handling state (hooks? alternatives?)
    - [ ] OOP (but only as much as I can stomach)
    - [ ] common react patterns, best practices
    - [ ] how to effectively turn a design into a bunch of components
- [ ] react ecosystem
    - [ ] use an icon library
    - [ ] anything else worth looking into?
- [ ] tailwindcss
- [ ] figma 
    - [ ] create a simple page layout
- [ ] storybook
    - [ ] basics
    - [ ] what is up with legacy peer deps / webpack 5 issues?
- [ ] testing
    - [ ] how to write actually useful unit tests with jest
    - [ ] jsdom? How does one test tsx?
    - [ ] maybe even a slice of tdd?
- [ ] webpack 
    - [x] config hell
    - [x] dev server
    - [x] importing assets
    - [ ] html-webpack-plugin
    - [ ] testing
    - [ ] proper use of dev & production modes
- [ ] git
    - [ ] disciplined commits
    - [ ] use branches for dev once I have a 'stable' app
    - [ ] tags? for milestones
- [ ] async js, working with APIs
    - [ ] Unless I set up a somewhat secure express server with user management,
          I'd have to invent a reason why I need this.
    - [ ] Ideally I'd be able to setup a simple, secure server that stores the
          data as plain text. I don't need user management, since I'm the only user,
          but if it doesn't take more than a day to set everything up I might do it.
    - [ ] check out https://www.npmjs.com/package/express-user-manager

## Milestones
1. A simple kanban
2. A practical kanban
3. A todo list
4. ???
99. Backend w/ user management etc.

### A Simple Kanban
- [ ] The page contains a kanban with a few labelled buckets (hard coded).
- [ ] The kanban contains a few hard coded items
  - [ ] Items are cards with a title and additional text
- [ ] Implement a vi-keys library
  - [ ] support for simple motions and operators, no counts
- [ ] I can use arrow- and vi-keys to navigate the kanban
  - [ ] `h`, `l` move between buckets; `j`, `k` navigate between items
  - [ ] set focus and scroll the screen to the selected element
- [ ] I can add new buckets and delete them
  - [ ] `A` appends a bucket, `a` inserts a bucket after the current one
  - [ ] `db` deletes the current bucket
  - [ ] Use the command pattern to allow undo/redo to be implemented later 
  - [ ] Adding a bucket prompts users to enter a name.
- [ ] I can insert cards into the current bucket and edit them 
  - [ ] `o` inserts a card below the cursor and immediately enters insert mode
  - [ ] I can insert text into the card, the first line is its title
  - [ ] `i` enters insert mode, `escape` returns to normal mode
  - [ ] the card editor is a simple textarea for now and doesn't support vi-keys
  - [ ] returning to normal mode while the textarea is empty (excluding whitespace) 
        deletes the card
- [ ] I can move cards around with `shift` + `hjkl`
- [ ] I can fold cards so that only the title is visible
  - [ ] `zc` folds a card
  - [ ] `zo` unfolds a card
- [ ] I can yank and paste buckets and cards
  - [ ] `yb` yanks a bucket, `yc` yanks a card
  - [ ] `p` pastes an item after the current item
  - [ ] `P` pastes an item before the current item
  - [ ] deleted and yanked items are available in the clipboard as plain text,
        but the clipboard isn't read when pasting
- [ ] user data is stored in localStorage for now

