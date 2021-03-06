import OctobusModule from 'makeen-octobus';
import LoggerModule from 'makeen-logger';
import RouterModule from 'makeen-router';
import MongoDBModule from 'makeen-mongodb';
import UserModule from 'makeen-user';
import GQLModule from 'makeen-graphql';
import MailerModule from 'makeen-mailer';
import FileStorageModule from 'makeen-file-storage';
import SecurityModule from 'makeen-security';
import HealthModule from 'makeen-health';
import PlayModule from './play';
import AdminModule from './admin';

export default async config => [
  new OctobusModule(await config.get('modules.octobus')),
  new LoggerModule(await config.get('modules.logger')),
  new MongoDBModule(await config.get('modules.mongodb')),
  new UserModule(await config.get('modules.user')),
  new MailerModule(await config.get('modules.mailer')),
  new FileStorageModule(await config.get('modules.fileStorage')),
  new HealthModule(await config.get('modules.health')),
  new GQLModule(await config.get('modules.gql')),
  new PlayModule(await config.get('modules.play')),
  new AdminModule(await config.get('modules.admin')),
  new RouterModule(await config.get('modules.router')),
  new SecurityModule(await config.get('modules.security')),
];
