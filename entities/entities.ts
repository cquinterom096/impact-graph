import { Organisation } from './organisation';
import { OrganisationUser } from './organisationUser';
import { User } from './user';
import { Project, ProjectUpdate, ProjectUpdateReactions } from './project';
import { Category } from './category';
import { Donation } from './donation';
import Notification from './notification';
import { BankAccount, StripeTransaction } from './bankAccount';

export const entities: any = [
    Organisation,
    OrganisationUser,
    User,
    Project,
    Notification,
    BankAccount,
    StripeTransaction,
    Category,
    ProjectUpdate,
    ProjectUpdateReactions,
    Donation
]