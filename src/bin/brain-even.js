#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { braineven } from '..';

const name1 = readlineSync.question('Welcome to the Brain Games!\n\nMay I have your name? ');
braineven(0, name1);
