/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** An ISO 8601-encoded datetime */
  ISO8601DateTime: { input: any; output: any; }
};

export type Dob = {
  __typename?: 'Dob';
  age?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  date?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type Id = {
  __typename?: 'Id';
  name: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type Location = {
  __typename?: 'Location';
  city?: Maybe<Scalars['String']['output']>;
  coordinatesId: Scalars['Int']['output'];
  country?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  id: Scalars['ID']['output'];
  postcode?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  timezoneId: Scalars['Int']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type Login = {
  __typename?: 'Login';
  createdAt: Scalars['ISO8601DateTime']['output'];
  id: Scalars['ID']['output'];
  md5?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  salt?: Maybe<Scalars['String']['output']>;
  sha1?: Maybe<Scalars['String']['output']>;
  sha256?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  username?: Maybe<Scalars['String']['output']>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** An example field added by the generator */
  testField: Scalars['String']['output'];
};

export type Name = {
  __typename?: 'Name';
  first?: Maybe<Scalars['String']['output']>;
  last?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Picture = {
  __typename?: 'Picture';
  createdAt: Scalars['ISO8601DateTime']['output'];
  id: Scalars['ID']['output'];
  large?: Maybe<Scalars['String']['output']>;
  medium?: Maybe<Scalars['String']['output']>;
  thumbnail?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type Query = {
  __typename?: 'Query';
  fetchUsers: Array<RandomUser>;
};

export type RandomUser = {
  __typename?: 'RandomUser';
  cell: Scalars['String']['output'];
  dob: Dob;
  email: Scalars['String']['output'];
  gender: Scalars['String']['output'];
  id: Id;
  location: Location;
  login: Login;
  name: Name;
  nat: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  picture: Picture;
  registered: Registered;
};

export type Registered = {
  __typename?: 'Registered';
  age?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  date?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
};
