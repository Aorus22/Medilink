
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Doctor
 * 
 */
export type Doctor = $Result.DefaultSelection<Prisma.$DoctorPayload>
/**
 * Model Appointment
 * 
 */
export type Appointment = $Result.DefaultSelection<Prisma.$AppointmentPayload>
/**
 * Model HistoricalData
 * 
 */
export type HistoricalData = $Result.DefaultSelection<Prisma.$HistoricalDataPayload>
/**
 * Model Pharmacy
 * 
 */
export type Pharmacy = $Result.DefaultSelection<Prisma.$PharmacyPayload>
/**
 * Model MriTest
 * 
 */
export type MriTest = $Result.DefaultSelection<Prisma.$MriTestPayload>
/**
 * Model UrineTest
 * 
 */
export type UrineTest = $Result.DefaultSelection<Prisma.$UrineTestPayload>
/**
 * Model BloodTest
 * 
 */
export type BloodTest = $Result.DefaultSelection<Prisma.$BloodTestPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AppointmentStatus: {
  pending: 'pending',
  confirmed: 'confirmed',
  rejected: 'rejected'
};

export type AppointmentStatus = (typeof AppointmentStatus)[keyof typeof AppointmentStatus]

}

export type AppointmentStatus = $Enums.AppointmentStatus

export const AppointmentStatus: typeof $Enums.AppointmentStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.doctor`: Exposes CRUD operations for the **Doctor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Doctors
    * const doctors = await prisma.doctor.findMany()
    * ```
    */
  get doctor(): Prisma.DoctorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appointment`: Exposes CRUD operations for the **Appointment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Appointments
    * const appointments = await prisma.appointment.findMany()
    * ```
    */
  get appointment(): Prisma.AppointmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.historicalData`: Exposes CRUD operations for the **HistoricalData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HistoricalData
    * const historicalData = await prisma.historicalData.findMany()
    * ```
    */
  get historicalData(): Prisma.HistoricalDataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pharmacy`: Exposes CRUD operations for the **Pharmacy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pharmacies
    * const pharmacies = await prisma.pharmacy.findMany()
    * ```
    */
  get pharmacy(): Prisma.PharmacyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mriTest`: Exposes CRUD operations for the **MriTest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MriTests
    * const mriTests = await prisma.mriTest.findMany()
    * ```
    */
  get mriTest(): Prisma.MriTestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.urineTest`: Exposes CRUD operations for the **UrineTest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UrineTests
    * const urineTests = await prisma.urineTest.findMany()
    * ```
    */
  get urineTest(): Prisma.UrineTestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bloodTest`: Exposes CRUD operations for the **BloodTest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BloodTests
    * const bloodTests = await prisma.bloodTest.findMany()
    * ```
    */
  get bloodTest(): Prisma.BloodTestDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Doctor: 'Doctor',
    Appointment: 'Appointment',
    HistoricalData: 'HistoricalData',
    Pharmacy: 'Pharmacy',
    MriTest: 'MriTest',
    UrineTest: 'UrineTest',
    BloodTest: 'BloodTest'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "doctor" | "appointment" | "historicalData" | "pharmacy" | "mriTest" | "urineTest" | "bloodTest"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Doctor: {
        payload: Prisma.$DoctorPayload<ExtArgs>
        fields: Prisma.DoctorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DoctorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DoctorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          findFirst: {
            args: Prisma.DoctorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DoctorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          findMany: {
            args: Prisma.DoctorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>[]
          }
          create: {
            args: Prisma.DoctorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          createMany: {
            args: Prisma.DoctorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DoctorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>[]
          }
          delete: {
            args: Prisma.DoctorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          update: {
            args: Prisma.DoctorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          deleteMany: {
            args: Prisma.DoctorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DoctorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DoctorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>[]
          }
          upsert: {
            args: Prisma.DoctorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          aggregate: {
            args: Prisma.DoctorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDoctor>
          }
          groupBy: {
            args: Prisma.DoctorGroupByArgs<ExtArgs>
            result: $Utils.Optional<DoctorGroupByOutputType>[]
          }
          count: {
            args: Prisma.DoctorCountArgs<ExtArgs>
            result: $Utils.Optional<DoctorCountAggregateOutputType> | number
          }
        }
      }
      Appointment: {
        payload: Prisma.$AppointmentPayload<ExtArgs>
        fields: Prisma.AppointmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppointmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppointmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findFirst: {
            args: Prisma.AppointmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppointmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findMany: {
            args: Prisma.AppointmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          create: {
            args: Prisma.AppointmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          createMany: {
            args: Prisma.AppointmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppointmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          delete: {
            args: Prisma.AppointmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          update: {
            args: Prisma.AppointmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          deleteMany: {
            args: Prisma.AppointmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppointmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AppointmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          upsert: {
            args: Prisma.AppointmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          aggregate: {
            args: Prisma.AppointmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppointment>
          }
          groupBy: {
            args: Prisma.AppointmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppointmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppointmentCountArgs<ExtArgs>
            result: $Utils.Optional<AppointmentCountAggregateOutputType> | number
          }
        }
      }
      HistoricalData: {
        payload: Prisma.$HistoricalDataPayload<ExtArgs>
        fields: Prisma.HistoricalDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HistoricalDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricalDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HistoricalDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricalDataPayload>
          }
          findFirst: {
            args: Prisma.HistoricalDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricalDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HistoricalDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricalDataPayload>
          }
          findMany: {
            args: Prisma.HistoricalDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricalDataPayload>[]
          }
          create: {
            args: Prisma.HistoricalDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricalDataPayload>
          }
          createMany: {
            args: Prisma.HistoricalDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HistoricalDataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricalDataPayload>[]
          }
          delete: {
            args: Prisma.HistoricalDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricalDataPayload>
          }
          update: {
            args: Prisma.HistoricalDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricalDataPayload>
          }
          deleteMany: {
            args: Prisma.HistoricalDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HistoricalDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HistoricalDataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricalDataPayload>[]
          }
          upsert: {
            args: Prisma.HistoricalDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricalDataPayload>
          }
          aggregate: {
            args: Prisma.HistoricalDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHistoricalData>
          }
          groupBy: {
            args: Prisma.HistoricalDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<HistoricalDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.HistoricalDataCountArgs<ExtArgs>
            result: $Utils.Optional<HistoricalDataCountAggregateOutputType> | number
          }
        }
      }
      Pharmacy: {
        payload: Prisma.$PharmacyPayload<ExtArgs>
        fields: Prisma.PharmacyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PharmacyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PharmacyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload>
          }
          findFirst: {
            args: Prisma.PharmacyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PharmacyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload>
          }
          findMany: {
            args: Prisma.PharmacyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload>[]
          }
          create: {
            args: Prisma.PharmacyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload>
          }
          createMany: {
            args: Prisma.PharmacyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PharmacyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload>[]
          }
          delete: {
            args: Prisma.PharmacyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload>
          }
          update: {
            args: Prisma.PharmacyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload>
          }
          deleteMany: {
            args: Prisma.PharmacyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PharmacyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PharmacyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload>[]
          }
          upsert: {
            args: Prisma.PharmacyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload>
          }
          aggregate: {
            args: Prisma.PharmacyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePharmacy>
          }
          groupBy: {
            args: Prisma.PharmacyGroupByArgs<ExtArgs>
            result: $Utils.Optional<PharmacyGroupByOutputType>[]
          }
          count: {
            args: Prisma.PharmacyCountArgs<ExtArgs>
            result: $Utils.Optional<PharmacyCountAggregateOutputType> | number
          }
        }
      }
      MriTest: {
        payload: Prisma.$MriTestPayload<ExtArgs>
        fields: Prisma.MriTestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MriTestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MriTestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MriTestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MriTestPayload>
          }
          findFirst: {
            args: Prisma.MriTestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MriTestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MriTestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MriTestPayload>
          }
          findMany: {
            args: Prisma.MriTestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MriTestPayload>[]
          }
          create: {
            args: Prisma.MriTestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MriTestPayload>
          }
          createMany: {
            args: Prisma.MriTestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MriTestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MriTestPayload>[]
          }
          delete: {
            args: Prisma.MriTestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MriTestPayload>
          }
          update: {
            args: Prisma.MriTestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MriTestPayload>
          }
          deleteMany: {
            args: Prisma.MriTestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MriTestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MriTestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MriTestPayload>[]
          }
          upsert: {
            args: Prisma.MriTestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MriTestPayload>
          }
          aggregate: {
            args: Prisma.MriTestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMriTest>
          }
          groupBy: {
            args: Prisma.MriTestGroupByArgs<ExtArgs>
            result: $Utils.Optional<MriTestGroupByOutputType>[]
          }
          count: {
            args: Prisma.MriTestCountArgs<ExtArgs>
            result: $Utils.Optional<MriTestCountAggregateOutputType> | number
          }
        }
      }
      UrineTest: {
        payload: Prisma.$UrineTestPayload<ExtArgs>
        fields: Prisma.UrineTestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UrineTestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrineTestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UrineTestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrineTestPayload>
          }
          findFirst: {
            args: Prisma.UrineTestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrineTestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UrineTestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrineTestPayload>
          }
          findMany: {
            args: Prisma.UrineTestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrineTestPayload>[]
          }
          create: {
            args: Prisma.UrineTestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrineTestPayload>
          }
          createMany: {
            args: Prisma.UrineTestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UrineTestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrineTestPayload>[]
          }
          delete: {
            args: Prisma.UrineTestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrineTestPayload>
          }
          update: {
            args: Prisma.UrineTestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrineTestPayload>
          }
          deleteMany: {
            args: Prisma.UrineTestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UrineTestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UrineTestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrineTestPayload>[]
          }
          upsert: {
            args: Prisma.UrineTestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrineTestPayload>
          }
          aggregate: {
            args: Prisma.UrineTestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUrineTest>
          }
          groupBy: {
            args: Prisma.UrineTestGroupByArgs<ExtArgs>
            result: $Utils.Optional<UrineTestGroupByOutputType>[]
          }
          count: {
            args: Prisma.UrineTestCountArgs<ExtArgs>
            result: $Utils.Optional<UrineTestCountAggregateOutputType> | number
          }
        }
      }
      BloodTest: {
        payload: Prisma.$BloodTestPayload<ExtArgs>
        fields: Prisma.BloodTestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BloodTestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloodTestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BloodTestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloodTestPayload>
          }
          findFirst: {
            args: Prisma.BloodTestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloodTestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BloodTestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloodTestPayload>
          }
          findMany: {
            args: Prisma.BloodTestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloodTestPayload>[]
          }
          create: {
            args: Prisma.BloodTestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloodTestPayload>
          }
          createMany: {
            args: Prisma.BloodTestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BloodTestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloodTestPayload>[]
          }
          delete: {
            args: Prisma.BloodTestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloodTestPayload>
          }
          update: {
            args: Prisma.BloodTestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloodTestPayload>
          }
          deleteMany: {
            args: Prisma.BloodTestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BloodTestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BloodTestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloodTestPayload>[]
          }
          upsert: {
            args: Prisma.BloodTestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloodTestPayload>
          }
          aggregate: {
            args: Prisma.BloodTestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBloodTest>
          }
          groupBy: {
            args: Prisma.BloodTestGroupByArgs<ExtArgs>
            result: $Utils.Optional<BloodTestGroupByOutputType>[]
          }
          count: {
            args: Prisma.BloodTestCountArgs<ExtArgs>
            result: $Utils.Optional<BloodTestCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    doctor?: DoctorOmit
    appointment?: AppointmentOmit
    historicalData?: HistoricalDataOmit
    pharmacy?: PharmacyOmit
    mriTest?: MriTestOmit
    urineTest?: UrineTestOmit
    bloodTest?: BloodTestOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    appointments: number
    historicals: number
    pharmacies: number
    mriTests: number
    urineTests: number
    bloodTests: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | UserCountOutputTypeCountAppointmentsArgs
    historicals?: boolean | UserCountOutputTypeCountHistoricalsArgs
    pharmacies?: boolean | UserCountOutputTypeCountPharmaciesArgs
    mriTests?: boolean | UserCountOutputTypeCountMriTestsArgs
    urineTests?: boolean | UserCountOutputTypeCountUrineTestsArgs
    bloodTests?: boolean | UserCountOutputTypeCountBloodTestsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountHistoricalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoricalDataWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPharmaciesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PharmacyWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMriTestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MriTestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUrineTestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UrineTestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBloodTestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BloodTestWhereInput
  }


  /**
   * Count Type DoctorCountOutputType
   */

  export type DoctorCountOutputType = {
    appointments: number
  }

  export type DoctorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | DoctorCountOutputTypeCountAppointmentsArgs
  }

  // Custom InputTypes
  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorCountOutputType
     */
    select?: DoctorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    name: string | null
    birthdate: Date | null
    address: string | null
    profession: string | null
    religion: string | null
    avatar: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    name: string | null
    birthdate: Date | null
    address: string | null
    profession: string | null
    religion: string | null
    avatar: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    name: number
    birthdate: number
    address: number
    profession: number
    religion: number
    avatar: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    name?: true
    birthdate?: true
    address?: true
    profession?: true
    religion?: true
    avatar?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    name?: true
    birthdate?: true
    address?: true
    profession?: true
    religion?: true
    avatar?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    name?: true
    birthdate?: true
    address?: true
    profession?: true
    religion?: true
    avatar?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    password: string
    name: string
    birthdate: Date
    address: string
    profession: string
    religion: string
    avatar: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    name?: boolean
    birthdate?: boolean
    address?: boolean
    profession?: boolean
    religion?: boolean
    avatar?: boolean
    appointments?: boolean | User$appointmentsArgs<ExtArgs>
    historicals?: boolean | User$historicalsArgs<ExtArgs>
    pharmacies?: boolean | User$pharmaciesArgs<ExtArgs>
    mriTests?: boolean | User$mriTestsArgs<ExtArgs>
    urineTests?: boolean | User$urineTestsArgs<ExtArgs>
    bloodTests?: boolean | User$bloodTestsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    name?: boolean
    birthdate?: boolean
    address?: boolean
    profession?: boolean
    religion?: boolean
    avatar?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    name?: boolean
    birthdate?: boolean
    address?: boolean
    profession?: boolean
    religion?: boolean
    avatar?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    name?: boolean
    birthdate?: boolean
    address?: boolean
    profession?: boolean
    religion?: boolean
    avatar?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "name" | "birthdate" | "address" | "profession" | "religion" | "avatar", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | User$appointmentsArgs<ExtArgs>
    historicals?: boolean | User$historicalsArgs<ExtArgs>
    pharmacies?: boolean | User$pharmaciesArgs<ExtArgs>
    mriTests?: boolean | User$mriTestsArgs<ExtArgs>
    urineTests?: boolean | User$urineTestsArgs<ExtArgs>
    bloodTests?: boolean | User$bloodTestsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      appointments: Prisma.$AppointmentPayload<ExtArgs>[]
      historicals: Prisma.$HistoricalDataPayload<ExtArgs>[]
      pharmacies: Prisma.$PharmacyPayload<ExtArgs>[]
      mriTests: Prisma.$MriTestPayload<ExtArgs>[]
      urineTests: Prisma.$UrineTestPayload<ExtArgs>[]
      bloodTests: Prisma.$BloodTestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password: string
      name: string
      birthdate: Date
      address: string
      profession: string
      religion: string
      avatar: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    appointments<T extends User$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    historicals<T extends User$historicalsArgs<ExtArgs> = {}>(args?: Subset<T, User$historicalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoricalDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pharmacies<T extends User$pharmaciesArgs<ExtArgs> = {}>(args?: Subset<T, User$pharmaciesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mriTests<T extends User$mriTestsArgs<ExtArgs> = {}>(args?: Subset<T, User$mriTestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MriTestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    urineTests<T extends User$urineTestsArgs<ExtArgs> = {}>(args?: Subset<T, User$urineTestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UrineTestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bloodTests<T extends User$bloodTestsArgs<ExtArgs> = {}>(args?: Subset<T, User$bloodTestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BloodTestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly birthdate: FieldRef<"User", 'DateTime'>
    readonly address: FieldRef<"User", 'String'>
    readonly profession: FieldRef<"User", 'String'>
    readonly religion: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.appointments
   */
  export type User$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * User.historicals
   */
  export type User$historicalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricalData
     */
    select?: HistoricalDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricalData
     */
    omit?: HistoricalDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricalDataInclude<ExtArgs> | null
    where?: HistoricalDataWhereInput
    orderBy?: HistoricalDataOrderByWithRelationInput | HistoricalDataOrderByWithRelationInput[]
    cursor?: HistoricalDataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoricalDataScalarFieldEnum | HistoricalDataScalarFieldEnum[]
  }

  /**
   * User.pharmacies
   */
  export type User$pharmaciesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInclude<ExtArgs> | null
    where?: PharmacyWhereInput
    orderBy?: PharmacyOrderByWithRelationInput | PharmacyOrderByWithRelationInput[]
    cursor?: PharmacyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PharmacyScalarFieldEnum | PharmacyScalarFieldEnum[]
  }

  /**
   * User.mriTests
   */
  export type User$mriTestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MriTest
     */
    select?: MriTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MriTest
     */
    omit?: MriTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MriTestInclude<ExtArgs> | null
    where?: MriTestWhereInput
    orderBy?: MriTestOrderByWithRelationInput | MriTestOrderByWithRelationInput[]
    cursor?: MriTestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MriTestScalarFieldEnum | MriTestScalarFieldEnum[]
  }

  /**
   * User.urineTests
   */
  export type User$urineTestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UrineTest
     */
    select?: UrineTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UrineTest
     */
    omit?: UrineTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrineTestInclude<ExtArgs> | null
    where?: UrineTestWhereInput
    orderBy?: UrineTestOrderByWithRelationInput | UrineTestOrderByWithRelationInput[]
    cursor?: UrineTestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UrineTestScalarFieldEnum | UrineTestScalarFieldEnum[]
  }

  /**
   * User.bloodTests
   */
  export type User$bloodTestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodTest
     */
    select?: BloodTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloodTest
     */
    omit?: BloodTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloodTestInclude<ExtArgs> | null
    where?: BloodTestWhereInput
    orderBy?: BloodTestOrderByWithRelationInput | BloodTestOrderByWithRelationInput[]
    cursor?: BloodTestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BloodTestScalarFieldEnum | BloodTestScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Doctor
   */

  export type AggregateDoctor = {
    _count: DoctorCountAggregateOutputType | null
    _avg: DoctorAvgAggregateOutputType | null
    _sum: DoctorSumAggregateOutputType | null
    _min: DoctorMinAggregateOutputType | null
    _max: DoctorMaxAggregateOutputType | null
  }

  export type DoctorAvgAggregateOutputType = {
    id: number | null
  }

  export type DoctorSumAggregateOutputType = {
    id: number | null
  }

  export type DoctorMinAggregateOutputType = {
    id: number | null
    about: string | null
    name: string | null
    specialist: string | null
    education: string | null
    experience: string | null
  }

  export type DoctorMaxAggregateOutputType = {
    id: number | null
    about: string | null
    name: string | null
    specialist: string | null
    education: string | null
    experience: string | null
  }

  export type DoctorCountAggregateOutputType = {
    id: number
    about: number
    name: number
    specialist: number
    education: number
    experience: number
    _all: number
  }


  export type DoctorAvgAggregateInputType = {
    id?: true
  }

  export type DoctorSumAggregateInputType = {
    id?: true
  }

  export type DoctorMinAggregateInputType = {
    id?: true
    about?: true
    name?: true
    specialist?: true
    education?: true
    experience?: true
  }

  export type DoctorMaxAggregateInputType = {
    id?: true
    about?: true
    name?: true
    specialist?: true
    education?: true
    experience?: true
  }

  export type DoctorCountAggregateInputType = {
    id?: true
    about?: true
    name?: true
    specialist?: true
    education?: true
    experience?: true
    _all?: true
  }

  export type DoctorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Doctor to aggregate.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Doctors
    **/
    _count?: true | DoctorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DoctorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DoctorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoctorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoctorMaxAggregateInputType
  }

  export type GetDoctorAggregateType<T extends DoctorAggregateArgs> = {
        [P in keyof T & keyof AggregateDoctor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoctor[P]>
      : GetScalarType<T[P], AggregateDoctor[P]>
  }




  export type DoctorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorWhereInput
    orderBy?: DoctorOrderByWithAggregationInput | DoctorOrderByWithAggregationInput[]
    by: DoctorScalarFieldEnum[] | DoctorScalarFieldEnum
    having?: DoctorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoctorCountAggregateInputType | true
    _avg?: DoctorAvgAggregateInputType
    _sum?: DoctorSumAggregateInputType
    _min?: DoctorMinAggregateInputType
    _max?: DoctorMaxAggregateInputType
  }

  export type DoctorGroupByOutputType = {
    id: number
    about: string
    name: string
    specialist: string
    education: string
    experience: string
    _count: DoctorCountAggregateOutputType | null
    _avg: DoctorAvgAggregateOutputType | null
    _sum: DoctorSumAggregateOutputType | null
    _min: DoctorMinAggregateOutputType | null
    _max: DoctorMaxAggregateOutputType | null
  }

  type GetDoctorGroupByPayload<T extends DoctorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DoctorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoctorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoctorGroupByOutputType[P]>
            : GetScalarType<T[P], DoctorGroupByOutputType[P]>
        }
      >
    >


  export type DoctorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    about?: boolean
    name?: boolean
    specialist?: boolean
    education?: boolean
    experience?: boolean
    appointments?: boolean | Doctor$appointmentsArgs<ExtArgs>
    _count?: boolean | DoctorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctor"]>

  export type DoctorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    about?: boolean
    name?: boolean
    specialist?: boolean
    education?: boolean
    experience?: boolean
  }, ExtArgs["result"]["doctor"]>

  export type DoctorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    about?: boolean
    name?: boolean
    specialist?: boolean
    education?: boolean
    experience?: boolean
  }, ExtArgs["result"]["doctor"]>

  export type DoctorSelectScalar = {
    id?: boolean
    about?: boolean
    name?: boolean
    specialist?: boolean
    education?: boolean
    experience?: boolean
  }

  export type DoctorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "about" | "name" | "specialist" | "education" | "experience", ExtArgs["result"]["doctor"]>
  export type DoctorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | Doctor$appointmentsArgs<ExtArgs>
    _count?: boolean | DoctorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DoctorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DoctorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DoctorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Doctor"
    objects: {
      appointments: Prisma.$AppointmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      about: string
      name: string
      specialist: string
      education: string
      experience: string
    }, ExtArgs["result"]["doctor"]>
    composites: {}
  }

  type DoctorGetPayload<S extends boolean | null | undefined | DoctorDefaultArgs> = $Result.GetResult<Prisma.$DoctorPayload, S>

  type DoctorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DoctorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DoctorCountAggregateInputType | true
    }

  export interface DoctorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Doctor'], meta: { name: 'Doctor' } }
    /**
     * Find zero or one Doctor that matches the filter.
     * @param {DoctorFindUniqueArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DoctorFindUniqueArgs>(args: SelectSubset<T, DoctorFindUniqueArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Doctor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DoctorFindUniqueOrThrowArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DoctorFindUniqueOrThrowArgs>(args: SelectSubset<T, DoctorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Doctor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindFirstArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DoctorFindFirstArgs>(args?: SelectSubset<T, DoctorFindFirstArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Doctor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindFirstOrThrowArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DoctorFindFirstOrThrowArgs>(args?: SelectSubset<T, DoctorFindFirstOrThrowArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Doctors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Doctors
     * const doctors = await prisma.doctor.findMany()
     * 
     * // Get first 10 Doctors
     * const doctors = await prisma.doctor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const doctorWithIdOnly = await prisma.doctor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DoctorFindManyArgs>(args?: SelectSubset<T, DoctorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Doctor.
     * @param {DoctorCreateArgs} args - Arguments to create a Doctor.
     * @example
     * // Create one Doctor
     * const Doctor = await prisma.doctor.create({
     *   data: {
     *     // ... data to create a Doctor
     *   }
     * })
     * 
     */
    create<T extends DoctorCreateArgs>(args: SelectSubset<T, DoctorCreateArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Doctors.
     * @param {DoctorCreateManyArgs} args - Arguments to create many Doctors.
     * @example
     * // Create many Doctors
     * const doctor = await prisma.doctor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DoctorCreateManyArgs>(args?: SelectSubset<T, DoctorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Doctors and returns the data saved in the database.
     * @param {DoctorCreateManyAndReturnArgs} args - Arguments to create many Doctors.
     * @example
     * // Create many Doctors
     * const doctor = await prisma.doctor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Doctors and only return the `id`
     * const doctorWithIdOnly = await prisma.doctor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DoctorCreateManyAndReturnArgs>(args?: SelectSubset<T, DoctorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Doctor.
     * @param {DoctorDeleteArgs} args - Arguments to delete one Doctor.
     * @example
     * // Delete one Doctor
     * const Doctor = await prisma.doctor.delete({
     *   where: {
     *     // ... filter to delete one Doctor
     *   }
     * })
     * 
     */
    delete<T extends DoctorDeleteArgs>(args: SelectSubset<T, DoctorDeleteArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Doctor.
     * @param {DoctorUpdateArgs} args - Arguments to update one Doctor.
     * @example
     * // Update one Doctor
     * const doctor = await prisma.doctor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DoctorUpdateArgs>(args: SelectSubset<T, DoctorUpdateArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Doctors.
     * @param {DoctorDeleteManyArgs} args - Arguments to filter Doctors to delete.
     * @example
     * // Delete a few Doctors
     * const { count } = await prisma.doctor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DoctorDeleteManyArgs>(args?: SelectSubset<T, DoctorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Doctors
     * const doctor = await prisma.doctor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DoctorUpdateManyArgs>(args: SelectSubset<T, DoctorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doctors and returns the data updated in the database.
     * @param {DoctorUpdateManyAndReturnArgs} args - Arguments to update many Doctors.
     * @example
     * // Update many Doctors
     * const doctor = await prisma.doctor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Doctors and only return the `id`
     * const doctorWithIdOnly = await prisma.doctor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DoctorUpdateManyAndReturnArgs>(args: SelectSubset<T, DoctorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Doctor.
     * @param {DoctorUpsertArgs} args - Arguments to update or create a Doctor.
     * @example
     * // Update or create a Doctor
     * const doctor = await prisma.doctor.upsert({
     *   create: {
     *     // ... data to create a Doctor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Doctor we want to update
     *   }
     * })
     */
    upsert<T extends DoctorUpsertArgs>(args: SelectSubset<T, DoctorUpsertArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorCountArgs} args - Arguments to filter Doctors to count.
     * @example
     * // Count the number of Doctors
     * const count = await prisma.doctor.count({
     *   where: {
     *     // ... the filter for the Doctors we want to count
     *   }
     * })
    **/
    count<T extends DoctorCountArgs>(
      args?: Subset<T, DoctorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoctorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Doctor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DoctorAggregateArgs>(args: Subset<T, DoctorAggregateArgs>): Prisma.PrismaPromise<GetDoctorAggregateType<T>>

    /**
     * Group by Doctor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DoctorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DoctorGroupByArgs['orderBy'] }
        : { orderBy?: DoctorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DoctorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoctorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Doctor model
   */
  readonly fields: DoctorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Doctor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DoctorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    appointments<T extends Doctor$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, Doctor$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Doctor model
   */
  interface DoctorFieldRefs {
    readonly id: FieldRef<"Doctor", 'Int'>
    readonly about: FieldRef<"Doctor", 'String'>
    readonly name: FieldRef<"Doctor", 'String'>
    readonly specialist: FieldRef<"Doctor", 'String'>
    readonly education: FieldRef<"Doctor", 'String'>
    readonly experience: FieldRef<"Doctor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Doctor findUnique
   */
  export type DoctorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor findUniqueOrThrow
   */
  export type DoctorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor findFirst
   */
  export type DoctorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Doctors.
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doctors.
     */
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * Doctor findFirstOrThrow
   */
  export type DoctorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Doctors.
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doctors.
     */
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * Doctor findMany
   */
  export type DoctorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctors to fetch.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Doctors.
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * Doctor create
   */
  export type DoctorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * The data needed to create a Doctor.
     */
    data: XOR<DoctorCreateInput, DoctorUncheckedCreateInput>
  }

  /**
   * Doctor createMany
   */
  export type DoctorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Doctors.
     */
    data: DoctorCreateManyInput | DoctorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Doctor createManyAndReturn
   */
  export type DoctorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * The data used to create many Doctors.
     */
    data: DoctorCreateManyInput | DoctorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Doctor update
   */
  export type DoctorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * The data needed to update a Doctor.
     */
    data: XOR<DoctorUpdateInput, DoctorUncheckedUpdateInput>
    /**
     * Choose, which Doctor to update.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor updateMany
   */
  export type DoctorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Doctors.
     */
    data: XOR<DoctorUpdateManyMutationInput, DoctorUncheckedUpdateManyInput>
    /**
     * Filter which Doctors to update
     */
    where?: DoctorWhereInput
    /**
     * Limit how many Doctors to update.
     */
    limit?: number
  }

  /**
   * Doctor updateManyAndReturn
   */
  export type DoctorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * The data used to update Doctors.
     */
    data: XOR<DoctorUpdateManyMutationInput, DoctorUncheckedUpdateManyInput>
    /**
     * Filter which Doctors to update
     */
    where?: DoctorWhereInput
    /**
     * Limit how many Doctors to update.
     */
    limit?: number
  }

  /**
   * Doctor upsert
   */
  export type DoctorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * The filter to search for the Doctor to update in case it exists.
     */
    where: DoctorWhereUniqueInput
    /**
     * In case the Doctor found by the `where` argument doesn't exist, create a new Doctor with this data.
     */
    create: XOR<DoctorCreateInput, DoctorUncheckedCreateInput>
    /**
     * In case the Doctor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DoctorUpdateInput, DoctorUncheckedUpdateInput>
  }

  /**
   * Doctor delete
   */
  export type DoctorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter which Doctor to delete.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor deleteMany
   */
  export type DoctorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Doctors to delete
     */
    where?: DoctorWhereInput
    /**
     * Limit how many Doctors to delete.
     */
    limit?: number
  }

  /**
   * Doctor.appointments
   */
  export type Doctor$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Doctor without action
   */
  export type DoctorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
  }


  /**
   * Model Appointment
   */

  export type AggregateAppointment = {
    _count: AppointmentCountAggregateOutputType | null
    _avg: AppointmentAvgAggregateOutputType | null
    _sum: AppointmentSumAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  export type AppointmentAvgAggregateOutputType = {
    id: number | null
    idUser: number | null
    idDokter: number | null
  }

  export type AppointmentSumAggregateOutputType = {
    id: number | null
    idUser: number | null
    idDokter: number | null
  }

  export type AppointmentMinAggregateOutputType = {
    id: number | null
    date: Date | null
    purpose: string | null
    information: string | null
    location: string | null
    status: $Enums.AppointmentStatus | null
    idUser: number | null
    idDokter: number | null
  }

  export type AppointmentMaxAggregateOutputType = {
    id: number | null
    date: Date | null
    purpose: string | null
    information: string | null
    location: string | null
    status: $Enums.AppointmentStatus | null
    idUser: number | null
    idDokter: number | null
  }

  export type AppointmentCountAggregateOutputType = {
    id: number
    date: number
    purpose: number
    information: number
    location: number
    status: number
    idUser: number
    idDokter: number
    _all: number
  }


  export type AppointmentAvgAggregateInputType = {
    id?: true
    idUser?: true
    idDokter?: true
  }

  export type AppointmentSumAggregateInputType = {
    id?: true
    idUser?: true
    idDokter?: true
  }

  export type AppointmentMinAggregateInputType = {
    id?: true
    date?: true
    purpose?: true
    information?: true
    location?: true
    status?: true
    idUser?: true
    idDokter?: true
  }

  export type AppointmentMaxAggregateInputType = {
    id?: true
    date?: true
    purpose?: true
    information?: true
    location?: true
    status?: true
    idUser?: true
    idDokter?: true
  }

  export type AppointmentCountAggregateInputType = {
    id?: true
    date?: true
    purpose?: true
    information?: true
    location?: true
    status?: true
    idUser?: true
    idDokter?: true
    _all?: true
  }

  export type AppointmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointment to aggregate.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Appointments
    **/
    _count?: true | AppointmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppointmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppointmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppointmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppointmentMaxAggregateInputType
  }

  export type GetAppointmentAggregateType<T extends AppointmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAppointment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointment[P]>
      : GetScalarType<T[P], AggregateAppointment[P]>
  }




  export type AppointmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithAggregationInput | AppointmentOrderByWithAggregationInput[]
    by: AppointmentScalarFieldEnum[] | AppointmentScalarFieldEnum
    having?: AppointmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppointmentCountAggregateInputType | true
    _avg?: AppointmentAvgAggregateInputType
    _sum?: AppointmentSumAggregateInputType
    _min?: AppointmentMinAggregateInputType
    _max?: AppointmentMaxAggregateInputType
  }

  export type AppointmentGroupByOutputType = {
    id: number
    date: Date
    purpose: string
    information: string
    location: string
    status: $Enums.AppointmentStatus
    idUser: number
    idDokter: number
    _count: AppointmentCountAggregateOutputType | null
    _avg: AppointmentAvgAggregateOutputType | null
    _sum: AppointmentSumAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  type GetAppointmentGroupByPayload<T extends AppointmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppointmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppointmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
            : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
        }
      >
    >


  export type AppointmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    purpose?: boolean
    information?: boolean
    location?: boolean
    status?: boolean
    idUser?: boolean
    idDokter?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    purpose?: boolean
    information?: boolean
    location?: boolean
    status?: boolean
    idUser?: boolean
    idDokter?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    purpose?: boolean
    information?: boolean
    location?: boolean
    status?: boolean
    idUser?: boolean
    idDokter?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectScalar = {
    id?: boolean
    date?: boolean
    purpose?: boolean
    information?: boolean
    location?: boolean
    status?: boolean
    idUser?: boolean
    idDokter?: boolean
  }

  export type AppointmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "purpose" | "information" | "location" | "status" | "idUser" | "idDokter", ExtArgs["result"]["appointment"]>
  export type AppointmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }
  export type AppointmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }
  export type AppointmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }

  export type $AppointmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Appointment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      doctor: Prisma.$DoctorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: Date
      purpose: string
      information: string
      location: string
      status: $Enums.AppointmentStatus
      idUser: number
      idDokter: number
    }, ExtArgs["result"]["appointment"]>
    composites: {}
  }

  type AppointmentGetPayload<S extends boolean | null | undefined | AppointmentDefaultArgs> = $Result.GetResult<Prisma.$AppointmentPayload, S>

  type AppointmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppointmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppointmentCountAggregateInputType | true
    }

  export interface AppointmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Appointment'], meta: { name: 'Appointment' } }
    /**
     * Find zero or one Appointment that matches the filter.
     * @param {AppointmentFindUniqueArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppointmentFindUniqueArgs>(args: SelectSubset<T, AppointmentFindUniqueArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Appointment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppointmentFindUniqueOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppointmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AppointmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppointmentFindFirstArgs>(args?: SelectSubset<T, AppointmentFindFirstArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppointmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AppointmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appointments
     * const appointments = await prisma.appointment.findMany()
     * 
     * // Get first 10 Appointments
     * const appointments = await prisma.appointment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appointmentWithIdOnly = await prisma.appointment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppointmentFindManyArgs>(args?: SelectSubset<T, AppointmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Appointment.
     * @param {AppointmentCreateArgs} args - Arguments to create a Appointment.
     * @example
     * // Create one Appointment
     * const Appointment = await prisma.appointment.create({
     *   data: {
     *     // ... data to create a Appointment
     *   }
     * })
     * 
     */
    create<T extends AppointmentCreateArgs>(args: SelectSubset<T, AppointmentCreateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Appointments.
     * @param {AppointmentCreateManyArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppointmentCreateManyArgs>(args?: SelectSubset<T, AppointmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Appointments and returns the data saved in the database.
     * @param {AppointmentCreateManyAndReturnArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppointmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AppointmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Appointment.
     * @param {AppointmentDeleteArgs} args - Arguments to delete one Appointment.
     * @example
     * // Delete one Appointment
     * const Appointment = await prisma.appointment.delete({
     *   where: {
     *     // ... filter to delete one Appointment
     *   }
     * })
     * 
     */
    delete<T extends AppointmentDeleteArgs>(args: SelectSubset<T, AppointmentDeleteArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Appointment.
     * @param {AppointmentUpdateArgs} args - Arguments to update one Appointment.
     * @example
     * // Update one Appointment
     * const appointment = await prisma.appointment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppointmentUpdateArgs>(args: SelectSubset<T, AppointmentUpdateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Appointments.
     * @param {AppointmentDeleteManyArgs} args - Arguments to filter Appointments to delete.
     * @example
     * // Delete a few Appointments
     * const { count } = await prisma.appointment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppointmentDeleteManyArgs>(args?: SelectSubset<T, AppointmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppointmentUpdateManyArgs>(args: SelectSubset<T, AppointmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments and returns the data updated in the database.
     * @param {AppointmentUpdateManyAndReturnArgs} args - Arguments to update many Appointments.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AppointmentUpdateManyAndReturnArgs>(args: SelectSubset<T, AppointmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Appointment.
     * @param {AppointmentUpsertArgs} args - Arguments to update or create a Appointment.
     * @example
     * // Update or create a Appointment
     * const appointment = await prisma.appointment.upsert({
     *   create: {
     *     // ... data to create a Appointment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appointment we want to update
     *   }
     * })
     */
    upsert<T extends AppointmentUpsertArgs>(args: SelectSubset<T, AppointmentUpsertArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentCountArgs} args - Arguments to filter Appointments to count.
     * @example
     * // Count the number of Appointments
     * const count = await prisma.appointment.count({
     *   where: {
     *     // ... the filter for the Appointments we want to count
     *   }
     * })
    **/
    count<T extends AppointmentCountArgs>(
      args?: Subset<T, AppointmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AppointmentAggregateArgs>(args: Subset<T, AppointmentAggregateArgs>): Prisma.PrismaPromise<GetAppointmentAggregateType<T>>

    /**
     * Group by Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AppointmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppointmentGroupByArgs['orderBy'] }
        : { orderBy?: AppointmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AppointmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Appointment model
   */
  readonly fields: AppointmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Appointment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppointmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    doctor<T extends DoctorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DoctorDefaultArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Appointment model
   */
  interface AppointmentFieldRefs {
    readonly id: FieldRef<"Appointment", 'Int'>
    readonly date: FieldRef<"Appointment", 'DateTime'>
    readonly purpose: FieldRef<"Appointment", 'String'>
    readonly information: FieldRef<"Appointment", 'String'>
    readonly location: FieldRef<"Appointment", 'String'>
    readonly status: FieldRef<"Appointment", 'AppointmentStatus'>
    readonly idUser: FieldRef<"Appointment", 'Int'>
    readonly idDokter: FieldRef<"Appointment", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Appointment findUnique
   */
  export type AppointmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findUniqueOrThrow
   */
  export type AppointmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findFirst
   */
  export type AppointmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findFirstOrThrow
   */
  export type AppointmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findMany
   */
  export type AppointmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointments to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment create
   */
  export type AppointmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Appointment.
     */
    data: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
  }

  /**
   * Appointment createMany
   */
  export type AppointmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Appointment createManyAndReturn
   */
  export type AppointmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointment update
   */
  export type AppointmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Appointment.
     */
    data: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
    /**
     * Choose, which Appointment to update.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment updateMany
   */
  export type AppointmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
  }

  /**
   * Appointment updateManyAndReturn
   */
  export type AppointmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointment upsert
   */
  export type AppointmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Appointment to update in case it exists.
     */
    where: AppointmentWhereUniqueInput
    /**
     * In case the Appointment found by the `where` argument doesn't exist, create a new Appointment with this data.
     */
    create: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
    /**
     * In case the Appointment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
  }

  /**
   * Appointment delete
   */
  export type AppointmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter which Appointment to delete.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment deleteMany
   */
  export type AppointmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointments to delete
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to delete.
     */
    limit?: number
  }

  /**
   * Appointment without action
   */
  export type AppointmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
  }


  /**
   * Model HistoricalData
   */

  export type AggregateHistoricalData = {
    _count: HistoricalDataCountAggregateOutputType | null
    _avg: HistoricalDataAvgAggregateOutputType | null
    _sum: HistoricalDataSumAggregateOutputType | null
    _min: HistoricalDataMinAggregateOutputType | null
    _max: HistoricalDataMaxAggregateOutputType | null
  }

  export type HistoricalDataAvgAggregateOutputType = {
    id: number | null
    idUser: number | null
  }

  export type HistoricalDataSumAggregateOutputType = {
    id: number | null
    idUser: number | null
  }

  export type HistoricalDataMinAggregateOutputType = {
    id: number | null
    parameter: string | null
    value: string | null
    tgl: Date | null
    idUser: number | null
  }

  export type HistoricalDataMaxAggregateOutputType = {
    id: number | null
    parameter: string | null
    value: string | null
    tgl: Date | null
    idUser: number | null
  }

  export type HistoricalDataCountAggregateOutputType = {
    id: number
    parameter: number
    value: number
    tgl: number
    idUser: number
    _all: number
  }


  export type HistoricalDataAvgAggregateInputType = {
    id?: true
    idUser?: true
  }

  export type HistoricalDataSumAggregateInputType = {
    id?: true
    idUser?: true
  }

  export type HistoricalDataMinAggregateInputType = {
    id?: true
    parameter?: true
    value?: true
    tgl?: true
    idUser?: true
  }

  export type HistoricalDataMaxAggregateInputType = {
    id?: true
    parameter?: true
    value?: true
    tgl?: true
    idUser?: true
  }

  export type HistoricalDataCountAggregateInputType = {
    id?: true
    parameter?: true
    value?: true
    tgl?: true
    idUser?: true
    _all?: true
  }

  export type HistoricalDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HistoricalData to aggregate.
     */
    where?: HistoricalDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoricalData to fetch.
     */
    orderBy?: HistoricalDataOrderByWithRelationInput | HistoricalDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HistoricalDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoricalData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoricalData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HistoricalData
    **/
    _count?: true | HistoricalDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HistoricalDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HistoricalDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HistoricalDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HistoricalDataMaxAggregateInputType
  }

  export type GetHistoricalDataAggregateType<T extends HistoricalDataAggregateArgs> = {
        [P in keyof T & keyof AggregateHistoricalData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistoricalData[P]>
      : GetScalarType<T[P], AggregateHistoricalData[P]>
  }




  export type HistoricalDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoricalDataWhereInput
    orderBy?: HistoricalDataOrderByWithAggregationInput | HistoricalDataOrderByWithAggregationInput[]
    by: HistoricalDataScalarFieldEnum[] | HistoricalDataScalarFieldEnum
    having?: HistoricalDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HistoricalDataCountAggregateInputType | true
    _avg?: HistoricalDataAvgAggregateInputType
    _sum?: HistoricalDataSumAggregateInputType
    _min?: HistoricalDataMinAggregateInputType
    _max?: HistoricalDataMaxAggregateInputType
  }

  export type HistoricalDataGroupByOutputType = {
    id: number
    parameter: string
    value: string
    tgl: Date
    idUser: number
    _count: HistoricalDataCountAggregateOutputType | null
    _avg: HistoricalDataAvgAggregateOutputType | null
    _sum: HistoricalDataSumAggregateOutputType | null
    _min: HistoricalDataMinAggregateOutputType | null
    _max: HistoricalDataMaxAggregateOutputType | null
  }

  type GetHistoricalDataGroupByPayload<T extends HistoricalDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HistoricalDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HistoricalDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HistoricalDataGroupByOutputType[P]>
            : GetScalarType<T[P], HistoricalDataGroupByOutputType[P]>
        }
      >
    >


  export type HistoricalDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    parameter?: boolean
    value?: boolean
    tgl?: boolean
    idUser?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historicalData"]>

  export type HistoricalDataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    parameter?: boolean
    value?: boolean
    tgl?: boolean
    idUser?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historicalData"]>

  export type HistoricalDataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    parameter?: boolean
    value?: boolean
    tgl?: boolean
    idUser?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historicalData"]>

  export type HistoricalDataSelectScalar = {
    id?: boolean
    parameter?: boolean
    value?: boolean
    tgl?: boolean
    idUser?: boolean
  }

  export type HistoricalDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "parameter" | "value" | "tgl" | "idUser", ExtArgs["result"]["historicalData"]>
  export type HistoricalDataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type HistoricalDataIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type HistoricalDataIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $HistoricalDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HistoricalData"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      parameter: string
      value: string
      tgl: Date
      idUser: number
    }, ExtArgs["result"]["historicalData"]>
    composites: {}
  }

  type HistoricalDataGetPayload<S extends boolean | null | undefined | HistoricalDataDefaultArgs> = $Result.GetResult<Prisma.$HistoricalDataPayload, S>

  type HistoricalDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HistoricalDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HistoricalDataCountAggregateInputType | true
    }

  export interface HistoricalDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HistoricalData'], meta: { name: 'HistoricalData' } }
    /**
     * Find zero or one HistoricalData that matches the filter.
     * @param {HistoricalDataFindUniqueArgs} args - Arguments to find a HistoricalData
     * @example
     * // Get one HistoricalData
     * const historicalData = await prisma.historicalData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HistoricalDataFindUniqueArgs>(args: SelectSubset<T, HistoricalDataFindUniqueArgs<ExtArgs>>): Prisma__HistoricalDataClient<$Result.GetResult<Prisma.$HistoricalDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HistoricalData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HistoricalDataFindUniqueOrThrowArgs} args - Arguments to find a HistoricalData
     * @example
     * // Get one HistoricalData
     * const historicalData = await prisma.historicalData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HistoricalDataFindUniqueOrThrowArgs>(args: SelectSubset<T, HistoricalDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HistoricalDataClient<$Result.GetResult<Prisma.$HistoricalDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HistoricalData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricalDataFindFirstArgs} args - Arguments to find a HistoricalData
     * @example
     * // Get one HistoricalData
     * const historicalData = await prisma.historicalData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HistoricalDataFindFirstArgs>(args?: SelectSubset<T, HistoricalDataFindFirstArgs<ExtArgs>>): Prisma__HistoricalDataClient<$Result.GetResult<Prisma.$HistoricalDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HistoricalData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricalDataFindFirstOrThrowArgs} args - Arguments to find a HistoricalData
     * @example
     * // Get one HistoricalData
     * const historicalData = await prisma.historicalData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HistoricalDataFindFirstOrThrowArgs>(args?: SelectSubset<T, HistoricalDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__HistoricalDataClient<$Result.GetResult<Prisma.$HistoricalDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HistoricalData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricalDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HistoricalData
     * const historicalData = await prisma.historicalData.findMany()
     * 
     * // Get first 10 HistoricalData
     * const historicalData = await prisma.historicalData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const historicalDataWithIdOnly = await prisma.historicalData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HistoricalDataFindManyArgs>(args?: SelectSubset<T, HistoricalDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoricalDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HistoricalData.
     * @param {HistoricalDataCreateArgs} args - Arguments to create a HistoricalData.
     * @example
     * // Create one HistoricalData
     * const HistoricalData = await prisma.historicalData.create({
     *   data: {
     *     // ... data to create a HistoricalData
     *   }
     * })
     * 
     */
    create<T extends HistoricalDataCreateArgs>(args: SelectSubset<T, HistoricalDataCreateArgs<ExtArgs>>): Prisma__HistoricalDataClient<$Result.GetResult<Prisma.$HistoricalDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HistoricalData.
     * @param {HistoricalDataCreateManyArgs} args - Arguments to create many HistoricalData.
     * @example
     * // Create many HistoricalData
     * const historicalData = await prisma.historicalData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HistoricalDataCreateManyArgs>(args?: SelectSubset<T, HistoricalDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HistoricalData and returns the data saved in the database.
     * @param {HistoricalDataCreateManyAndReturnArgs} args - Arguments to create many HistoricalData.
     * @example
     * // Create many HistoricalData
     * const historicalData = await prisma.historicalData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HistoricalData and only return the `id`
     * const historicalDataWithIdOnly = await prisma.historicalData.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HistoricalDataCreateManyAndReturnArgs>(args?: SelectSubset<T, HistoricalDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoricalDataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HistoricalData.
     * @param {HistoricalDataDeleteArgs} args - Arguments to delete one HistoricalData.
     * @example
     * // Delete one HistoricalData
     * const HistoricalData = await prisma.historicalData.delete({
     *   where: {
     *     // ... filter to delete one HistoricalData
     *   }
     * })
     * 
     */
    delete<T extends HistoricalDataDeleteArgs>(args: SelectSubset<T, HistoricalDataDeleteArgs<ExtArgs>>): Prisma__HistoricalDataClient<$Result.GetResult<Prisma.$HistoricalDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HistoricalData.
     * @param {HistoricalDataUpdateArgs} args - Arguments to update one HistoricalData.
     * @example
     * // Update one HistoricalData
     * const historicalData = await prisma.historicalData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HistoricalDataUpdateArgs>(args: SelectSubset<T, HistoricalDataUpdateArgs<ExtArgs>>): Prisma__HistoricalDataClient<$Result.GetResult<Prisma.$HistoricalDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HistoricalData.
     * @param {HistoricalDataDeleteManyArgs} args - Arguments to filter HistoricalData to delete.
     * @example
     * // Delete a few HistoricalData
     * const { count } = await prisma.historicalData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HistoricalDataDeleteManyArgs>(args?: SelectSubset<T, HistoricalDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HistoricalData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricalDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HistoricalData
     * const historicalData = await prisma.historicalData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HistoricalDataUpdateManyArgs>(args: SelectSubset<T, HistoricalDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HistoricalData and returns the data updated in the database.
     * @param {HistoricalDataUpdateManyAndReturnArgs} args - Arguments to update many HistoricalData.
     * @example
     * // Update many HistoricalData
     * const historicalData = await prisma.historicalData.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HistoricalData and only return the `id`
     * const historicalDataWithIdOnly = await prisma.historicalData.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HistoricalDataUpdateManyAndReturnArgs>(args: SelectSubset<T, HistoricalDataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoricalDataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HistoricalData.
     * @param {HistoricalDataUpsertArgs} args - Arguments to update or create a HistoricalData.
     * @example
     * // Update or create a HistoricalData
     * const historicalData = await prisma.historicalData.upsert({
     *   create: {
     *     // ... data to create a HistoricalData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HistoricalData we want to update
     *   }
     * })
     */
    upsert<T extends HistoricalDataUpsertArgs>(args: SelectSubset<T, HistoricalDataUpsertArgs<ExtArgs>>): Prisma__HistoricalDataClient<$Result.GetResult<Prisma.$HistoricalDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HistoricalData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricalDataCountArgs} args - Arguments to filter HistoricalData to count.
     * @example
     * // Count the number of HistoricalData
     * const count = await prisma.historicalData.count({
     *   where: {
     *     // ... the filter for the HistoricalData we want to count
     *   }
     * })
    **/
    count<T extends HistoricalDataCountArgs>(
      args?: Subset<T, HistoricalDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HistoricalDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HistoricalData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricalDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HistoricalDataAggregateArgs>(args: Subset<T, HistoricalDataAggregateArgs>): Prisma.PrismaPromise<GetHistoricalDataAggregateType<T>>

    /**
     * Group by HistoricalData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricalDataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HistoricalDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HistoricalDataGroupByArgs['orderBy'] }
        : { orderBy?: HistoricalDataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HistoricalDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistoricalDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HistoricalData model
   */
  readonly fields: HistoricalDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HistoricalData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HistoricalDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the HistoricalData model
   */
  interface HistoricalDataFieldRefs {
    readonly id: FieldRef<"HistoricalData", 'Int'>
    readonly parameter: FieldRef<"HistoricalData", 'String'>
    readonly value: FieldRef<"HistoricalData", 'String'>
    readonly tgl: FieldRef<"HistoricalData", 'DateTime'>
    readonly idUser: FieldRef<"HistoricalData", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * HistoricalData findUnique
   */
  export type HistoricalDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricalData
     */
    select?: HistoricalDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricalData
     */
    omit?: HistoricalDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricalDataInclude<ExtArgs> | null
    /**
     * Filter, which HistoricalData to fetch.
     */
    where: HistoricalDataWhereUniqueInput
  }

  /**
   * HistoricalData findUniqueOrThrow
   */
  export type HistoricalDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricalData
     */
    select?: HistoricalDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricalData
     */
    omit?: HistoricalDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricalDataInclude<ExtArgs> | null
    /**
     * Filter, which HistoricalData to fetch.
     */
    where: HistoricalDataWhereUniqueInput
  }

  /**
   * HistoricalData findFirst
   */
  export type HistoricalDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricalData
     */
    select?: HistoricalDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricalData
     */
    omit?: HistoricalDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricalDataInclude<ExtArgs> | null
    /**
     * Filter, which HistoricalData to fetch.
     */
    where?: HistoricalDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoricalData to fetch.
     */
    orderBy?: HistoricalDataOrderByWithRelationInput | HistoricalDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HistoricalData.
     */
    cursor?: HistoricalDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoricalData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoricalData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HistoricalData.
     */
    distinct?: HistoricalDataScalarFieldEnum | HistoricalDataScalarFieldEnum[]
  }

  /**
   * HistoricalData findFirstOrThrow
   */
  export type HistoricalDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricalData
     */
    select?: HistoricalDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricalData
     */
    omit?: HistoricalDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricalDataInclude<ExtArgs> | null
    /**
     * Filter, which HistoricalData to fetch.
     */
    where?: HistoricalDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoricalData to fetch.
     */
    orderBy?: HistoricalDataOrderByWithRelationInput | HistoricalDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HistoricalData.
     */
    cursor?: HistoricalDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoricalData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoricalData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HistoricalData.
     */
    distinct?: HistoricalDataScalarFieldEnum | HistoricalDataScalarFieldEnum[]
  }

  /**
   * HistoricalData findMany
   */
  export type HistoricalDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricalData
     */
    select?: HistoricalDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricalData
     */
    omit?: HistoricalDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricalDataInclude<ExtArgs> | null
    /**
     * Filter, which HistoricalData to fetch.
     */
    where?: HistoricalDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoricalData to fetch.
     */
    orderBy?: HistoricalDataOrderByWithRelationInput | HistoricalDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HistoricalData.
     */
    cursor?: HistoricalDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoricalData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoricalData.
     */
    skip?: number
    distinct?: HistoricalDataScalarFieldEnum | HistoricalDataScalarFieldEnum[]
  }

  /**
   * HistoricalData create
   */
  export type HistoricalDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricalData
     */
    select?: HistoricalDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricalData
     */
    omit?: HistoricalDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricalDataInclude<ExtArgs> | null
    /**
     * The data needed to create a HistoricalData.
     */
    data: XOR<HistoricalDataCreateInput, HistoricalDataUncheckedCreateInput>
  }

  /**
   * HistoricalData createMany
   */
  export type HistoricalDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HistoricalData.
     */
    data: HistoricalDataCreateManyInput | HistoricalDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HistoricalData createManyAndReturn
   */
  export type HistoricalDataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricalData
     */
    select?: HistoricalDataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricalData
     */
    omit?: HistoricalDataOmit<ExtArgs> | null
    /**
     * The data used to create many HistoricalData.
     */
    data: HistoricalDataCreateManyInput | HistoricalDataCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricalDataIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HistoricalData update
   */
  export type HistoricalDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricalData
     */
    select?: HistoricalDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricalData
     */
    omit?: HistoricalDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricalDataInclude<ExtArgs> | null
    /**
     * The data needed to update a HistoricalData.
     */
    data: XOR<HistoricalDataUpdateInput, HistoricalDataUncheckedUpdateInput>
    /**
     * Choose, which HistoricalData to update.
     */
    where: HistoricalDataWhereUniqueInput
  }

  /**
   * HistoricalData updateMany
   */
  export type HistoricalDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HistoricalData.
     */
    data: XOR<HistoricalDataUpdateManyMutationInput, HistoricalDataUncheckedUpdateManyInput>
    /**
     * Filter which HistoricalData to update
     */
    where?: HistoricalDataWhereInput
    /**
     * Limit how many HistoricalData to update.
     */
    limit?: number
  }

  /**
   * HistoricalData updateManyAndReturn
   */
  export type HistoricalDataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricalData
     */
    select?: HistoricalDataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricalData
     */
    omit?: HistoricalDataOmit<ExtArgs> | null
    /**
     * The data used to update HistoricalData.
     */
    data: XOR<HistoricalDataUpdateManyMutationInput, HistoricalDataUncheckedUpdateManyInput>
    /**
     * Filter which HistoricalData to update
     */
    where?: HistoricalDataWhereInput
    /**
     * Limit how many HistoricalData to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricalDataIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HistoricalData upsert
   */
  export type HistoricalDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricalData
     */
    select?: HistoricalDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricalData
     */
    omit?: HistoricalDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricalDataInclude<ExtArgs> | null
    /**
     * The filter to search for the HistoricalData to update in case it exists.
     */
    where: HistoricalDataWhereUniqueInput
    /**
     * In case the HistoricalData found by the `where` argument doesn't exist, create a new HistoricalData with this data.
     */
    create: XOR<HistoricalDataCreateInput, HistoricalDataUncheckedCreateInput>
    /**
     * In case the HistoricalData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HistoricalDataUpdateInput, HistoricalDataUncheckedUpdateInput>
  }

  /**
   * HistoricalData delete
   */
  export type HistoricalDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricalData
     */
    select?: HistoricalDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricalData
     */
    omit?: HistoricalDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricalDataInclude<ExtArgs> | null
    /**
     * Filter which HistoricalData to delete.
     */
    where: HistoricalDataWhereUniqueInput
  }

  /**
   * HistoricalData deleteMany
   */
  export type HistoricalDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HistoricalData to delete
     */
    where?: HistoricalDataWhereInput
    /**
     * Limit how many HistoricalData to delete.
     */
    limit?: number
  }

  /**
   * HistoricalData without action
   */
  export type HistoricalDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricalData
     */
    select?: HistoricalDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricalData
     */
    omit?: HistoricalDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricalDataInclude<ExtArgs> | null
  }


  /**
   * Model Pharmacy
   */

  export type AggregatePharmacy = {
    _count: PharmacyCountAggregateOutputType | null
    _avg: PharmacyAvgAggregateOutputType | null
    _sum: PharmacySumAggregateOutputType | null
    _min: PharmacyMinAggregateOutputType | null
    _max: PharmacyMaxAggregateOutputType | null
  }

  export type PharmacyAvgAggregateOutputType = {
    id: number | null
    idUser: number | null
  }

  export type PharmacySumAggregateOutputType = {
    id: number | null
    idUser: number | null
  }

  export type PharmacyMinAggregateOutputType = {
    id: number | null
    namaObat: string | null
    keteranganPenggunaan: string | null
    dosis: string | null
    tanggalMulaiObat: Date | null
    tanggalSelesaiObat: Date | null
    idUser: number | null
  }

  export type PharmacyMaxAggregateOutputType = {
    id: number | null
    namaObat: string | null
    keteranganPenggunaan: string | null
    dosis: string | null
    tanggalMulaiObat: Date | null
    tanggalSelesaiObat: Date | null
    idUser: number | null
  }

  export type PharmacyCountAggregateOutputType = {
    id: number
    namaObat: number
    keteranganPenggunaan: number
    dosis: number
    tanggalMulaiObat: number
    tanggalSelesaiObat: number
    idUser: number
    _all: number
  }


  export type PharmacyAvgAggregateInputType = {
    id?: true
    idUser?: true
  }

  export type PharmacySumAggregateInputType = {
    id?: true
    idUser?: true
  }

  export type PharmacyMinAggregateInputType = {
    id?: true
    namaObat?: true
    keteranganPenggunaan?: true
    dosis?: true
    tanggalMulaiObat?: true
    tanggalSelesaiObat?: true
    idUser?: true
  }

  export type PharmacyMaxAggregateInputType = {
    id?: true
    namaObat?: true
    keteranganPenggunaan?: true
    dosis?: true
    tanggalMulaiObat?: true
    tanggalSelesaiObat?: true
    idUser?: true
  }

  export type PharmacyCountAggregateInputType = {
    id?: true
    namaObat?: true
    keteranganPenggunaan?: true
    dosis?: true
    tanggalMulaiObat?: true
    tanggalSelesaiObat?: true
    idUser?: true
    _all?: true
  }

  export type PharmacyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pharmacy to aggregate.
     */
    where?: PharmacyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pharmacies to fetch.
     */
    orderBy?: PharmacyOrderByWithRelationInput | PharmacyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PharmacyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pharmacies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pharmacies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pharmacies
    **/
    _count?: true | PharmacyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PharmacyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PharmacySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PharmacyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PharmacyMaxAggregateInputType
  }

  export type GetPharmacyAggregateType<T extends PharmacyAggregateArgs> = {
        [P in keyof T & keyof AggregatePharmacy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePharmacy[P]>
      : GetScalarType<T[P], AggregatePharmacy[P]>
  }




  export type PharmacyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PharmacyWhereInput
    orderBy?: PharmacyOrderByWithAggregationInput | PharmacyOrderByWithAggregationInput[]
    by: PharmacyScalarFieldEnum[] | PharmacyScalarFieldEnum
    having?: PharmacyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PharmacyCountAggregateInputType | true
    _avg?: PharmacyAvgAggregateInputType
    _sum?: PharmacySumAggregateInputType
    _min?: PharmacyMinAggregateInputType
    _max?: PharmacyMaxAggregateInputType
  }

  export type PharmacyGroupByOutputType = {
    id: number
    namaObat: string
    keteranganPenggunaan: string
    dosis: string
    tanggalMulaiObat: Date
    tanggalSelesaiObat: Date
    idUser: number
    _count: PharmacyCountAggregateOutputType | null
    _avg: PharmacyAvgAggregateOutputType | null
    _sum: PharmacySumAggregateOutputType | null
    _min: PharmacyMinAggregateOutputType | null
    _max: PharmacyMaxAggregateOutputType | null
  }

  type GetPharmacyGroupByPayload<T extends PharmacyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PharmacyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PharmacyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PharmacyGroupByOutputType[P]>
            : GetScalarType<T[P], PharmacyGroupByOutputType[P]>
        }
      >
    >


  export type PharmacySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    namaObat?: boolean
    keteranganPenggunaan?: boolean
    dosis?: boolean
    tanggalMulaiObat?: boolean
    tanggalSelesaiObat?: boolean
    idUser?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pharmacy"]>

  export type PharmacySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    namaObat?: boolean
    keteranganPenggunaan?: boolean
    dosis?: boolean
    tanggalMulaiObat?: boolean
    tanggalSelesaiObat?: boolean
    idUser?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pharmacy"]>

  export type PharmacySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    namaObat?: boolean
    keteranganPenggunaan?: boolean
    dosis?: boolean
    tanggalMulaiObat?: boolean
    tanggalSelesaiObat?: boolean
    idUser?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pharmacy"]>

  export type PharmacySelectScalar = {
    id?: boolean
    namaObat?: boolean
    keteranganPenggunaan?: boolean
    dosis?: boolean
    tanggalMulaiObat?: boolean
    tanggalSelesaiObat?: boolean
    idUser?: boolean
  }

  export type PharmacyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "namaObat" | "keteranganPenggunaan" | "dosis" | "tanggalMulaiObat" | "tanggalSelesaiObat" | "idUser", ExtArgs["result"]["pharmacy"]>
  export type PharmacyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PharmacyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PharmacyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PharmacyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pharmacy"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      namaObat: string
      keteranganPenggunaan: string
      dosis: string
      tanggalMulaiObat: Date
      tanggalSelesaiObat: Date
      idUser: number
    }, ExtArgs["result"]["pharmacy"]>
    composites: {}
  }

  type PharmacyGetPayload<S extends boolean | null | undefined | PharmacyDefaultArgs> = $Result.GetResult<Prisma.$PharmacyPayload, S>

  type PharmacyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PharmacyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PharmacyCountAggregateInputType | true
    }

  export interface PharmacyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pharmacy'], meta: { name: 'Pharmacy' } }
    /**
     * Find zero or one Pharmacy that matches the filter.
     * @param {PharmacyFindUniqueArgs} args - Arguments to find a Pharmacy
     * @example
     * // Get one Pharmacy
     * const pharmacy = await prisma.pharmacy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PharmacyFindUniqueArgs>(args: SelectSubset<T, PharmacyFindUniqueArgs<ExtArgs>>): Prisma__PharmacyClient<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pharmacy that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PharmacyFindUniqueOrThrowArgs} args - Arguments to find a Pharmacy
     * @example
     * // Get one Pharmacy
     * const pharmacy = await prisma.pharmacy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PharmacyFindUniqueOrThrowArgs>(args: SelectSubset<T, PharmacyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PharmacyClient<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pharmacy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyFindFirstArgs} args - Arguments to find a Pharmacy
     * @example
     * // Get one Pharmacy
     * const pharmacy = await prisma.pharmacy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PharmacyFindFirstArgs>(args?: SelectSubset<T, PharmacyFindFirstArgs<ExtArgs>>): Prisma__PharmacyClient<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pharmacy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyFindFirstOrThrowArgs} args - Arguments to find a Pharmacy
     * @example
     * // Get one Pharmacy
     * const pharmacy = await prisma.pharmacy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PharmacyFindFirstOrThrowArgs>(args?: SelectSubset<T, PharmacyFindFirstOrThrowArgs<ExtArgs>>): Prisma__PharmacyClient<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pharmacies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pharmacies
     * const pharmacies = await prisma.pharmacy.findMany()
     * 
     * // Get first 10 Pharmacies
     * const pharmacies = await prisma.pharmacy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pharmacyWithIdOnly = await prisma.pharmacy.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PharmacyFindManyArgs>(args?: SelectSubset<T, PharmacyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pharmacy.
     * @param {PharmacyCreateArgs} args - Arguments to create a Pharmacy.
     * @example
     * // Create one Pharmacy
     * const Pharmacy = await prisma.pharmacy.create({
     *   data: {
     *     // ... data to create a Pharmacy
     *   }
     * })
     * 
     */
    create<T extends PharmacyCreateArgs>(args: SelectSubset<T, PharmacyCreateArgs<ExtArgs>>): Prisma__PharmacyClient<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pharmacies.
     * @param {PharmacyCreateManyArgs} args - Arguments to create many Pharmacies.
     * @example
     * // Create many Pharmacies
     * const pharmacy = await prisma.pharmacy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PharmacyCreateManyArgs>(args?: SelectSubset<T, PharmacyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pharmacies and returns the data saved in the database.
     * @param {PharmacyCreateManyAndReturnArgs} args - Arguments to create many Pharmacies.
     * @example
     * // Create many Pharmacies
     * const pharmacy = await prisma.pharmacy.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pharmacies and only return the `id`
     * const pharmacyWithIdOnly = await prisma.pharmacy.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PharmacyCreateManyAndReturnArgs>(args?: SelectSubset<T, PharmacyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pharmacy.
     * @param {PharmacyDeleteArgs} args - Arguments to delete one Pharmacy.
     * @example
     * // Delete one Pharmacy
     * const Pharmacy = await prisma.pharmacy.delete({
     *   where: {
     *     // ... filter to delete one Pharmacy
     *   }
     * })
     * 
     */
    delete<T extends PharmacyDeleteArgs>(args: SelectSubset<T, PharmacyDeleteArgs<ExtArgs>>): Prisma__PharmacyClient<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pharmacy.
     * @param {PharmacyUpdateArgs} args - Arguments to update one Pharmacy.
     * @example
     * // Update one Pharmacy
     * const pharmacy = await prisma.pharmacy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PharmacyUpdateArgs>(args: SelectSubset<T, PharmacyUpdateArgs<ExtArgs>>): Prisma__PharmacyClient<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pharmacies.
     * @param {PharmacyDeleteManyArgs} args - Arguments to filter Pharmacies to delete.
     * @example
     * // Delete a few Pharmacies
     * const { count } = await prisma.pharmacy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PharmacyDeleteManyArgs>(args?: SelectSubset<T, PharmacyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pharmacies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pharmacies
     * const pharmacy = await prisma.pharmacy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PharmacyUpdateManyArgs>(args: SelectSubset<T, PharmacyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pharmacies and returns the data updated in the database.
     * @param {PharmacyUpdateManyAndReturnArgs} args - Arguments to update many Pharmacies.
     * @example
     * // Update many Pharmacies
     * const pharmacy = await prisma.pharmacy.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pharmacies and only return the `id`
     * const pharmacyWithIdOnly = await prisma.pharmacy.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PharmacyUpdateManyAndReturnArgs>(args: SelectSubset<T, PharmacyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pharmacy.
     * @param {PharmacyUpsertArgs} args - Arguments to update or create a Pharmacy.
     * @example
     * // Update or create a Pharmacy
     * const pharmacy = await prisma.pharmacy.upsert({
     *   create: {
     *     // ... data to create a Pharmacy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pharmacy we want to update
     *   }
     * })
     */
    upsert<T extends PharmacyUpsertArgs>(args: SelectSubset<T, PharmacyUpsertArgs<ExtArgs>>): Prisma__PharmacyClient<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pharmacies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyCountArgs} args - Arguments to filter Pharmacies to count.
     * @example
     * // Count the number of Pharmacies
     * const count = await prisma.pharmacy.count({
     *   where: {
     *     // ... the filter for the Pharmacies we want to count
     *   }
     * })
    **/
    count<T extends PharmacyCountArgs>(
      args?: Subset<T, PharmacyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PharmacyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pharmacy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PharmacyAggregateArgs>(args: Subset<T, PharmacyAggregateArgs>): Prisma.PrismaPromise<GetPharmacyAggregateType<T>>

    /**
     * Group by Pharmacy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PharmacyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PharmacyGroupByArgs['orderBy'] }
        : { orderBy?: PharmacyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PharmacyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPharmacyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pharmacy model
   */
  readonly fields: PharmacyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pharmacy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PharmacyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pharmacy model
   */
  interface PharmacyFieldRefs {
    readonly id: FieldRef<"Pharmacy", 'Int'>
    readonly namaObat: FieldRef<"Pharmacy", 'String'>
    readonly keteranganPenggunaan: FieldRef<"Pharmacy", 'String'>
    readonly dosis: FieldRef<"Pharmacy", 'String'>
    readonly tanggalMulaiObat: FieldRef<"Pharmacy", 'DateTime'>
    readonly tanggalSelesaiObat: FieldRef<"Pharmacy", 'DateTime'>
    readonly idUser: FieldRef<"Pharmacy", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Pharmacy findUnique
   */
  export type PharmacyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInclude<ExtArgs> | null
    /**
     * Filter, which Pharmacy to fetch.
     */
    where: PharmacyWhereUniqueInput
  }

  /**
   * Pharmacy findUniqueOrThrow
   */
  export type PharmacyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInclude<ExtArgs> | null
    /**
     * Filter, which Pharmacy to fetch.
     */
    where: PharmacyWhereUniqueInput
  }

  /**
   * Pharmacy findFirst
   */
  export type PharmacyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInclude<ExtArgs> | null
    /**
     * Filter, which Pharmacy to fetch.
     */
    where?: PharmacyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pharmacies to fetch.
     */
    orderBy?: PharmacyOrderByWithRelationInput | PharmacyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pharmacies.
     */
    cursor?: PharmacyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pharmacies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pharmacies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pharmacies.
     */
    distinct?: PharmacyScalarFieldEnum | PharmacyScalarFieldEnum[]
  }

  /**
   * Pharmacy findFirstOrThrow
   */
  export type PharmacyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInclude<ExtArgs> | null
    /**
     * Filter, which Pharmacy to fetch.
     */
    where?: PharmacyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pharmacies to fetch.
     */
    orderBy?: PharmacyOrderByWithRelationInput | PharmacyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pharmacies.
     */
    cursor?: PharmacyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pharmacies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pharmacies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pharmacies.
     */
    distinct?: PharmacyScalarFieldEnum | PharmacyScalarFieldEnum[]
  }

  /**
   * Pharmacy findMany
   */
  export type PharmacyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInclude<ExtArgs> | null
    /**
     * Filter, which Pharmacies to fetch.
     */
    where?: PharmacyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pharmacies to fetch.
     */
    orderBy?: PharmacyOrderByWithRelationInput | PharmacyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pharmacies.
     */
    cursor?: PharmacyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pharmacies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pharmacies.
     */
    skip?: number
    distinct?: PharmacyScalarFieldEnum | PharmacyScalarFieldEnum[]
  }

  /**
   * Pharmacy create
   */
  export type PharmacyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInclude<ExtArgs> | null
    /**
     * The data needed to create a Pharmacy.
     */
    data: XOR<PharmacyCreateInput, PharmacyUncheckedCreateInput>
  }

  /**
   * Pharmacy createMany
   */
  export type PharmacyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pharmacies.
     */
    data: PharmacyCreateManyInput | PharmacyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pharmacy createManyAndReturn
   */
  export type PharmacyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * The data used to create many Pharmacies.
     */
    data: PharmacyCreateManyInput | PharmacyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pharmacy update
   */
  export type PharmacyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInclude<ExtArgs> | null
    /**
     * The data needed to update a Pharmacy.
     */
    data: XOR<PharmacyUpdateInput, PharmacyUncheckedUpdateInput>
    /**
     * Choose, which Pharmacy to update.
     */
    where: PharmacyWhereUniqueInput
  }

  /**
   * Pharmacy updateMany
   */
  export type PharmacyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pharmacies.
     */
    data: XOR<PharmacyUpdateManyMutationInput, PharmacyUncheckedUpdateManyInput>
    /**
     * Filter which Pharmacies to update
     */
    where?: PharmacyWhereInput
    /**
     * Limit how many Pharmacies to update.
     */
    limit?: number
  }

  /**
   * Pharmacy updateManyAndReturn
   */
  export type PharmacyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * The data used to update Pharmacies.
     */
    data: XOR<PharmacyUpdateManyMutationInput, PharmacyUncheckedUpdateManyInput>
    /**
     * Filter which Pharmacies to update
     */
    where?: PharmacyWhereInput
    /**
     * Limit how many Pharmacies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pharmacy upsert
   */
  export type PharmacyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInclude<ExtArgs> | null
    /**
     * The filter to search for the Pharmacy to update in case it exists.
     */
    where: PharmacyWhereUniqueInput
    /**
     * In case the Pharmacy found by the `where` argument doesn't exist, create a new Pharmacy with this data.
     */
    create: XOR<PharmacyCreateInput, PharmacyUncheckedCreateInput>
    /**
     * In case the Pharmacy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PharmacyUpdateInput, PharmacyUncheckedUpdateInput>
  }

  /**
   * Pharmacy delete
   */
  export type PharmacyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInclude<ExtArgs> | null
    /**
     * Filter which Pharmacy to delete.
     */
    where: PharmacyWhereUniqueInput
  }

  /**
   * Pharmacy deleteMany
   */
  export type PharmacyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pharmacies to delete
     */
    where?: PharmacyWhereInput
    /**
     * Limit how many Pharmacies to delete.
     */
    limit?: number
  }

  /**
   * Pharmacy without action
   */
  export type PharmacyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInclude<ExtArgs> | null
  }


  /**
   * Model MriTest
   */

  export type AggregateMriTest = {
    _count: MriTestCountAggregateOutputType | null
    _avg: MriTestAvgAggregateOutputType | null
    _sum: MriTestSumAggregateOutputType | null
    _min: MriTestMinAggregateOutputType | null
    _max: MriTestMaxAggregateOutputType | null
  }

  export type MriTestAvgAggregateOutputType = {
    id: number | null
    idUser: number | null
  }

  export type MriTestSumAggregateOutputType = {
    id: number | null
    idUser: number | null
  }

  export type MriTestMinAggregateOutputType = {
    id: number | null
    urlPhoto: string | null
    keterangan: string | null
    tanggal: Date | null
    idUser: number | null
  }

  export type MriTestMaxAggregateOutputType = {
    id: number | null
    urlPhoto: string | null
    keterangan: string | null
    tanggal: Date | null
    idUser: number | null
  }

  export type MriTestCountAggregateOutputType = {
    id: number
    urlPhoto: number
    keterangan: number
    tanggal: number
    idUser: number
    _all: number
  }


  export type MriTestAvgAggregateInputType = {
    id?: true
    idUser?: true
  }

  export type MriTestSumAggregateInputType = {
    id?: true
    idUser?: true
  }

  export type MriTestMinAggregateInputType = {
    id?: true
    urlPhoto?: true
    keterangan?: true
    tanggal?: true
    idUser?: true
  }

  export type MriTestMaxAggregateInputType = {
    id?: true
    urlPhoto?: true
    keterangan?: true
    tanggal?: true
    idUser?: true
  }

  export type MriTestCountAggregateInputType = {
    id?: true
    urlPhoto?: true
    keterangan?: true
    tanggal?: true
    idUser?: true
    _all?: true
  }

  export type MriTestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MriTest to aggregate.
     */
    where?: MriTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MriTests to fetch.
     */
    orderBy?: MriTestOrderByWithRelationInput | MriTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MriTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MriTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MriTests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MriTests
    **/
    _count?: true | MriTestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MriTestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MriTestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MriTestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MriTestMaxAggregateInputType
  }

  export type GetMriTestAggregateType<T extends MriTestAggregateArgs> = {
        [P in keyof T & keyof AggregateMriTest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMriTest[P]>
      : GetScalarType<T[P], AggregateMriTest[P]>
  }




  export type MriTestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MriTestWhereInput
    orderBy?: MriTestOrderByWithAggregationInput | MriTestOrderByWithAggregationInput[]
    by: MriTestScalarFieldEnum[] | MriTestScalarFieldEnum
    having?: MriTestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MriTestCountAggregateInputType | true
    _avg?: MriTestAvgAggregateInputType
    _sum?: MriTestSumAggregateInputType
    _min?: MriTestMinAggregateInputType
    _max?: MriTestMaxAggregateInputType
  }

  export type MriTestGroupByOutputType = {
    id: number
    urlPhoto: string
    keterangan: string
    tanggal: Date
    idUser: number
    _count: MriTestCountAggregateOutputType | null
    _avg: MriTestAvgAggregateOutputType | null
    _sum: MriTestSumAggregateOutputType | null
    _min: MriTestMinAggregateOutputType | null
    _max: MriTestMaxAggregateOutputType | null
  }

  type GetMriTestGroupByPayload<T extends MriTestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MriTestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MriTestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MriTestGroupByOutputType[P]>
            : GetScalarType<T[P], MriTestGroupByOutputType[P]>
        }
      >
    >


  export type MriTestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    urlPhoto?: boolean
    keterangan?: boolean
    tanggal?: boolean
    idUser?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mriTest"]>

  export type MriTestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    urlPhoto?: boolean
    keterangan?: boolean
    tanggal?: boolean
    idUser?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mriTest"]>

  export type MriTestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    urlPhoto?: boolean
    keterangan?: boolean
    tanggal?: boolean
    idUser?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mriTest"]>

  export type MriTestSelectScalar = {
    id?: boolean
    urlPhoto?: boolean
    keterangan?: boolean
    tanggal?: boolean
    idUser?: boolean
  }

  export type MriTestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "urlPhoto" | "keterangan" | "tanggal" | "idUser", ExtArgs["result"]["mriTest"]>
  export type MriTestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MriTestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MriTestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MriTestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MriTest"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      urlPhoto: string
      keterangan: string
      tanggal: Date
      idUser: number
    }, ExtArgs["result"]["mriTest"]>
    composites: {}
  }

  type MriTestGetPayload<S extends boolean | null | undefined | MriTestDefaultArgs> = $Result.GetResult<Prisma.$MriTestPayload, S>

  type MriTestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MriTestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MriTestCountAggregateInputType | true
    }

  export interface MriTestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MriTest'], meta: { name: 'MriTest' } }
    /**
     * Find zero or one MriTest that matches the filter.
     * @param {MriTestFindUniqueArgs} args - Arguments to find a MriTest
     * @example
     * // Get one MriTest
     * const mriTest = await prisma.mriTest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MriTestFindUniqueArgs>(args: SelectSubset<T, MriTestFindUniqueArgs<ExtArgs>>): Prisma__MriTestClient<$Result.GetResult<Prisma.$MriTestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MriTest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MriTestFindUniqueOrThrowArgs} args - Arguments to find a MriTest
     * @example
     * // Get one MriTest
     * const mriTest = await prisma.mriTest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MriTestFindUniqueOrThrowArgs>(args: SelectSubset<T, MriTestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MriTestClient<$Result.GetResult<Prisma.$MriTestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MriTest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MriTestFindFirstArgs} args - Arguments to find a MriTest
     * @example
     * // Get one MriTest
     * const mriTest = await prisma.mriTest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MriTestFindFirstArgs>(args?: SelectSubset<T, MriTestFindFirstArgs<ExtArgs>>): Prisma__MriTestClient<$Result.GetResult<Prisma.$MriTestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MriTest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MriTestFindFirstOrThrowArgs} args - Arguments to find a MriTest
     * @example
     * // Get one MriTest
     * const mriTest = await prisma.mriTest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MriTestFindFirstOrThrowArgs>(args?: SelectSubset<T, MriTestFindFirstOrThrowArgs<ExtArgs>>): Prisma__MriTestClient<$Result.GetResult<Prisma.$MriTestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MriTests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MriTestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MriTests
     * const mriTests = await prisma.mriTest.findMany()
     * 
     * // Get first 10 MriTests
     * const mriTests = await prisma.mriTest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mriTestWithIdOnly = await prisma.mriTest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MriTestFindManyArgs>(args?: SelectSubset<T, MriTestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MriTestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MriTest.
     * @param {MriTestCreateArgs} args - Arguments to create a MriTest.
     * @example
     * // Create one MriTest
     * const MriTest = await prisma.mriTest.create({
     *   data: {
     *     // ... data to create a MriTest
     *   }
     * })
     * 
     */
    create<T extends MriTestCreateArgs>(args: SelectSubset<T, MriTestCreateArgs<ExtArgs>>): Prisma__MriTestClient<$Result.GetResult<Prisma.$MriTestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MriTests.
     * @param {MriTestCreateManyArgs} args - Arguments to create many MriTests.
     * @example
     * // Create many MriTests
     * const mriTest = await prisma.mriTest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MriTestCreateManyArgs>(args?: SelectSubset<T, MriTestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MriTests and returns the data saved in the database.
     * @param {MriTestCreateManyAndReturnArgs} args - Arguments to create many MriTests.
     * @example
     * // Create many MriTests
     * const mriTest = await prisma.mriTest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MriTests and only return the `id`
     * const mriTestWithIdOnly = await prisma.mriTest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MriTestCreateManyAndReturnArgs>(args?: SelectSubset<T, MriTestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MriTestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MriTest.
     * @param {MriTestDeleteArgs} args - Arguments to delete one MriTest.
     * @example
     * // Delete one MriTest
     * const MriTest = await prisma.mriTest.delete({
     *   where: {
     *     // ... filter to delete one MriTest
     *   }
     * })
     * 
     */
    delete<T extends MriTestDeleteArgs>(args: SelectSubset<T, MriTestDeleteArgs<ExtArgs>>): Prisma__MriTestClient<$Result.GetResult<Prisma.$MriTestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MriTest.
     * @param {MriTestUpdateArgs} args - Arguments to update one MriTest.
     * @example
     * // Update one MriTest
     * const mriTest = await prisma.mriTest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MriTestUpdateArgs>(args: SelectSubset<T, MriTestUpdateArgs<ExtArgs>>): Prisma__MriTestClient<$Result.GetResult<Prisma.$MriTestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MriTests.
     * @param {MriTestDeleteManyArgs} args - Arguments to filter MriTests to delete.
     * @example
     * // Delete a few MriTests
     * const { count } = await prisma.mriTest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MriTestDeleteManyArgs>(args?: SelectSubset<T, MriTestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MriTests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MriTestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MriTests
     * const mriTest = await prisma.mriTest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MriTestUpdateManyArgs>(args: SelectSubset<T, MriTestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MriTests and returns the data updated in the database.
     * @param {MriTestUpdateManyAndReturnArgs} args - Arguments to update many MriTests.
     * @example
     * // Update many MriTests
     * const mriTest = await prisma.mriTest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MriTests and only return the `id`
     * const mriTestWithIdOnly = await prisma.mriTest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MriTestUpdateManyAndReturnArgs>(args: SelectSubset<T, MriTestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MriTestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MriTest.
     * @param {MriTestUpsertArgs} args - Arguments to update or create a MriTest.
     * @example
     * // Update or create a MriTest
     * const mriTest = await prisma.mriTest.upsert({
     *   create: {
     *     // ... data to create a MriTest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MriTest we want to update
     *   }
     * })
     */
    upsert<T extends MriTestUpsertArgs>(args: SelectSubset<T, MriTestUpsertArgs<ExtArgs>>): Prisma__MriTestClient<$Result.GetResult<Prisma.$MriTestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MriTests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MriTestCountArgs} args - Arguments to filter MriTests to count.
     * @example
     * // Count the number of MriTests
     * const count = await prisma.mriTest.count({
     *   where: {
     *     // ... the filter for the MriTests we want to count
     *   }
     * })
    **/
    count<T extends MriTestCountArgs>(
      args?: Subset<T, MriTestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MriTestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MriTest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MriTestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MriTestAggregateArgs>(args: Subset<T, MriTestAggregateArgs>): Prisma.PrismaPromise<GetMriTestAggregateType<T>>

    /**
     * Group by MriTest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MriTestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MriTestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MriTestGroupByArgs['orderBy'] }
        : { orderBy?: MriTestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MriTestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMriTestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MriTest model
   */
  readonly fields: MriTestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MriTest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MriTestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MriTest model
   */
  interface MriTestFieldRefs {
    readonly id: FieldRef<"MriTest", 'Int'>
    readonly urlPhoto: FieldRef<"MriTest", 'String'>
    readonly keterangan: FieldRef<"MriTest", 'String'>
    readonly tanggal: FieldRef<"MriTest", 'DateTime'>
    readonly idUser: FieldRef<"MriTest", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * MriTest findUnique
   */
  export type MriTestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MriTest
     */
    select?: MriTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MriTest
     */
    omit?: MriTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MriTestInclude<ExtArgs> | null
    /**
     * Filter, which MriTest to fetch.
     */
    where: MriTestWhereUniqueInput
  }

  /**
   * MriTest findUniqueOrThrow
   */
  export type MriTestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MriTest
     */
    select?: MriTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MriTest
     */
    omit?: MriTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MriTestInclude<ExtArgs> | null
    /**
     * Filter, which MriTest to fetch.
     */
    where: MriTestWhereUniqueInput
  }

  /**
   * MriTest findFirst
   */
  export type MriTestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MriTest
     */
    select?: MriTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MriTest
     */
    omit?: MriTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MriTestInclude<ExtArgs> | null
    /**
     * Filter, which MriTest to fetch.
     */
    where?: MriTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MriTests to fetch.
     */
    orderBy?: MriTestOrderByWithRelationInput | MriTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MriTests.
     */
    cursor?: MriTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MriTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MriTests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MriTests.
     */
    distinct?: MriTestScalarFieldEnum | MriTestScalarFieldEnum[]
  }

  /**
   * MriTest findFirstOrThrow
   */
  export type MriTestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MriTest
     */
    select?: MriTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MriTest
     */
    omit?: MriTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MriTestInclude<ExtArgs> | null
    /**
     * Filter, which MriTest to fetch.
     */
    where?: MriTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MriTests to fetch.
     */
    orderBy?: MriTestOrderByWithRelationInput | MriTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MriTests.
     */
    cursor?: MriTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MriTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MriTests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MriTests.
     */
    distinct?: MriTestScalarFieldEnum | MriTestScalarFieldEnum[]
  }

  /**
   * MriTest findMany
   */
  export type MriTestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MriTest
     */
    select?: MriTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MriTest
     */
    omit?: MriTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MriTestInclude<ExtArgs> | null
    /**
     * Filter, which MriTests to fetch.
     */
    where?: MriTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MriTests to fetch.
     */
    orderBy?: MriTestOrderByWithRelationInput | MriTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MriTests.
     */
    cursor?: MriTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MriTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MriTests.
     */
    skip?: number
    distinct?: MriTestScalarFieldEnum | MriTestScalarFieldEnum[]
  }

  /**
   * MriTest create
   */
  export type MriTestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MriTest
     */
    select?: MriTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MriTest
     */
    omit?: MriTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MriTestInclude<ExtArgs> | null
    /**
     * The data needed to create a MriTest.
     */
    data: XOR<MriTestCreateInput, MriTestUncheckedCreateInput>
  }

  /**
   * MriTest createMany
   */
  export type MriTestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MriTests.
     */
    data: MriTestCreateManyInput | MriTestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MriTest createManyAndReturn
   */
  export type MriTestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MriTest
     */
    select?: MriTestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MriTest
     */
    omit?: MriTestOmit<ExtArgs> | null
    /**
     * The data used to create many MriTests.
     */
    data: MriTestCreateManyInput | MriTestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MriTestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MriTest update
   */
  export type MriTestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MriTest
     */
    select?: MriTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MriTest
     */
    omit?: MriTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MriTestInclude<ExtArgs> | null
    /**
     * The data needed to update a MriTest.
     */
    data: XOR<MriTestUpdateInput, MriTestUncheckedUpdateInput>
    /**
     * Choose, which MriTest to update.
     */
    where: MriTestWhereUniqueInput
  }

  /**
   * MriTest updateMany
   */
  export type MriTestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MriTests.
     */
    data: XOR<MriTestUpdateManyMutationInput, MriTestUncheckedUpdateManyInput>
    /**
     * Filter which MriTests to update
     */
    where?: MriTestWhereInput
    /**
     * Limit how many MriTests to update.
     */
    limit?: number
  }

  /**
   * MriTest updateManyAndReturn
   */
  export type MriTestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MriTest
     */
    select?: MriTestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MriTest
     */
    omit?: MriTestOmit<ExtArgs> | null
    /**
     * The data used to update MriTests.
     */
    data: XOR<MriTestUpdateManyMutationInput, MriTestUncheckedUpdateManyInput>
    /**
     * Filter which MriTests to update
     */
    where?: MriTestWhereInput
    /**
     * Limit how many MriTests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MriTestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MriTest upsert
   */
  export type MriTestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MriTest
     */
    select?: MriTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MriTest
     */
    omit?: MriTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MriTestInclude<ExtArgs> | null
    /**
     * The filter to search for the MriTest to update in case it exists.
     */
    where: MriTestWhereUniqueInput
    /**
     * In case the MriTest found by the `where` argument doesn't exist, create a new MriTest with this data.
     */
    create: XOR<MriTestCreateInput, MriTestUncheckedCreateInput>
    /**
     * In case the MriTest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MriTestUpdateInput, MriTestUncheckedUpdateInput>
  }

  /**
   * MriTest delete
   */
  export type MriTestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MriTest
     */
    select?: MriTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MriTest
     */
    omit?: MriTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MriTestInclude<ExtArgs> | null
    /**
     * Filter which MriTest to delete.
     */
    where: MriTestWhereUniqueInput
  }

  /**
   * MriTest deleteMany
   */
  export type MriTestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MriTests to delete
     */
    where?: MriTestWhereInput
    /**
     * Limit how many MriTests to delete.
     */
    limit?: number
  }

  /**
   * MriTest without action
   */
  export type MriTestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MriTest
     */
    select?: MriTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MriTest
     */
    omit?: MriTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MriTestInclude<ExtArgs> | null
  }


  /**
   * Model UrineTest
   */

  export type AggregateUrineTest = {
    _count: UrineTestCountAggregateOutputType | null
    _avg: UrineTestAvgAggregateOutputType | null
    _sum: UrineTestSumAggregateOutputType | null
    _min: UrineTestMinAggregateOutputType | null
    _max: UrineTestMaxAggregateOutputType | null
  }

  export type UrineTestAvgAggregateOutputType = {
    id: number | null
    ph: number | null
    idUser: number | null
  }

  export type UrineTestSumAggregateOutputType = {
    id: number | null
    ph: number | null
    idUser: number | null
  }

  export type UrineTestMinAggregateOutputType = {
    id: number | null
    warna: string | null
    bau: string | null
    ph: number | null
    glukosa: string | null
    protein: string | null
    tanggal: Date | null
    idUser: number | null
  }

  export type UrineTestMaxAggregateOutputType = {
    id: number | null
    warna: string | null
    bau: string | null
    ph: number | null
    glukosa: string | null
    protein: string | null
    tanggal: Date | null
    idUser: number | null
  }

  export type UrineTestCountAggregateOutputType = {
    id: number
    warna: number
    bau: number
    ph: number
    glukosa: number
    protein: number
    tanggal: number
    idUser: number
    _all: number
  }


  export type UrineTestAvgAggregateInputType = {
    id?: true
    ph?: true
    idUser?: true
  }

  export type UrineTestSumAggregateInputType = {
    id?: true
    ph?: true
    idUser?: true
  }

  export type UrineTestMinAggregateInputType = {
    id?: true
    warna?: true
    bau?: true
    ph?: true
    glukosa?: true
    protein?: true
    tanggal?: true
    idUser?: true
  }

  export type UrineTestMaxAggregateInputType = {
    id?: true
    warna?: true
    bau?: true
    ph?: true
    glukosa?: true
    protein?: true
    tanggal?: true
    idUser?: true
  }

  export type UrineTestCountAggregateInputType = {
    id?: true
    warna?: true
    bau?: true
    ph?: true
    glukosa?: true
    protein?: true
    tanggal?: true
    idUser?: true
    _all?: true
  }

  export type UrineTestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UrineTest to aggregate.
     */
    where?: UrineTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UrineTests to fetch.
     */
    orderBy?: UrineTestOrderByWithRelationInput | UrineTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UrineTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UrineTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UrineTests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UrineTests
    **/
    _count?: true | UrineTestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UrineTestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UrineTestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UrineTestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UrineTestMaxAggregateInputType
  }

  export type GetUrineTestAggregateType<T extends UrineTestAggregateArgs> = {
        [P in keyof T & keyof AggregateUrineTest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUrineTest[P]>
      : GetScalarType<T[P], AggregateUrineTest[P]>
  }




  export type UrineTestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UrineTestWhereInput
    orderBy?: UrineTestOrderByWithAggregationInput | UrineTestOrderByWithAggregationInput[]
    by: UrineTestScalarFieldEnum[] | UrineTestScalarFieldEnum
    having?: UrineTestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UrineTestCountAggregateInputType | true
    _avg?: UrineTestAvgAggregateInputType
    _sum?: UrineTestSumAggregateInputType
    _min?: UrineTestMinAggregateInputType
    _max?: UrineTestMaxAggregateInputType
  }

  export type UrineTestGroupByOutputType = {
    id: number
    warna: string
    bau: string
    ph: number
    glukosa: string
    protein: string
    tanggal: Date
    idUser: number
    _count: UrineTestCountAggregateOutputType | null
    _avg: UrineTestAvgAggregateOutputType | null
    _sum: UrineTestSumAggregateOutputType | null
    _min: UrineTestMinAggregateOutputType | null
    _max: UrineTestMaxAggregateOutputType | null
  }

  type GetUrineTestGroupByPayload<T extends UrineTestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UrineTestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UrineTestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UrineTestGroupByOutputType[P]>
            : GetScalarType<T[P], UrineTestGroupByOutputType[P]>
        }
      >
    >


  export type UrineTestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    warna?: boolean
    bau?: boolean
    ph?: boolean
    glukosa?: boolean
    protein?: boolean
    tanggal?: boolean
    idUser?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["urineTest"]>

  export type UrineTestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    warna?: boolean
    bau?: boolean
    ph?: boolean
    glukosa?: boolean
    protein?: boolean
    tanggal?: boolean
    idUser?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["urineTest"]>

  export type UrineTestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    warna?: boolean
    bau?: boolean
    ph?: boolean
    glukosa?: boolean
    protein?: boolean
    tanggal?: boolean
    idUser?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["urineTest"]>

  export type UrineTestSelectScalar = {
    id?: boolean
    warna?: boolean
    bau?: boolean
    ph?: boolean
    glukosa?: boolean
    protein?: boolean
    tanggal?: boolean
    idUser?: boolean
  }

  export type UrineTestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "warna" | "bau" | "ph" | "glukosa" | "protein" | "tanggal" | "idUser", ExtArgs["result"]["urineTest"]>
  export type UrineTestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UrineTestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UrineTestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UrineTestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UrineTest"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      warna: string
      bau: string
      ph: number
      glukosa: string
      protein: string
      tanggal: Date
      idUser: number
    }, ExtArgs["result"]["urineTest"]>
    composites: {}
  }

  type UrineTestGetPayload<S extends boolean | null | undefined | UrineTestDefaultArgs> = $Result.GetResult<Prisma.$UrineTestPayload, S>

  type UrineTestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UrineTestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UrineTestCountAggregateInputType | true
    }

  export interface UrineTestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UrineTest'], meta: { name: 'UrineTest' } }
    /**
     * Find zero or one UrineTest that matches the filter.
     * @param {UrineTestFindUniqueArgs} args - Arguments to find a UrineTest
     * @example
     * // Get one UrineTest
     * const urineTest = await prisma.urineTest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UrineTestFindUniqueArgs>(args: SelectSubset<T, UrineTestFindUniqueArgs<ExtArgs>>): Prisma__UrineTestClient<$Result.GetResult<Prisma.$UrineTestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UrineTest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UrineTestFindUniqueOrThrowArgs} args - Arguments to find a UrineTest
     * @example
     * // Get one UrineTest
     * const urineTest = await prisma.urineTest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UrineTestFindUniqueOrThrowArgs>(args: SelectSubset<T, UrineTestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UrineTestClient<$Result.GetResult<Prisma.$UrineTestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UrineTest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UrineTestFindFirstArgs} args - Arguments to find a UrineTest
     * @example
     * // Get one UrineTest
     * const urineTest = await prisma.urineTest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UrineTestFindFirstArgs>(args?: SelectSubset<T, UrineTestFindFirstArgs<ExtArgs>>): Prisma__UrineTestClient<$Result.GetResult<Prisma.$UrineTestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UrineTest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UrineTestFindFirstOrThrowArgs} args - Arguments to find a UrineTest
     * @example
     * // Get one UrineTest
     * const urineTest = await prisma.urineTest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UrineTestFindFirstOrThrowArgs>(args?: SelectSubset<T, UrineTestFindFirstOrThrowArgs<ExtArgs>>): Prisma__UrineTestClient<$Result.GetResult<Prisma.$UrineTestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UrineTests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UrineTestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UrineTests
     * const urineTests = await prisma.urineTest.findMany()
     * 
     * // Get first 10 UrineTests
     * const urineTests = await prisma.urineTest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const urineTestWithIdOnly = await prisma.urineTest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UrineTestFindManyArgs>(args?: SelectSubset<T, UrineTestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UrineTestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UrineTest.
     * @param {UrineTestCreateArgs} args - Arguments to create a UrineTest.
     * @example
     * // Create one UrineTest
     * const UrineTest = await prisma.urineTest.create({
     *   data: {
     *     // ... data to create a UrineTest
     *   }
     * })
     * 
     */
    create<T extends UrineTestCreateArgs>(args: SelectSubset<T, UrineTestCreateArgs<ExtArgs>>): Prisma__UrineTestClient<$Result.GetResult<Prisma.$UrineTestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UrineTests.
     * @param {UrineTestCreateManyArgs} args - Arguments to create many UrineTests.
     * @example
     * // Create many UrineTests
     * const urineTest = await prisma.urineTest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UrineTestCreateManyArgs>(args?: SelectSubset<T, UrineTestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UrineTests and returns the data saved in the database.
     * @param {UrineTestCreateManyAndReturnArgs} args - Arguments to create many UrineTests.
     * @example
     * // Create many UrineTests
     * const urineTest = await prisma.urineTest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UrineTests and only return the `id`
     * const urineTestWithIdOnly = await prisma.urineTest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UrineTestCreateManyAndReturnArgs>(args?: SelectSubset<T, UrineTestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UrineTestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UrineTest.
     * @param {UrineTestDeleteArgs} args - Arguments to delete one UrineTest.
     * @example
     * // Delete one UrineTest
     * const UrineTest = await prisma.urineTest.delete({
     *   where: {
     *     // ... filter to delete one UrineTest
     *   }
     * })
     * 
     */
    delete<T extends UrineTestDeleteArgs>(args: SelectSubset<T, UrineTestDeleteArgs<ExtArgs>>): Prisma__UrineTestClient<$Result.GetResult<Prisma.$UrineTestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UrineTest.
     * @param {UrineTestUpdateArgs} args - Arguments to update one UrineTest.
     * @example
     * // Update one UrineTest
     * const urineTest = await prisma.urineTest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UrineTestUpdateArgs>(args: SelectSubset<T, UrineTestUpdateArgs<ExtArgs>>): Prisma__UrineTestClient<$Result.GetResult<Prisma.$UrineTestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UrineTests.
     * @param {UrineTestDeleteManyArgs} args - Arguments to filter UrineTests to delete.
     * @example
     * // Delete a few UrineTests
     * const { count } = await prisma.urineTest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UrineTestDeleteManyArgs>(args?: SelectSubset<T, UrineTestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UrineTests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UrineTestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UrineTests
     * const urineTest = await prisma.urineTest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UrineTestUpdateManyArgs>(args: SelectSubset<T, UrineTestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UrineTests and returns the data updated in the database.
     * @param {UrineTestUpdateManyAndReturnArgs} args - Arguments to update many UrineTests.
     * @example
     * // Update many UrineTests
     * const urineTest = await prisma.urineTest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UrineTests and only return the `id`
     * const urineTestWithIdOnly = await prisma.urineTest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UrineTestUpdateManyAndReturnArgs>(args: SelectSubset<T, UrineTestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UrineTestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UrineTest.
     * @param {UrineTestUpsertArgs} args - Arguments to update or create a UrineTest.
     * @example
     * // Update or create a UrineTest
     * const urineTest = await prisma.urineTest.upsert({
     *   create: {
     *     // ... data to create a UrineTest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UrineTest we want to update
     *   }
     * })
     */
    upsert<T extends UrineTestUpsertArgs>(args: SelectSubset<T, UrineTestUpsertArgs<ExtArgs>>): Prisma__UrineTestClient<$Result.GetResult<Prisma.$UrineTestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UrineTests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UrineTestCountArgs} args - Arguments to filter UrineTests to count.
     * @example
     * // Count the number of UrineTests
     * const count = await prisma.urineTest.count({
     *   where: {
     *     // ... the filter for the UrineTests we want to count
     *   }
     * })
    **/
    count<T extends UrineTestCountArgs>(
      args?: Subset<T, UrineTestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UrineTestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UrineTest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UrineTestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UrineTestAggregateArgs>(args: Subset<T, UrineTestAggregateArgs>): Prisma.PrismaPromise<GetUrineTestAggregateType<T>>

    /**
     * Group by UrineTest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UrineTestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UrineTestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UrineTestGroupByArgs['orderBy'] }
        : { orderBy?: UrineTestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UrineTestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUrineTestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UrineTest model
   */
  readonly fields: UrineTestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UrineTest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UrineTestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UrineTest model
   */
  interface UrineTestFieldRefs {
    readonly id: FieldRef<"UrineTest", 'Int'>
    readonly warna: FieldRef<"UrineTest", 'String'>
    readonly bau: FieldRef<"UrineTest", 'String'>
    readonly ph: FieldRef<"UrineTest", 'Float'>
    readonly glukosa: FieldRef<"UrineTest", 'String'>
    readonly protein: FieldRef<"UrineTest", 'String'>
    readonly tanggal: FieldRef<"UrineTest", 'DateTime'>
    readonly idUser: FieldRef<"UrineTest", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UrineTest findUnique
   */
  export type UrineTestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UrineTest
     */
    select?: UrineTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UrineTest
     */
    omit?: UrineTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrineTestInclude<ExtArgs> | null
    /**
     * Filter, which UrineTest to fetch.
     */
    where: UrineTestWhereUniqueInput
  }

  /**
   * UrineTest findUniqueOrThrow
   */
  export type UrineTestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UrineTest
     */
    select?: UrineTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UrineTest
     */
    omit?: UrineTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrineTestInclude<ExtArgs> | null
    /**
     * Filter, which UrineTest to fetch.
     */
    where: UrineTestWhereUniqueInput
  }

  /**
   * UrineTest findFirst
   */
  export type UrineTestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UrineTest
     */
    select?: UrineTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UrineTest
     */
    omit?: UrineTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrineTestInclude<ExtArgs> | null
    /**
     * Filter, which UrineTest to fetch.
     */
    where?: UrineTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UrineTests to fetch.
     */
    orderBy?: UrineTestOrderByWithRelationInput | UrineTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UrineTests.
     */
    cursor?: UrineTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UrineTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UrineTests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UrineTests.
     */
    distinct?: UrineTestScalarFieldEnum | UrineTestScalarFieldEnum[]
  }

  /**
   * UrineTest findFirstOrThrow
   */
  export type UrineTestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UrineTest
     */
    select?: UrineTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UrineTest
     */
    omit?: UrineTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrineTestInclude<ExtArgs> | null
    /**
     * Filter, which UrineTest to fetch.
     */
    where?: UrineTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UrineTests to fetch.
     */
    orderBy?: UrineTestOrderByWithRelationInput | UrineTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UrineTests.
     */
    cursor?: UrineTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UrineTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UrineTests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UrineTests.
     */
    distinct?: UrineTestScalarFieldEnum | UrineTestScalarFieldEnum[]
  }

  /**
   * UrineTest findMany
   */
  export type UrineTestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UrineTest
     */
    select?: UrineTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UrineTest
     */
    omit?: UrineTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrineTestInclude<ExtArgs> | null
    /**
     * Filter, which UrineTests to fetch.
     */
    where?: UrineTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UrineTests to fetch.
     */
    orderBy?: UrineTestOrderByWithRelationInput | UrineTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UrineTests.
     */
    cursor?: UrineTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UrineTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UrineTests.
     */
    skip?: number
    distinct?: UrineTestScalarFieldEnum | UrineTestScalarFieldEnum[]
  }

  /**
   * UrineTest create
   */
  export type UrineTestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UrineTest
     */
    select?: UrineTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UrineTest
     */
    omit?: UrineTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrineTestInclude<ExtArgs> | null
    /**
     * The data needed to create a UrineTest.
     */
    data: XOR<UrineTestCreateInput, UrineTestUncheckedCreateInput>
  }

  /**
   * UrineTest createMany
   */
  export type UrineTestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UrineTests.
     */
    data: UrineTestCreateManyInput | UrineTestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UrineTest createManyAndReturn
   */
  export type UrineTestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UrineTest
     */
    select?: UrineTestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UrineTest
     */
    omit?: UrineTestOmit<ExtArgs> | null
    /**
     * The data used to create many UrineTests.
     */
    data: UrineTestCreateManyInput | UrineTestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrineTestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UrineTest update
   */
  export type UrineTestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UrineTest
     */
    select?: UrineTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UrineTest
     */
    omit?: UrineTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrineTestInclude<ExtArgs> | null
    /**
     * The data needed to update a UrineTest.
     */
    data: XOR<UrineTestUpdateInput, UrineTestUncheckedUpdateInput>
    /**
     * Choose, which UrineTest to update.
     */
    where: UrineTestWhereUniqueInput
  }

  /**
   * UrineTest updateMany
   */
  export type UrineTestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UrineTests.
     */
    data: XOR<UrineTestUpdateManyMutationInput, UrineTestUncheckedUpdateManyInput>
    /**
     * Filter which UrineTests to update
     */
    where?: UrineTestWhereInput
    /**
     * Limit how many UrineTests to update.
     */
    limit?: number
  }

  /**
   * UrineTest updateManyAndReturn
   */
  export type UrineTestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UrineTest
     */
    select?: UrineTestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UrineTest
     */
    omit?: UrineTestOmit<ExtArgs> | null
    /**
     * The data used to update UrineTests.
     */
    data: XOR<UrineTestUpdateManyMutationInput, UrineTestUncheckedUpdateManyInput>
    /**
     * Filter which UrineTests to update
     */
    where?: UrineTestWhereInput
    /**
     * Limit how many UrineTests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrineTestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UrineTest upsert
   */
  export type UrineTestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UrineTest
     */
    select?: UrineTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UrineTest
     */
    omit?: UrineTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrineTestInclude<ExtArgs> | null
    /**
     * The filter to search for the UrineTest to update in case it exists.
     */
    where: UrineTestWhereUniqueInput
    /**
     * In case the UrineTest found by the `where` argument doesn't exist, create a new UrineTest with this data.
     */
    create: XOR<UrineTestCreateInput, UrineTestUncheckedCreateInput>
    /**
     * In case the UrineTest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UrineTestUpdateInput, UrineTestUncheckedUpdateInput>
  }

  /**
   * UrineTest delete
   */
  export type UrineTestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UrineTest
     */
    select?: UrineTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UrineTest
     */
    omit?: UrineTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrineTestInclude<ExtArgs> | null
    /**
     * Filter which UrineTest to delete.
     */
    where: UrineTestWhereUniqueInput
  }

  /**
   * UrineTest deleteMany
   */
  export type UrineTestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UrineTests to delete
     */
    where?: UrineTestWhereInput
    /**
     * Limit how many UrineTests to delete.
     */
    limit?: number
  }

  /**
   * UrineTest without action
   */
  export type UrineTestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UrineTest
     */
    select?: UrineTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UrineTest
     */
    omit?: UrineTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrineTestInclude<ExtArgs> | null
  }


  /**
   * Model BloodTest
   */

  export type AggregateBloodTest = {
    _count: BloodTestCountAggregateOutputType | null
    _avg: BloodTestAvgAggregateOutputType | null
    _sum: BloodTestSumAggregateOutputType | null
    _min: BloodTestMinAggregateOutputType | null
    _max: BloodTestMaxAggregateOutputType | null
  }

  export type BloodTestAvgAggregateOutputType = {
    id: number | null
    hemoglobin: number | null
    leukosit: number | null
    trombosit: number | null
    gulaDarah: number | null
    kolesterol: number | null
    idUser: number | null
  }

  export type BloodTestSumAggregateOutputType = {
    id: number | null
    hemoglobin: number | null
    leukosit: number | null
    trombosit: number | null
    gulaDarah: number | null
    kolesterol: number | null
    idUser: number | null
  }

  export type BloodTestMinAggregateOutputType = {
    id: number | null
    hemoglobin: number | null
    leukosit: number | null
    trombosit: number | null
    gulaDarah: number | null
    kolesterol: number | null
    tanggal: Date | null
    idUser: number | null
  }

  export type BloodTestMaxAggregateOutputType = {
    id: number | null
    hemoglobin: number | null
    leukosit: number | null
    trombosit: number | null
    gulaDarah: number | null
    kolesterol: number | null
    tanggal: Date | null
    idUser: number | null
  }

  export type BloodTestCountAggregateOutputType = {
    id: number
    hemoglobin: number
    leukosit: number
    trombosit: number
    gulaDarah: number
    kolesterol: number
    tanggal: number
    idUser: number
    _all: number
  }


  export type BloodTestAvgAggregateInputType = {
    id?: true
    hemoglobin?: true
    leukosit?: true
    trombosit?: true
    gulaDarah?: true
    kolesterol?: true
    idUser?: true
  }

  export type BloodTestSumAggregateInputType = {
    id?: true
    hemoglobin?: true
    leukosit?: true
    trombosit?: true
    gulaDarah?: true
    kolesterol?: true
    idUser?: true
  }

  export type BloodTestMinAggregateInputType = {
    id?: true
    hemoglobin?: true
    leukosit?: true
    trombosit?: true
    gulaDarah?: true
    kolesterol?: true
    tanggal?: true
    idUser?: true
  }

  export type BloodTestMaxAggregateInputType = {
    id?: true
    hemoglobin?: true
    leukosit?: true
    trombosit?: true
    gulaDarah?: true
    kolesterol?: true
    tanggal?: true
    idUser?: true
  }

  export type BloodTestCountAggregateInputType = {
    id?: true
    hemoglobin?: true
    leukosit?: true
    trombosit?: true
    gulaDarah?: true
    kolesterol?: true
    tanggal?: true
    idUser?: true
    _all?: true
  }

  export type BloodTestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BloodTest to aggregate.
     */
    where?: BloodTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BloodTests to fetch.
     */
    orderBy?: BloodTestOrderByWithRelationInput | BloodTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BloodTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BloodTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BloodTests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BloodTests
    **/
    _count?: true | BloodTestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BloodTestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BloodTestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BloodTestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BloodTestMaxAggregateInputType
  }

  export type GetBloodTestAggregateType<T extends BloodTestAggregateArgs> = {
        [P in keyof T & keyof AggregateBloodTest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBloodTest[P]>
      : GetScalarType<T[P], AggregateBloodTest[P]>
  }




  export type BloodTestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BloodTestWhereInput
    orderBy?: BloodTestOrderByWithAggregationInput | BloodTestOrderByWithAggregationInput[]
    by: BloodTestScalarFieldEnum[] | BloodTestScalarFieldEnum
    having?: BloodTestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BloodTestCountAggregateInputType | true
    _avg?: BloodTestAvgAggregateInputType
    _sum?: BloodTestSumAggregateInputType
    _min?: BloodTestMinAggregateInputType
    _max?: BloodTestMaxAggregateInputType
  }

  export type BloodTestGroupByOutputType = {
    id: number
    hemoglobin: number
    leukosit: number
    trombosit: number
    gulaDarah: number
    kolesterol: number
    tanggal: Date
    idUser: number
    _count: BloodTestCountAggregateOutputType | null
    _avg: BloodTestAvgAggregateOutputType | null
    _sum: BloodTestSumAggregateOutputType | null
    _min: BloodTestMinAggregateOutputType | null
    _max: BloodTestMaxAggregateOutputType | null
  }

  type GetBloodTestGroupByPayload<T extends BloodTestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BloodTestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BloodTestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BloodTestGroupByOutputType[P]>
            : GetScalarType<T[P], BloodTestGroupByOutputType[P]>
        }
      >
    >


  export type BloodTestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hemoglobin?: boolean
    leukosit?: boolean
    trombosit?: boolean
    gulaDarah?: boolean
    kolesterol?: boolean
    tanggal?: boolean
    idUser?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bloodTest"]>

  export type BloodTestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hemoglobin?: boolean
    leukosit?: boolean
    trombosit?: boolean
    gulaDarah?: boolean
    kolesterol?: boolean
    tanggal?: boolean
    idUser?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bloodTest"]>

  export type BloodTestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hemoglobin?: boolean
    leukosit?: boolean
    trombosit?: boolean
    gulaDarah?: boolean
    kolesterol?: boolean
    tanggal?: boolean
    idUser?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bloodTest"]>

  export type BloodTestSelectScalar = {
    id?: boolean
    hemoglobin?: boolean
    leukosit?: boolean
    trombosit?: boolean
    gulaDarah?: boolean
    kolesterol?: boolean
    tanggal?: boolean
    idUser?: boolean
  }

  export type BloodTestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "hemoglobin" | "leukosit" | "trombosit" | "gulaDarah" | "kolesterol" | "tanggal" | "idUser", ExtArgs["result"]["bloodTest"]>
  export type BloodTestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BloodTestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BloodTestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BloodTestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BloodTest"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      hemoglobin: number
      leukosit: number
      trombosit: number
      gulaDarah: number
      kolesterol: number
      tanggal: Date
      idUser: number
    }, ExtArgs["result"]["bloodTest"]>
    composites: {}
  }

  type BloodTestGetPayload<S extends boolean | null | undefined | BloodTestDefaultArgs> = $Result.GetResult<Prisma.$BloodTestPayload, S>

  type BloodTestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BloodTestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BloodTestCountAggregateInputType | true
    }

  export interface BloodTestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BloodTest'], meta: { name: 'BloodTest' } }
    /**
     * Find zero or one BloodTest that matches the filter.
     * @param {BloodTestFindUniqueArgs} args - Arguments to find a BloodTest
     * @example
     * // Get one BloodTest
     * const bloodTest = await prisma.bloodTest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BloodTestFindUniqueArgs>(args: SelectSubset<T, BloodTestFindUniqueArgs<ExtArgs>>): Prisma__BloodTestClient<$Result.GetResult<Prisma.$BloodTestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BloodTest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BloodTestFindUniqueOrThrowArgs} args - Arguments to find a BloodTest
     * @example
     * // Get one BloodTest
     * const bloodTest = await prisma.bloodTest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BloodTestFindUniqueOrThrowArgs>(args: SelectSubset<T, BloodTestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BloodTestClient<$Result.GetResult<Prisma.$BloodTestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BloodTest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloodTestFindFirstArgs} args - Arguments to find a BloodTest
     * @example
     * // Get one BloodTest
     * const bloodTest = await prisma.bloodTest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BloodTestFindFirstArgs>(args?: SelectSubset<T, BloodTestFindFirstArgs<ExtArgs>>): Prisma__BloodTestClient<$Result.GetResult<Prisma.$BloodTestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BloodTest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloodTestFindFirstOrThrowArgs} args - Arguments to find a BloodTest
     * @example
     * // Get one BloodTest
     * const bloodTest = await prisma.bloodTest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BloodTestFindFirstOrThrowArgs>(args?: SelectSubset<T, BloodTestFindFirstOrThrowArgs<ExtArgs>>): Prisma__BloodTestClient<$Result.GetResult<Prisma.$BloodTestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BloodTests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloodTestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BloodTests
     * const bloodTests = await prisma.bloodTest.findMany()
     * 
     * // Get first 10 BloodTests
     * const bloodTests = await prisma.bloodTest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bloodTestWithIdOnly = await prisma.bloodTest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BloodTestFindManyArgs>(args?: SelectSubset<T, BloodTestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BloodTestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BloodTest.
     * @param {BloodTestCreateArgs} args - Arguments to create a BloodTest.
     * @example
     * // Create one BloodTest
     * const BloodTest = await prisma.bloodTest.create({
     *   data: {
     *     // ... data to create a BloodTest
     *   }
     * })
     * 
     */
    create<T extends BloodTestCreateArgs>(args: SelectSubset<T, BloodTestCreateArgs<ExtArgs>>): Prisma__BloodTestClient<$Result.GetResult<Prisma.$BloodTestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BloodTests.
     * @param {BloodTestCreateManyArgs} args - Arguments to create many BloodTests.
     * @example
     * // Create many BloodTests
     * const bloodTest = await prisma.bloodTest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BloodTestCreateManyArgs>(args?: SelectSubset<T, BloodTestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BloodTests and returns the data saved in the database.
     * @param {BloodTestCreateManyAndReturnArgs} args - Arguments to create many BloodTests.
     * @example
     * // Create many BloodTests
     * const bloodTest = await prisma.bloodTest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BloodTests and only return the `id`
     * const bloodTestWithIdOnly = await prisma.bloodTest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BloodTestCreateManyAndReturnArgs>(args?: SelectSubset<T, BloodTestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BloodTestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BloodTest.
     * @param {BloodTestDeleteArgs} args - Arguments to delete one BloodTest.
     * @example
     * // Delete one BloodTest
     * const BloodTest = await prisma.bloodTest.delete({
     *   where: {
     *     // ... filter to delete one BloodTest
     *   }
     * })
     * 
     */
    delete<T extends BloodTestDeleteArgs>(args: SelectSubset<T, BloodTestDeleteArgs<ExtArgs>>): Prisma__BloodTestClient<$Result.GetResult<Prisma.$BloodTestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BloodTest.
     * @param {BloodTestUpdateArgs} args - Arguments to update one BloodTest.
     * @example
     * // Update one BloodTest
     * const bloodTest = await prisma.bloodTest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BloodTestUpdateArgs>(args: SelectSubset<T, BloodTestUpdateArgs<ExtArgs>>): Prisma__BloodTestClient<$Result.GetResult<Prisma.$BloodTestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BloodTests.
     * @param {BloodTestDeleteManyArgs} args - Arguments to filter BloodTests to delete.
     * @example
     * // Delete a few BloodTests
     * const { count } = await prisma.bloodTest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BloodTestDeleteManyArgs>(args?: SelectSubset<T, BloodTestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BloodTests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloodTestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BloodTests
     * const bloodTest = await prisma.bloodTest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BloodTestUpdateManyArgs>(args: SelectSubset<T, BloodTestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BloodTests and returns the data updated in the database.
     * @param {BloodTestUpdateManyAndReturnArgs} args - Arguments to update many BloodTests.
     * @example
     * // Update many BloodTests
     * const bloodTest = await prisma.bloodTest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BloodTests and only return the `id`
     * const bloodTestWithIdOnly = await prisma.bloodTest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BloodTestUpdateManyAndReturnArgs>(args: SelectSubset<T, BloodTestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BloodTestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BloodTest.
     * @param {BloodTestUpsertArgs} args - Arguments to update or create a BloodTest.
     * @example
     * // Update or create a BloodTest
     * const bloodTest = await prisma.bloodTest.upsert({
     *   create: {
     *     // ... data to create a BloodTest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BloodTest we want to update
     *   }
     * })
     */
    upsert<T extends BloodTestUpsertArgs>(args: SelectSubset<T, BloodTestUpsertArgs<ExtArgs>>): Prisma__BloodTestClient<$Result.GetResult<Prisma.$BloodTestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BloodTests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloodTestCountArgs} args - Arguments to filter BloodTests to count.
     * @example
     * // Count the number of BloodTests
     * const count = await prisma.bloodTest.count({
     *   where: {
     *     // ... the filter for the BloodTests we want to count
     *   }
     * })
    **/
    count<T extends BloodTestCountArgs>(
      args?: Subset<T, BloodTestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BloodTestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BloodTest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloodTestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BloodTestAggregateArgs>(args: Subset<T, BloodTestAggregateArgs>): Prisma.PrismaPromise<GetBloodTestAggregateType<T>>

    /**
     * Group by BloodTest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloodTestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BloodTestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BloodTestGroupByArgs['orderBy'] }
        : { orderBy?: BloodTestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BloodTestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBloodTestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BloodTest model
   */
  readonly fields: BloodTestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BloodTest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BloodTestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BloodTest model
   */
  interface BloodTestFieldRefs {
    readonly id: FieldRef<"BloodTest", 'Int'>
    readonly hemoglobin: FieldRef<"BloodTest", 'Float'>
    readonly leukosit: FieldRef<"BloodTest", 'Float'>
    readonly trombosit: FieldRef<"BloodTest", 'Float'>
    readonly gulaDarah: FieldRef<"BloodTest", 'Float'>
    readonly kolesterol: FieldRef<"BloodTest", 'Float'>
    readonly tanggal: FieldRef<"BloodTest", 'DateTime'>
    readonly idUser: FieldRef<"BloodTest", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * BloodTest findUnique
   */
  export type BloodTestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodTest
     */
    select?: BloodTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloodTest
     */
    omit?: BloodTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloodTestInclude<ExtArgs> | null
    /**
     * Filter, which BloodTest to fetch.
     */
    where: BloodTestWhereUniqueInput
  }

  /**
   * BloodTest findUniqueOrThrow
   */
  export type BloodTestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodTest
     */
    select?: BloodTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloodTest
     */
    omit?: BloodTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloodTestInclude<ExtArgs> | null
    /**
     * Filter, which BloodTest to fetch.
     */
    where: BloodTestWhereUniqueInput
  }

  /**
   * BloodTest findFirst
   */
  export type BloodTestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodTest
     */
    select?: BloodTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloodTest
     */
    omit?: BloodTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloodTestInclude<ExtArgs> | null
    /**
     * Filter, which BloodTest to fetch.
     */
    where?: BloodTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BloodTests to fetch.
     */
    orderBy?: BloodTestOrderByWithRelationInput | BloodTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BloodTests.
     */
    cursor?: BloodTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BloodTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BloodTests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BloodTests.
     */
    distinct?: BloodTestScalarFieldEnum | BloodTestScalarFieldEnum[]
  }

  /**
   * BloodTest findFirstOrThrow
   */
  export type BloodTestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodTest
     */
    select?: BloodTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloodTest
     */
    omit?: BloodTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloodTestInclude<ExtArgs> | null
    /**
     * Filter, which BloodTest to fetch.
     */
    where?: BloodTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BloodTests to fetch.
     */
    orderBy?: BloodTestOrderByWithRelationInput | BloodTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BloodTests.
     */
    cursor?: BloodTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BloodTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BloodTests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BloodTests.
     */
    distinct?: BloodTestScalarFieldEnum | BloodTestScalarFieldEnum[]
  }

  /**
   * BloodTest findMany
   */
  export type BloodTestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodTest
     */
    select?: BloodTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloodTest
     */
    omit?: BloodTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloodTestInclude<ExtArgs> | null
    /**
     * Filter, which BloodTests to fetch.
     */
    where?: BloodTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BloodTests to fetch.
     */
    orderBy?: BloodTestOrderByWithRelationInput | BloodTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BloodTests.
     */
    cursor?: BloodTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BloodTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BloodTests.
     */
    skip?: number
    distinct?: BloodTestScalarFieldEnum | BloodTestScalarFieldEnum[]
  }

  /**
   * BloodTest create
   */
  export type BloodTestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodTest
     */
    select?: BloodTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloodTest
     */
    omit?: BloodTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloodTestInclude<ExtArgs> | null
    /**
     * The data needed to create a BloodTest.
     */
    data: XOR<BloodTestCreateInput, BloodTestUncheckedCreateInput>
  }

  /**
   * BloodTest createMany
   */
  export type BloodTestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BloodTests.
     */
    data: BloodTestCreateManyInput | BloodTestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BloodTest createManyAndReturn
   */
  export type BloodTestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodTest
     */
    select?: BloodTestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BloodTest
     */
    omit?: BloodTestOmit<ExtArgs> | null
    /**
     * The data used to create many BloodTests.
     */
    data: BloodTestCreateManyInput | BloodTestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloodTestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BloodTest update
   */
  export type BloodTestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodTest
     */
    select?: BloodTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloodTest
     */
    omit?: BloodTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloodTestInclude<ExtArgs> | null
    /**
     * The data needed to update a BloodTest.
     */
    data: XOR<BloodTestUpdateInput, BloodTestUncheckedUpdateInput>
    /**
     * Choose, which BloodTest to update.
     */
    where: BloodTestWhereUniqueInput
  }

  /**
   * BloodTest updateMany
   */
  export type BloodTestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BloodTests.
     */
    data: XOR<BloodTestUpdateManyMutationInput, BloodTestUncheckedUpdateManyInput>
    /**
     * Filter which BloodTests to update
     */
    where?: BloodTestWhereInput
    /**
     * Limit how many BloodTests to update.
     */
    limit?: number
  }

  /**
   * BloodTest updateManyAndReturn
   */
  export type BloodTestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodTest
     */
    select?: BloodTestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BloodTest
     */
    omit?: BloodTestOmit<ExtArgs> | null
    /**
     * The data used to update BloodTests.
     */
    data: XOR<BloodTestUpdateManyMutationInput, BloodTestUncheckedUpdateManyInput>
    /**
     * Filter which BloodTests to update
     */
    where?: BloodTestWhereInput
    /**
     * Limit how many BloodTests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloodTestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BloodTest upsert
   */
  export type BloodTestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodTest
     */
    select?: BloodTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloodTest
     */
    omit?: BloodTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloodTestInclude<ExtArgs> | null
    /**
     * The filter to search for the BloodTest to update in case it exists.
     */
    where: BloodTestWhereUniqueInput
    /**
     * In case the BloodTest found by the `where` argument doesn't exist, create a new BloodTest with this data.
     */
    create: XOR<BloodTestCreateInput, BloodTestUncheckedCreateInput>
    /**
     * In case the BloodTest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BloodTestUpdateInput, BloodTestUncheckedUpdateInput>
  }

  /**
   * BloodTest delete
   */
  export type BloodTestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodTest
     */
    select?: BloodTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloodTest
     */
    omit?: BloodTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloodTestInclude<ExtArgs> | null
    /**
     * Filter which BloodTest to delete.
     */
    where: BloodTestWhereUniqueInput
  }

  /**
   * BloodTest deleteMany
   */
  export type BloodTestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BloodTests to delete
     */
    where?: BloodTestWhereInput
    /**
     * Limit how many BloodTests to delete.
     */
    limit?: number
  }

  /**
   * BloodTest without action
   */
  export type BloodTestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodTest
     */
    select?: BloodTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloodTest
     */
    omit?: BloodTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloodTestInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    name: 'name',
    birthdate: 'birthdate',
    address: 'address',
    profession: 'profession',
    religion: 'religion',
    avatar: 'avatar'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DoctorScalarFieldEnum: {
    id: 'id',
    about: 'about',
    name: 'name',
    specialist: 'specialist',
    education: 'education',
    experience: 'experience'
  };

  export type DoctorScalarFieldEnum = (typeof DoctorScalarFieldEnum)[keyof typeof DoctorScalarFieldEnum]


  export const AppointmentScalarFieldEnum: {
    id: 'id',
    date: 'date',
    purpose: 'purpose',
    information: 'information',
    location: 'location',
    status: 'status',
    idUser: 'idUser',
    idDokter: 'idDokter'
  };

  export type AppointmentScalarFieldEnum = (typeof AppointmentScalarFieldEnum)[keyof typeof AppointmentScalarFieldEnum]


  export const HistoricalDataScalarFieldEnum: {
    id: 'id',
    parameter: 'parameter',
    value: 'value',
    tgl: 'tgl',
    idUser: 'idUser'
  };

  export type HistoricalDataScalarFieldEnum = (typeof HistoricalDataScalarFieldEnum)[keyof typeof HistoricalDataScalarFieldEnum]


  export const PharmacyScalarFieldEnum: {
    id: 'id',
    namaObat: 'namaObat',
    keteranganPenggunaan: 'keteranganPenggunaan',
    dosis: 'dosis',
    tanggalMulaiObat: 'tanggalMulaiObat',
    tanggalSelesaiObat: 'tanggalSelesaiObat',
    idUser: 'idUser'
  };

  export type PharmacyScalarFieldEnum = (typeof PharmacyScalarFieldEnum)[keyof typeof PharmacyScalarFieldEnum]


  export const MriTestScalarFieldEnum: {
    id: 'id',
    urlPhoto: 'urlPhoto',
    keterangan: 'keterangan',
    tanggal: 'tanggal',
    idUser: 'idUser'
  };

  export type MriTestScalarFieldEnum = (typeof MriTestScalarFieldEnum)[keyof typeof MriTestScalarFieldEnum]


  export const UrineTestScalarFieldEnum: {
    id: 'id',
    warna: 'warna',
    bau: 'bau',
    ph: 'ph',
    glukosa: 'glukosa',
    protein: 'protein',
    tanggal: 'tanggal',
    idUser: 'idUser'
  };

  export type UrineTestScalarFieldEnum = (typeof UrineTestScalarFieldEnum)[keyof typeof UrineTestScalarFieldEnum]


  export const BloodTestScalarFieldEnum: {
    id: 'id',
    hemoglobin: 'hemoglobin',
    leukosit: 'leukosit',
    trombosit: 'trombosit',
    gulaDarah: 'gulaDarah',
    kolesterol: 'kolesterol',
    tanggal: 'tanggal',
    idUser: 'idUser'
  };

  export type BloodTestScalarFieldEnum = (typeof BloodTestScalarFieldEnum)[keyof typeof BloodTestScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'AppointmentStatus'
   */
  export type EnumAppointmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppointmentStatus'>
    


  /**
   * Reference to a field of type 'AppointmentStatus[]'
   */
  export type ListEnumAppointmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppointmentStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    birthdate?: DateTimeFilter<"User"> | Date | string
    address?: StringFilter<"User"> | string
    profession?: StringFilter<"User"> | string
    religion?: StringFilter<"User"> | string
    avatar?: StringFilter<"User"> | string
    appointments?: AppointmentListRelationFilter
    historicals?: HistoricalDataListRelationFilter
    pharmacies?: PharmacyListRelationFilter
    mriTests?: MriTestListRelationFilter
    urineTests?: UrineTestListRelationFilter
    bloodTests?: BloodTestListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    birthdate?: SortOrder
    address?: SortOrder
    profession?: SortOrder
    religion?: SortOrder
    avatar?: SortOrder
    appointments?: AppointmentOrderByRelationAggregateInput
    historicals?: HistoricalDataOrderByRelationAggregateInput
    pharmacies?: PharmacyOrderByRelationAggregateInput
    mriTests?: MriTestOrderByRelationAggregateInput
    urineTests?: UrineTestOrderByRelationAggregateInput
    bloodTests?: BloodTestOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    birthdate?: DateTimeFilter<"User"> | Date | string
    address?: StringFilter<"User"> | string
    profession?: StringFilter<"User"> | string
    religion?: StringFilter<"User"> | string
    avatar?: StringFilter<"User"> | string
    appointments?: AppointmentListRelationFilter
    historicals?: HistoricalDataListRelationFilter
    pharmacies?: PharmacyListRelationFilter
    mriTests?: MriTestListRelationFilter
    urineTests?: UrineTestListRelationFilter
    bloodTests?: BloodTestListRelationFilter
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    birthdate?: SortOrder
    address?: SortOrder
    profession?: SortOrder
    religion?: SortOrder
    avatar?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    birthdate?: DateTimeWithAggregatesFilter<"User"> | Date | string
    address?: StringWithAggregatesFilter<"User"> | string
    profession?: StringWithAggregatesFilter<"User"> | string
    religion?: StringWithAggregatesFilter<"User"> | string
    avatar?: StringWithAggregatesFilter<"User"> | string
  }

  export type DoctorWhereInput = {
    AND?: DoctorWhereInput | DoctorWhereInput[]
    OR?: DoctorWhereInput[]
    NOT?: DoctorWhereInput | DoctorWhereInput[]
    id?: IntFilter<"Doctor"> | number
    about?: StringFilter<"Doctor"> | string
    name?: StringFilter<"Doctor"> | string
    specialist?: StringFilter<"Doctor"> | string
    education?: StringFilter<"Doctor"> | string
    experience?: StringFilter<"Doctor"> | string
    appointments?: AppointmentListRelationFilter
  }

  export type DoctorOrderByWithRelationInput = {
    id?: SortOrder
    about?: SortOrder
    name?: SortOrder
    specialist?: SortOrder
    education?: SortOrder
    experience?: SortOrder
    appointments?: AppointmentOrderByRelationAggregateInput
  }

  export type DoctorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DoctorWhereInput | DoctorWhereInput[]
    OR?: DoctorWhereInput[]
    NOT?: DoctorWhereInput | DoctorWhereInput[]
    about?: StringFilter<"Doctor"> | string
    name?: StringFilter<"Doctor"> | string
    specialist?: StringFilter<"Doctor"> | string
    education?: StringFilter<"Doctor"> | string
    experience?: StringFilter<"Doctor"> | string
    appointments?: AppointmentListRelationFilter
  }, "id">

  export type DoctorOrderByWithAggregationInput = {
    id?: SortOrder
    about?: SortOrder
    name?: SortOrder
    specialist?: SortOrder
    education?: SortOrder
    experience?: SortOrder
    _count?: DoctorCountOrderByAggregateInput
    _avg?: DoctorAvgOrderByAggregateInput
    _max?: DoctorMaxOrderByAggregateInput
    _min?: DoctorMinOrderByAggregateInput
    _sum?: DoctorSumOrderByAggregateInput
  }

  export type DoctorScalarWhereWithAggregatesInput = {
    AND?: DoctorScalarWhereWithAggregatesInput | DoctorScalarWhereWithAggregatesInput[]
    OR?: DoctorScalarWhereWithAggregatesInput[]
    NOT?: DoctorScalarWhereWithAggregatesInput | DoctorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Doctor"> | number
    about?: StringWithAggregatesFilter<"Doctor"> | string
    name?: StringWithAggregatesFilter<"Doctor"> | string
    specialist?: StringWithAggregatesFilter<"Doctor"> | string
    education?: StringWithAggregatesFilter<"Doctor"> | string
    experience?: StringWithAggregatesFilter<"Doctor"> | string
  }

  export type AppointmentWhereInput = {
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    id?: IntFilter<"Appointment"> | number
    date?: DateTimeFilter<"Appointment"> | Date | string
    purpose?: StringFilter<"Appointment"> | string
    information?: StringFilter<"Appointment"> | string
    location?: StringFilter<"Appointment"> | string
    status?: EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus
    idUser?: IntFilter<"Appointment"> | number
    idDokter?: IntFilter<"Appointment"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    doctor?: XOR<DoctorScalarRelationFilter, DoctorWhereInput>
  }

  export type AppointmentOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    purpose?: SortOrder
    information?: SortOrder
    location?: SortOrder
    status?: SortOrder
    idUser?: SortOrder
    idDokter?: SortOrder
    user?: UserOrderByWithRelationInput
    doctor?: DoctorOrderByWithRelationInput
  }

  export type AppointmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    date?: DateTimeFilter<"Appointment"> | Date | string
    purpose?: StringFilter<"Appointment"> | string
    information?: StringFilter<"Appointment"> | string
    location?: StringFilter<"Appointment"> | string
    status?: EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus
    idUser?: IntFilter<"Appointment"> | number
    idDokter?: IntFilter<"Appointment"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    doctor?: XOR<DoctorScalarRelationFilter, DoctorWhereInput>
  }, "id">

  export type AppointmentOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    purpose?: SortOrder
    information?: SortOrder
    location?: SortOrder
    status?: SortOrder
    idUser?: SortOrder
    idDokter?: SortOrder
    _count?: AppointmentCountOrderByAggregateInput
    _avg?: AppointmentAvgOrderByAggregateInput
    _max?: AppointmentMaxOrderByAggregateInput
    _min?: AppointmentMinOrderByAggregateInput
    _sum?: AppointmentSumOrderByAggregateInput
  }

  export type AppointmentScalarWhereWithAggregatesInput = {
    AND?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    OR?: AppointmentScalarWhereWithAggregatesInput[]
    NOT?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Appointment"> | number
    date?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    purpose?: StringWithAggregatesFilter<"Appointment"> | string
    information?: StringWithAggregatesFilter<"Appointment"> | string
    location?: StringWithAggregatesFilter<"Appointment"> | string
    status?: EnumAppointmentStatusWithAggregatesFilter<"Appointment"> | $Enums.AppointmentStatus
    idUser?: IntWithAggregatesFilter<"Appointment"> | number
    idDokter?: IntWithAggregatesFilter<"Appointment"> | number
  }

  export type HistoricalDataWhereInput = {
    AND?: HistoricalDataWhereInput | HistoricalDataWhereInput[]
    OR?: HistoricalDataWhereInput[]
    NOT?: HistoricalDataWhereInput | HistoricalDataWhereInput[]
    id?: IntFilter<"HistoricalData"> | number
    parameter?: StringFilter<"HistoricalData"> | string
    value?: StringFilter<"HistoricalData"> | string
    tgl?: DateTimeFilter<"HistoricalData"> | Date | string
    idUser?: IntFilter<"HistoricalData"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type HistoricalDataOrderByWithRelationInput = {
    id?: SortOrder
    parameter?: SortOrder
    value?: SortOrder
    tgl?: SortOrder
    idUser?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type HistoricalDataWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HistoricalDataWhereInput | HistoricalDataWhereInput[]
    OR?: HistoricalDataWhereInput[]
    NOT?: HistoricalDataWhereInput | HistoricalDataWhereInput[]
    parameter?: StringFilter<"HistoricalData"> | string
    value?: StringFilter<"HistoricalData"> | string
    tgl?: DateTimeFilter<"HistoricalData"> | Date | string
    idUser?: IntFilter<"HistoricalData"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type HistoricalDataOrderByWithAggregationInput = {
    id?: SortOrder
    parameter?: SortOrder
    value?: SortOrder
    tgl?: SortOrder
    idUser?: SortOrder
    _count?: HistoricalDataCountOrderByAggregateInput
    _avg?: HistoricalDataAvgOrderByAggregateInput
    _max?: HistoricalDataMaxOrderByAggregateInput
    _min?: HistoricalDataMinOrderByAggregateInput
    _sum?: HistoricalDataSumOrderByAggregateInput
  }

  export type HistoricalDataScalarWhereWithAggregatesInput = {
    AND?: HistoricalDataScalarWhereWithAggregatesInput | HistoricalDataScalarWhereWithAggregatesInput[]
    OR?: HistoricalDataScalarWhereWithAggregatesInput[]
    NOT?: HistoricalDataScalarWhereWithAggregatesInput | HistoricalDataScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"HistoricalData"> | number
    parameter?: StringWithAggregatesFilter<"HistoricalData"> | string
    value?: StringWithAggregatesFilter<"HistoricalData"> | string
    tgl?: DateTimeWithAggregatesFilter<"HistoricalData"> | Date | string
    idUser?: IntWithAggregatesFilter<"HistoricalData"> | number
  }

  export type PharmacyWhereInput = {
    AND?: PharmacyWhereInput | PharmacyWhereInput[]
    OR?: PharmacyWhereInput[]
    NOT?: PharmacyWhereInput | PharmacyWhereInput[]
    id?: IntFilter<"Pharmacy"> | number
    namaObat?: StringFilter<"Pharmacy"> | string
    keteranganPenggunaan?: StringFilter<"Pharmacy"> | string
    dosis?: StringFilter<"Pharmacy"> | string
    tanggalMulaiObat?: DateTimeFilter<"Pharmacy"> | Date | string
    tanggalSelesaiObat?: DateTimeFilter<"Pharmacy"> | Date | string
    idUser?: IntFilter<"Pharmacy"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PharmacyOrderByWithRelationInput = {
    id?: SortOrder
    namaObat?: SortOrder
    keteranganPenggunaan?: SortOrder
    dosis?: SortOrder
    tanggalMulaiObat?: SortOrder
    tanggalSelesaiObat?: SortOrder
    idUser?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PharmacyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PharmacyWhereInput | PharmacyWhereInput[]
    OR?: PharmacyWhereInput[]
    NOT?: PharmacyWhereInput | PharmacyWhereInput[]
    namaObat?: StringFilter<"Pharmacy"> | string
    keteranganPenggunaan?: StringFilter<"Pharmacy"> | string
    dosis?: StringFilter<"Pharmacy"> | string
    tanggalMulaiObat?: DateTimeFilter<"Pharmacy"> | Date | string
    tanggalSelesaiObat?: DateTimeFilter<"Pharmacy"> | Date | string
    idUser?: IntFilter<"Pharmacy"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PharmacyOrderByWithAggregationInput = {
    id?: SortOrder
    namaObat?: SortOrder
    keteranganPenggunaan?: SortOrder
    dosis?: SortOrder
    tanggalMulaiObat?: SortOrder
    tanggalSelesaiObat?: SortOrder
    idUser?: SortOrder
    _count?: PharmacyCountOrderByAggregateInput
    _avg?: PharmacyAvgOrderByAggregateInput
    _max?: PharmacyMaxOrderByAggregateInput
    _min?: PharmacyMinOrderByAggregateInput
    _sum?: PharmacySumOrderByAggregateInput
  }

  export type PharmacyScalarWhereWithAggregatesInput = {
    AND?: PharmacyScalarWhereWithAggregatesInput | PharmacyScalarWhereWithAggregatesInput[]
    OR?: PharmacyScalarWhereWithAggregatesInput[]
    NOT?: PharmacyScalarWhereWithAggregatesInput | PharmacyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pharmacy"> | number
    namaObat?: StringWithAggregatesFilter<"Pharmacy"> | string
    keteranganPenggunaan?: StringWithAggregatesFilter<"Pharmacy"> | string
    dosis?: StringWithAggregatesFilter<"Pharmacy"> | string
    tanggalMulaiObat?: DateTimeWithAggregatesFilter<"Pharmacy"> | Date | string
    tanggalSelesaiObat?: DateTimeWithAggregatesFilter<"Pharmacy"> | Date | string
    idUser?: IntWithAggregatesFilter<"Pharmacy"> | number
  }

  export type MriTestWhereInput = {
    AND?: MriTestWhereInput | MriTestWhereInput[]
    OR?: MriTestWhereInput[]
    NOT?: MriTestWhereInput | MriTestWhereInput[]
    id?: IntFilter<"MriTest"> | number
    urlPhoto?: StringFilter<"MriTest"> | string
    keterangan?: StringFilter<"MriTest"> | string
    tanggal?: DateTimeFilter<"MriTest"> | Date | string
    idUser?: IntFilter<"MriTest"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MriTestOrderByWithRelationInput = {
    id?: SortOrder
    urlPhoto?: SortOrder
    keterangan?: SortOrder
    tanggal?: SortOrder
    idUser?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type MriTestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MriTestWhereInput | MriTestWhereInput[]
    OR?: MriTestWhereInput[]
    NOT?: MriTestWhereInput | MriTestWhereInput[]
    urlPhoto?: StringFilter<"MriTest"> | string
    keterangan?: StringFilter<"MriTest"> | string
    tanggal?: DateTimeFilter<"MriTest"> | Date | string
    idUser?: IntFilter<"MriTest"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MriTestOrderByWithAggregationInput = {
    id?: SortOrder
    urlPhoto?: SortOrder
    keterangan?: SortOrder
    tanggal?: SortOrder
    idUser?: SortOrder
    _count?: MriTestCountOrderByAggregateInput
    _avg?: MriTestAvgOrderByAggregateInput
    _max?: MriTestMaxOrderByAggregateInput
    _min?: MriTestMinOrderByAggregateInput
    _sum?: MriTestSumOrderByAggregateInput
  }

  export type MriTestScalarWhereWithAggregatesInput = {
    AND?: MriTestScalarWhereWithAggregatesInput | MriTestScalarWhereWithAggregatesInput[]
    OR?: MriTestScalarWhereWithAggregatesInput[]
    NOT?: MriTestScalarWhereWithAggregatesInput | MriTestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MriTest"> | number
    urlPhoto?: StringWithAggregatesFilter<"MriTest"> | string
    keterangan?: StringWithAggregatesFilter<"MriTest"> | string
    tanggal?: DateTimeWithAggregatesFilter<"MriTest"> | Date | string
    idUser?: IntWithAggregatesFilter<"MriTest"> | number
  }

  export type UrineTestWhereInput = {
    AND?: UrineTestWhereInput | UrineTestWhereInput[]
    OR?: UrineTestWhereInput[]
    NOT?: UrineTestWhereInput | UrineTestWhereInput[]
    id?: IntFilter<"UrineTest"> | number
    warna?: StringFilter<"UrineTest"> | string
    bau?: StringFilter<"UrineTest"> | string
    ph?: FloatFilter<"UrineTest"> | number
    glukosa?: StringFilter<"UrineTest"> | string
    protein?: StringFilter<"UrineTest"> | string
    tanggal?: DateTimeFilter<"UrineTest"> | Date | string
    idUser?: IntFilter<"UrineTest"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UrineTestOrderByWithRelationInput = {
    id?: SortOrder
    warna?: SortOrder
    bau?: SortOrder
    ph?: SortOrder
    glukosa?: SortOrder
    protein?: SortOrder
    tanggal?: SortOrder
    idUser?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UrineTestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UrineTestWhereInput | UrineTestWhereInput[]
    OR?: UrineTestWhereInput[]
    NOT?: UrineTestWhereInput | UrineTestWhereInput[]
    warna?: StringFilter<"UrineTest"> | string
    bau?: StringFilter<"UrineTest"> | string
    ph?: FloatFilter<"UrineTest"> | number
    glukosa?: StringFilter<"UrineTest"> | string
    protein?: StringFilter<"UrineTest"> | string
    tanggal?: DateTimeFilter<"UrineTest"> | Date | string
    idUser?: IntFilter<"UrineTest"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type UrineTestOrderByWithAggregationInput = {
    id?: SortOrder
    warna?: SortOrder
    bau?: SortOrder
    ph?: SortOrder
    glukosa?: SortOrder
    protein?: SortOrder
    tanggal?: SortOrder
    idUser?: SortOrder
    _count?: UrineTestCountOrderByAggregateInput
    _avg?: UrineTestAvgOrderByAggregateInput
    _max?: UrineTestMaxOrderByAggregateInput
    _min?: UrineTestMinOrderByAggregateInput
    _sum?: UrineTestSumOrderByAggregateInput
  }

  export type UrineTestScalarWhereWithAggregatesInput = {
    AND?: UrineTestScalarWhereWithAggregatesInput | UrineTestScalarWhereWithAggregatesInput[]
    OR?: UrineTestScalarWhereWithAggregatesInput[]
    NOT?: UrineTestScalarWhereWithAggregatesInput | UrineTestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UrineTest"> | number
    warna?: StringWithAggregatesFilter<"UrineTest"> | string
    bau?: StringWithAggregatesFilter<"UrineTest"> | string
    ph?: FloatWithAggregatesFilter<"UrineTest"> | number
    glukosa?: StringWithAggregatesFilter<"UrineTest"> | string
    protein?: StringWithAggregatesFilter<"UrineTest"> | string
    tanggal?: DateTimeWithAggregatesFilter<"UrineTest"> | Date | string
    idUser?: IntWithAggregatesFilter<"UrineTest"> | number
  }

  export type BloodTestWhereInput = {
    AND?: BloodTestWhereInput | BloodTestWhereInput[]
    OR?: BloodTestWhereInput[]
    NOT?: BloodTestWhereInput | BloodTestWhereInput[]
    id?: IntFilter<"BloodTest"> | number
    hemoglobin?: FloatFilter<"BloodTest"> | number
    leukosit?: FloatFilter<"BloodTest"> | number
    trombosit?: FloatFilter<"BloodTest"> | number
    gulaDarah?: FloatFilter<"BloodTest"> | number
    kolesterol?: FloatFilter<"BloodTest"> | number
    tanggal?: DateTimeFilter<"BloodTest"> | Date | string
    idUser?: IntFilter<"BloodTest"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type BloodTestOrderByWithRelationInput = {
    id?: SortOrder
    hemoglobin?: SortOrder
    leukosit?: SortOrder
    trombosit?: SortOrder
    gulaDarah?: SortOrder
    kolesterol?: SortOrder
    tanggal?: SortOrder
    idUser?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type BloodTestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BloodTestWhereInput | BloodTestWhereInput[]
    OR?: BloodTestWhereInput[]
    NOT?: BloodTestWhereInput | BloodTestWhereInput[]
    hemoglobin?: FloatFilter<"BloodTest"> | number
    leukosit?: FloatFilter<"BloodTest"> | number
    trombosit?: FloatFilter<"BloodTest"> | number
    gulaDarah?: FloatFilter<"BloodTest"> | number
    kolesterol?: FloatFilter<"BloodTest"> | number
    tanggal?: DateTimeFilter<"BloodTest"> | Date | string
    idUser?: IntFilter<"BloodTest"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type BloodTestOrderByWithAggregationInput = {
    id?: SortOrder
    hemoglobin?: SortOrder
    leukosit?: SortOrder
    trombosit?: SortOrder
    gulaDarah?: SortOrder
    kolesterol?: SortOrder
    tanggal?: SortOrder
    idUser?: SortOrder
    _count?: BloodTestCountOrderByAggregateInput
    _avg?: BloodTestAvgOrderByAggregateInput
    _max?: BloodTestMaxOrderByAggregateInput
    _min?: BloodTestMinOrderByAggregateInput
    _sum?: BloodTestSumOrderByAggregateInput
  }

  export type BloodTestScalarWhereWithAggregatesInput = {
    AND?: BloodTestScalarWhereWithAggregatesInput | BloodTestScalarWhereWithAggregatesInput[]
    OR?: BloodTestScalarWhereWithAggregatesInput[]
    NOT?: BloodTestScalarWhereWithAggregatesInput | BloodTestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BloodTest"> | number
    hemoglobin?: FloatWithAggregatesFilter<"BloodTest"> | number
    leukosit?: FloatWithAggregatesFilter<"BloodTest"> | number
    trombosit?: FloatWithAggregatesFilter<"BloodTest"> | number
    gulaDarah?: FloatWithAggregatesFilter<"BloodTest"> | number
    kolesterol?: FloatWithAggregatesFilter<"BloodTest"> | number
    tanggal?: DateTimeWithAggregatesFilter<"BloodTest"> | Date | string
    idUser?: IntWithAggregatesFilter<"BloodTest"> | number
  }

  export type UserCreateInput = {
    username: string
    password: string
    name: string
    birthdate: Date | string
    address: string
    profession: string
    religion: string
    avatar: string
    appointments?: AppointmentCreateNestedManyWithoutUserInput
    historicals?: HistoricalDataCreateNestedManyWithoutUserInput
    pharmacies?: PharmacyCreateNestedManyWithoutUserInput
    mriTests?: MriTestCreateNestedManyWithoutUserInput
    urineTests?: UrineTestCreateNestedManyWithoutUserInput
    bloodTests?: BloodTestCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    password: string
    name: string
    birthdate: Date | string
    address: string
    profession: string
    religion: string
    avatar: string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutUserInput
    historicals?: HistoricalDataUncheckedCreateNestedManyWithoutUserInput
    pharmacies?: PharmacyUncheckedCreateNestedManyWithoutUserInput
    mriTests?: MriTestUncheckedCreateNestedManyWithoutUserInput
    urineTests?: UrineTestUncheckedCreateNestedManyWithoutUserInput
    bloodTests?: BloodTestUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    profession?: StringFieldUpdateOperationsInput | string
    religion?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    appointments?: AppointmentUpdateManyWithoutUserNestedInput
    historicals?: HistoricalDataUpdateManyWithoutUserNestedInput
    pharmacies?: PharmacyUpdateManyWithoutUserNestedInput
    mriTests?: MriTestUpdateManyWithoutUserNestedInput
    urineTests?: UrineTestUpdateManyWithoutUserNestedInput
    bloodTests?: BloodTestUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    profession?: StringFieldUpdateOperationsInput | string
    religion?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    appointments?: AppointmentUncheckedUpdateManyWithoutUserNestedInput
    historicals?: HistoricalDataUncheckedUpdateManyWithoutUserNestedInput
    pharmacies?: PharmacyUncheckedUpdateManyWithoutUserNestedInput
    mriTests?: MriTestUncheckedUpdateManyWithoutUserNestedInput
    urineTests?: UrineTestUncheckedUpdateManyWithoutUserNestedInput
    bloodTests?: BloodTestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    password: string
    name: string
    birthdate: Date | string
    address: string
    profession: string
    religion: string
    avatar: string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    profession?: StringFieldUpdateOperationsInput | string
    religion?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    profession?: StringFieldUpdateOperationsInput | string
    religion?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
  }

  export type DoctorCreateInput = {
    about: string
    name: string
    specialist: string
    education: string
    experience: string
    appointments?: AppointmentCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUncheckedCreateInput = {
    id?: number
    about: string
    name: string
    specialist: string
    education: string
    experience: string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUpdateInput = {
    about?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    specialist?: StringFieldUpdateOperationsInput | string
    education?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    appointments?: AppointmentUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    about?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    specialist?: StringFieldUpdateOperationsInput | string
    education?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    appointments?: AppointmentUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorCreateManyInput = {
    id?: number
    about: string
    name: string
    specialist: string
    education: string
    experience: string
  }

  export type DoctorUpdateManyMutationInput = {
    about?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    specialist?: StringFieldUpdateOperationsInput | string
    education?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
  }

  export type DoctorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    about?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    specialist?: StringFieldUpdateOperationsInput | string
    education?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
  }

  export type AppointmentCreateInput = {
    date: Date | string
    purpose: string
    information: string
    location: string
    status: $Enums.AppointmentStatus
    user: UserCreateNestedOneWithoutAppointmentsInput
    doctor: DoctorCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentUncheckedCreateInput = {
    id?: number
    date: Date | string
    purpose: string
    information: string
    location: string
    status: $Enums.AppointmentStatus
    idUser: number
    idDokter: number
  }

  export type AppointmentUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    purpose?: StringFieldUpdateOperationsInput | string
    information?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    user?: UserUpdateOneRequiredWithoutAppointmentsNestedInput
    doctor?: DoctorUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type AppointmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    purpose?: StringFieldUpdateOperationsInput | string
    information?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    idUser?: IntFieldUpdateOperationsInput | number
    idDokter?: IntFieldUpdateOperationsInput | number
  }

  export type AppointmentCreateManyInput = {
    id?: number
    date: Date | string
    purpose: string
    information: string
    location: string
    status: $Enums.AppointmentStatus
    idUser: number
    idDokter: number
  }

  export type AppointmentUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    purpose?: StringFieldUpdateOperationsInput | string
    information?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
  }

  export type AppointmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    purpose?: StringFieldUpdateOperationsInput | string
    information?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    idUser?: IntFieldUpdateOperationsInput | number
    idDokter?: IntFieldUpdateOperationsInput | number
  }

  export type HistoricalDataCreateInput = {
    parameter: string
    value: string
    tgl: Date | string
    user: UserCreateNestedOneWithoutHistoricalsInput
  }

  export type HistoricalDataUncheckedCreateInput = {
    id?: number
    parameter: string
    value: string
    tgl: Date | string
    idUser: number
  }

  export type HistoricalDataUpdateInput = {
    parameter?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    tgl?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutHistoricalsNestedInput
  }

  export type HistoricalDataUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    parameter?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    tgl?: DateTimeFieldUpdateOperationsInput | Date | string
    idUser?: IntFieldUpdateOperationsInput | number
  }

  export type HistoricalDataCreateManyInput = {
    id?: number
    parameter: string
    value: string
    tgl: Date | string
    idUser: number
  }

  export type HistoricalDataUpdateManyMutationInput = {
    parameter?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    tgl?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoricalDataUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    parameter?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    tgl?: DateTimeFieldUpdateOperationsInput | Date | string
    idUser?: IntFieldUpdateOperationsInput | number
  }

  export type PharmacyCreateInput = {
    namaObat: string
    keteranganPenggunaan: string
    dosis: string
    tanggalMulaiObat: Date | string
    tanggalSelesaiObat: Date | string
    user: UserCreateNestedOneWithoutPharmaciesInput
  }

  export type PharmacyUncheckedCreateInput = {
    id?: number
    namaObat: string
    keteranganPenggunaan: string
    dosis: string
    tanggalMulaiObat: Date | string
    tanggalSelesaiObat: Date | string
    idUser: number
  }

  export type PharmacyUpdateInput = {
    namaObat?: StringFieldUpdateOperationsInput | string
    keteranganPenggunaan?: StringFieldUpdateOperationsInput | string
    dosis?: StringFieldUpdateOperationsInput | string
    tanggalMulaiObat?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalSelesaiObat?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPharmaciesNestedInput
  }

  export type PharmacyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    namaObat?: StringFieldUpdateOperationsInput | string
    keteranganPenggunaan?: StringFieldUpdateOperationsInput | string
    dosis?: StringFieldUpdateOperationsInput | string
    tanggalMulaiObat?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalSelesaiObat?: DateTimeFieldUpdateOperationsInput | Date | string
    idUser?: IntFieldUpdateOperationsInput | number
  }

  export type PharmacyCreateManyInput = {
    id?: number
    namaObat: string
    keteranganPenggunaan: string
    dosis: string
    tanggalMulaiObat: Date | string
    tanggalSelesaiObat: Date | string
    idUser: number
  }

  export type PharmacyUpdateManyMutationInput = {
    namaObat?: StringFieldUpdateOperationsInput | string
    keteranganPenggunaan?: StringFieldUpdateOperationsInput | string
    dosis?: StringFieldUpdateOperationsInput | string
    tanggalMulaiObat?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalSelesaiObat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PharmacyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    namaObat?: StringFieldUpdateOperationsInput | string
    keteranganPenggunaan?: StringFieldUpdateOperationsInput | string
    dosis?: StringFieldUpdateOperationsInput | string
    tanggalMulaiObat?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalSelesaiObat?: DateTimeFieldUpdateOperationsInput | Date | string
    idUser?: IntFieldUpdateOperationsInput | number
  }

  export type MriTestCreateInput = {
    urlPhoto: string
    keterangan: string
    tanggal: Date | string
    user: UserCreateNestedOneWithoutMriTestsInput
  }

  export type MriTestUncheckedCreateInput = {
    id?: number
    urlPhoto: string
    keterangan: string
    tanggal: Date | string
    idUser: number
  }

  export type MriTestUpdateInput = {
    urlPhoto?: StringFieldUpdateOperationsInput | string
    keterangan?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMriTestsNestedInput
  }

  export type MriTestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    urlPhoto?: StringFieldUpdateOperationsInput | string
    keterangan?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    idUser?: IntFieldUpdateOperationsInput | number
  }

  export type MriTestCreateManyInput = {
    id?: number
    urlPhoto: string
    keterangan: string
    tanggal: Date | string
    idUser: number
  }

  export type MriTestUpdateManyMutationInput = {
    urlPhoto?: StringFieldUpdateOperationsInput | string
    keterangan?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MriTestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    urlPhoto?: StringFieldUpdateOperationsInput | string
    keterangan?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    idUser?: IntFieldUpdateOperationsInput | number
  }

  export type UrineTestCreateInput = {
    warna: string
    bau: string
    ph: number
    glukosa: string
    protein: string
    tanggal: Date | string
    user: UserCreateNestedOneWithoutUrineTestsInput
  }

  export type UrineTestUncheckedCreateInput = {
    id?: number
    warna: string
    bau: string
    ph: number
    glukosa: string
    protein: string
    tanggal: Date | string
    idUser: number
  }

  export type UrineTestUpdateInput = {
    warna?: StringFieldUpdateOperationsInput | string
    bau?: StringFieldUpdateOperationsInput | string
    ph?: FloatFieldUpdateOperationsInput | number
    glukosa?: StringFieldUpdateOperationsInput | string
    protein?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUrineTestsNestedInput
  }

  export type UrineTestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    warna?: StringFieldUpdateOperationsInput | string
    bau?: StringFieldUpdateOperationsInput | string
    ph?: FloatFieldUpdateOperationsInput | number
    glukosa?: StringFieldUpdateOperationsInput | string
    protein?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    idUser?: IntFieldUpdateOperationsInput | number
  }

  export type UrineTestCreateManyInput = {
    id?: number
    warna: string
    bau: string
    ph: number
    glukosa: string
    protein: string
    tanggal: Date | string
    idUser: number
  }

  export type UrineTestUpdateManyMutationInput = {
    warna?: StringFieldUpdateOperationsInput | string
    bau?: StringFieldUpdateOperationsInput | string
    ph?: FloatFieldUpdateOperationsInput | number
    glukosa?: StringFieldUpdateOperationsInput | string
    protein?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UrineTestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    warna?: StringFieldUpdateOperationsInput | string
    bau?: StringFieldUpdateOperationsInput | string
    ph?: FloatFieldUpdateOperationsInput | number
    glukosa?: StringFieldUpdateOperationsInput | string
    protein?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    idUser?: IntFieldUpdateOperationsInput | number
  }

  export type BloodTestCreateInput = {
    hemoglobin: number
    leukosit: number
    trombosit: number
    gulaDarah: number
    kolesterol: number
    tanggal: Date | string
    user: UserCreateNestedOneWithoutBloodTestsInput
  }

  export type BloodTestUncheckedCreateInput = {
    id?: number
    hemoglobin: number
    leukosit: number
    trombosit: number
    gulaDarah: number
    kolesterol: number
    tanggal: Date | string
    idUser: number
  }

  export type BloodTestUpdateInput = {
    hemoglobin?: FloatFieldUpdateOperationsInput | number
    leukosit?: FloatFieldUpdateOperationsInput | number
    trombosit?: FloatFieldUpdateOperationsInput | number
    gulaDarah?: FloatFieldUpdateOperationsInput | number
    kolesterol?: FloatFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBloodTestsNestedInput
  }

  export type BloodTestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    hemoglobin?: FloatFieldUpdateOperationsInput | number
    leukosit?: FloatFieldUpdateOperationsInput | number
    trombosit?: FloatFieldUpdateOperationsInput | number
    gulaDarah?: FloatFieldUpdateOperationsInput | number
    kolesterol?: FloatFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    idUser?: IntFieldUpdateOperationsInput | number
  }

  export type BloodTestCreateManyInput = {
    id?: number
    hemoglobin: number
    leukosit: number
    trombosit: number
    gulaDarah: number
    kolesterol: number
    tanggal: Date | string
    idUser: number
  }

  export type BloodTestUpdateManyMutationInput = {
    hemoglobin?: FloatFieldUpdateOperationsInput | number
    leukosit?: FloatFieldUpdateOperationsInput | number
    trombosit?: FloatFieldUpdateOperationsInput | number
    gulaDarah?: FloatFieldUpdateOperationsInput | number
    kolesterol?: FloatFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BloodTestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    hemoglobin?: FloatFieldUpdateOperationsInput | number
    leukosit?: FloatFieldUpdateOperationsInput | number
    trombosit?: FloatFieldUpdateOperationsInput | number
    gulaDarah?: FloatFieldUpdateOperationsInput | number
    kolesterol?: FloatFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    idUser?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AppointmentListRelationFilter = {
    every?: AppointmentWhereInput
    some?: AppointmentWhereInput
    none?: AppointmentWhereInput
  }

  export type HistoricalDataListRelationFilter = {
    every?: HistoricalDataWhereInput
    some?: HistoricalDataWhereInput
    none?: HistoricalDataWhereInput
  }

  export type PharmacyListRelationFilter = {
    every?: PharmacyWhereInput
    some?: PharmacyWhereInput
    none?: PharmacyWhereInput
  }

  export type MriTestListRelationFilter = {
    every?: MriTestWhereInput
    some?: MriTestWhereInput
    none?: MriTestWhereInput
  }

  export type UrineTestListRelationFilter = {
    every?: UrineTestWhereInput
    some?: UrineTestWhereInput
    none?: UrineTestWhereInput
  }

  export type BloodTestListRelationFilter = {
    every?: BloodTestWhereInput
    some?: BloodTestWhereInput
    none?: BloodTestWhereInput
  }

  export type AppointmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HistoricalDataOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PharmacyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MriTestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UrineTestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BloodTestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    birthdate?: SortOrder
    address?: SortOrder
    profession?: SortOrder
    religion?: SortOrder
    avatar?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    birthdate?: SortOrder
    address?: SortOrder
    profession?: SortOrder
    religion?: SortOrder
    avatar?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    birthdate?: SortOrder
    address?: SortOrder
    profession?: SortOrder
    religion?: SortOrder
    avatar?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DoctorCountOrderByAggregateInput = {
    id?: SortOrder
    about?: SortOrder
    name?: SortOrder
    specialist?: SortOrder
    education?: SortOrder
    experience?: SortOrder
  }

  export type DoctorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DoctorMaxOrderByAggregateInput = {
    id?: SortOrder
    about?: SortOrder
    name?: SortOrder
    specialist?: SortOrder
    education?: SortOrder
    experience?: SortOrder
  }

  export type DoctorMinOrderByAggregateInput = {
    id?: SortOrder
    about?: SortOrder
    name?: SortOrder
    specialist?: SortOrder
    education?: SortOrder
    experience?: SortOrder
  }

  export type DoctorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumAppointmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusFilter<$PrismaModel> | $Enums.AppointmentStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type DoctorScalarRelationFilter = {
    is?: DoctorWhereInput
    isNot?: DoctorWhereInput
  }

  export type AppointmentCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    purpose?: SortOrder
    information?: SortOrder
    location?: SortOrder
    status?: SortOrder
    idUser?: SortOrder
    idDokter?: SortOrder
  }

  export type AppointmentAvgOrderByAggregateInput = {
    id?: SortOrder
    idUser?: SortOrder
    idDokter?: SortOrder
  }

  export type AppointmentMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    purpose?: SortOrder
    information?: SortOrder
    location?: SortOrder
    status?: SortOrder
    idUser?: SortOrder
    idDokter?: SortOrder
  }

  export type AppointmentMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    purpose?: SortOrder
    information?: SortOrder
    location?: SortOrder
    status?: SortOrder
    idUser?: SortOrder
    idDokter?: SortOrder
  }

  export type AppointmentSumOrderByAggregateInput = {
    id?: SortOrder
    idUser?: SortOrder
    idDokter?: SortOrder
  }

  export type EnumAppointmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AppointmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAppointmentStatusFilter<$PrismaModel>
    _max?: NestedEnumAppointmentStatusFilter<$PrismaModel>
  }

  export type HistoricalDataCountOrderByAggregateInput = {
    id?: SortOrder
    parameter?: SortOrder
    value?: SortOrder
    tgl?: SortOrder
    idUser?: SortOrder
  }

  export type HistoricalDataAvgOrderByAggregateInput = {
    id?: SortOrder
    idUser?: SortOrder
  }

  export type HistoricalDataMaxOrderByAggregateInput = {
    id?: SortOrder
    parameter?: SortOrder
    value?: SortOrder
    tgl?: SortOrder
    idUser?: SortOrder
  }

  export type HistoricalDataMinOrderByAggregateInput = {
    id?: SortOrder
    parameter?: SortOrder
    value?: SortOrder
    tgl?: SortOrder
    idUser?: SortOrder
  }

  export type HistoricalDataSumOrderByAggregateInput = {
    id?: SortOrder
    idUser?: SortOrder
  }

  export type PharmacyCountOrderByAggregateInput = {
    id?: SortOrder
    namaObat?: SortOrder
    keteranganPenggunaan?: SortOrder
    dosis?: SortOrder
    tanggalMulaiObat?: SortOrder
    tanggalSelesaiObat?: SortOrder
    idUser?: SortOrder
  }

  export type PharmacyAvgOrderByAggregateInput = {
    id?: SortOrder
    idUser?: SortOrder
  }

  export type PharmacyMaxOrderByAggregateInput = {
    id?: SortOrder
    namaObat?: SortOrder
    keteranganPenggunaan?: SortOrder
    dosis?: SortOrder
    tanggalMulaiObat?: SortOrder
    tanggalSelesaiObat?: SortOrder
    idUser?: SortOrder
  }

  export type PharmacyMinOrderByAggregateInput = {
    id?: SortOrder
    namaObat?: SortOrder
    keteranganPenggunaan?: SortOrder
    dosis?: SortOrder
    tanggalMulaiObat?: SortOrder
    tanggalSelesaiObat?: SortOrder
    idUser?: SortOrder
  }

  export type PharmacySumOrderByAggregateInput = {
    id?: SortOrder
    idUser?: SortOrder
  }

  export type MriTestCountOrderByAggregateInput = {
    id?: SortOrder
    urlPhoto?: SortOrder
    keterangan?: SortOrder
    tanggal?: SortOrder
    idUser?: SortOrder
  }

  export type MriTestAvgOrderByAggregateInput = {
    id?: SortOrder
    idUser?: SortOrder
  }

  export type MriTestMaxOrderByAggregateInput = {
    id?: SortOrder
    urlPhoto?: SortOrder
    keterangan?: SortOrder
    tanggal?: SortOrder
    idUser?: SortOrder
  }

  export type MriTestMinOrderByAggregateInput = {
    id?: SortOrder
    urlPhoto?: SortOrder
    keterangan?: SortOrder
    tanggal?: SortOrder
    idUser?: SortOrder
  }

  export type MriTestSumOrderByAggregateInput = {
    id?: SortOrder
    idUser?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UrineTestCountOrderByAggregateInput = {
    id?: SortOrder
    warna?: SortOrder
    bau?: SortOrder
    ph?: SortOrder
    glukosa?: SortOrder
    protein?: SortOrder
    tanggal?: SortOrder
    idUser?: SortOrder
  }

  export type UrineTestAvgOrderByAggregateInput = {
    id?: SortOrder
    ph?: SortOrder
    idUser?: SortOrder
  }

  export type UrineTestMaxOrderByAggregateInput = {
    id?: SortOrder
    warna?: SortOrder
    bau?: SortOrder
    ph?: SortOrder
    glukosa?: SortOrder
    protein?: SortOrder
    tanggal?: SortOrder
    idUser?: SortOrder
  }

  export type UrineTestMinOrderByAggregateInput = {
    id?: SortOrder
    warna?: SortOrder
    bau?: SortOrder
    ph?: SortOrder
    glukosa?: SortOrder
    protein?: SortOrder
    tanggal?: SortOrder
    idUser?: SortOrder
  }

  export type UrineTestSumOrderByAggregateInput = {
    id?: SortOrder
    ph?: SortOrder
    idUser?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BloodTestCountOrderByAggregateInput = {
    id?: SortOrder
    hemoglobin?: SortOrder
    leukosit?: SortOrder
    trombosit?: SortOrder
    gulaDarah?: SortOrder
    kolesterol?: SortOrder
    tanggal?: SortOrder
    idUser?: SortOrder
  }

  export type BloodTestAvgOrderByAggregateInput = {
    id?: SortOrder
    hemoglobin?: SortOrder
    leukosit?: SortOrder
    trombosit?: SortOrder
    gulaDarah?: SortOrder
    kolesterol?: SortOrder
    idUser?: SortOrder
  }

  export type BloodTestMaxOrderByAggregateInput = {
    id?: SortOrder
    hemoglobin?: SortOrder
    leukosit?: SortOrder
    trombosit?: SortOrder
    gulaDarah?: SortOrder
    kolesterol?: SortOrder
    tanggal?: SortOrder
    idUser?: SortOrder
  }

  export type BloodTestMinOrderByAggregateInput = {
    id?: SortOrder
    hemoglobin?: SortOrder
    leukosit?: SortOrder
    trombosit?: SortOrder
    gulaDarah?: SortOrder
    kolesterol?: SortOrder
    tanggal?: SortOrder
    idUser?: SortOrder
  }

  export type BloodTestSumOrderByAggregateInput = {
    id?: SortOrder
    hemoglobin?: SortOrder
    leukosit?: SortOrder
    trombosit?: SortOrder
    gulaDarah?: SortOrder
    kolesterol?: SortOrder
    idUser?: SortOrder
  }

  export type AppointmentCreateNestedManyWithoutUserInput = {
    create?: XOR<AppointmentCreateWithoutUserInput, AppointmentUncheckedCreateWithoutUserInput> | AppointmentCreateWithoutUserInput[] | AppointmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutUserInput | AppointmentCreateOrConnectWithoutUserInput[]
    createMany?: AppointmentCreateManyUserInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type HistoricalDataCreateNestedManyWithoutUserInput = {
    create?: XOR<HistoricalDataCreateWithoutUserInput, HistoricalDataUncheckedCreateWithoutUserInput> | HistoricalDataCreateWithoutUserInput[] | HistoricalDataUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HistoricalDataCreateOrConnectWithoutUserInput | HistoricalDataCreateOrConnectWithoutUserInput[]
    createMany?: HistoricalDataCreateManyUserInputEnvelope
    connect?: HistoricalDataWhereUniqueInput | HistoricalDataWhereUniqueInput[]
  }

  export type PharmacyCreateNestedManyWithoutUserInput = {
    create?: XOR<PharmacyCreateWithoutUserInput, PharmacyUncheckedCreateWithoutUserInput> | PharmacyCreateWithoutUserInput[] | PharmacyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PharmacyCreateOrConnectWithoutUserInput | PharmacyCreateOrConnectWithoutUserInput[]
    createMany?: PharmacyCreateManyUserInputEnvelope
    connect?: PharmacyWhereUniqueInput | PharmacyWhereUniqueInput[]
  }

  export type MriTestCreateNestedManyWithoutUserInput = {
    create?: XOR<MriTestCreateWithoutUserInput, MriTestUncheckedCreateWithoutUserInput> | MriTestCreateWithoutUserInput[] | MriTestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MriTestCreateOrConnectWithoutUserInput | MriTestCreateOrConnectWithoutUserInput[]
    createMany?: MriTestCreateManyUserInputEnvelope
    connect?: MriTestWhereUniqueInput | MriTestWhereUniqueInput[]
  }

  export type UrineTestCreateNestedManyWithoutUserInput = {
    create?: XOR<UrineTestCreateWithoutUserInput, UrineTestUncheckedCreateWithoutUserInput> | UrineTestCreateWithoutUserInput[] | UrineTestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UrineTestCreateOrConnectWithoutUserInput | UrineTestCreateOrConnectWithoutUserInput[]
    createMany?: UrineTestCreateManyUserInputEnvelope
    connect?: UrineTestWhereUniqueInput | UrineTestWhereUniqueInput[]
  }

  export type BloodTestCreateNestedManyWithoutUserInput = {
    create?: XOR<BloodTestCreateWithoutUserInput, BloodTestUncheckedCreateWithoutUserInput> | BloodTestCreateWithoutUserInput[] | BloodTestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BloodTestCreateOrConnectWithoutUserInput | BloodTestCreateOrConnectWithoutUserInput[]
    createMany?: BloodTestCreateManyUserInputEnvelope
    connect?: BloodTestWhereUniqueInput | BloodTestWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AppointmentCreateWithoutUserInput, AppointmentUncheckedCreateWithoutUserInput> | AppointmentCreateWithoutUserInput[] | AppointmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutUserInput | AppointmentCreateOrConnectWithoutUserInput[]
    createMany?: AppointmentCreateManyUserInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type HistoricalDataUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<HistoricalDataCreateWithoutUserInput, HistoricalDataUncheckedCreateWithoutUserInput> | HistoricalDataCreateWithoutUserInput[] | HistoricalDataUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HistoricalDataCreateOrConnectWithoutUserInput | HistoricalDataCreateOrConnectWithoutUserInput[]
    createMany?: HistoricalDataCreateManyUserInputEnvelope
    connect?: HistoricalDataWhereUniqueInput | HistoricalDataWhereUniqueInput[]
  }

  export type PharmacyUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PharmacyCreateWithoutUserInput, PharmacyUncheckedCreateWithoutUserInput> | PharmacyCreateWithoutUserInput[] | PharmacyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PharmacyCreateOrConnectWithoutUserInput | PharmacyCreateOrConnectWithoutUserInput[]
    createMany?: PharmacyCreateManyUserInputEnvelope
    connect?: PharmacyWhereUniqueInput | PharmacyWhereUniqueInput[]
  }

  export type MriTestUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MriTestCreateWithoutUserInput, MriTestUncheckedCreateWithoutUserInput> | MriTestCreateWithoutUserInput[] | MriTestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MriTestCreateOrConnectWithoutUserInput | MriTestCreateOrConnectWithoutUserInput[]
    createMany?: MriTestCreateManyUserInputEnvelope
    connect?: MriTestWhereUniqueInput | MriTestWhereUniqueInput[]
  }

  export type UrineTestUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UrineTestCreateWithoutUserInput, UrineTestUncheckedCreateWithoutUserInput> | UrineTestCreateWithoutUserInput[] | UrineTestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UrineTestCreateOrConnectWithoutUserInput | UrineTestCreateOrConnectWithoutUserInput[]
    createMany?: UrineTestCreateManyUserInputEnvelope
    connect?: UrineTestWhereUniqueInput | UrineTestWhereUniqueInput[]
  }

  export type BloodTestUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BloodTestCreateWithoutUserInput, BloodTestUncheckedCreateWithoutUserInput> | BloodTestCreateWithoutUserInput[] | BloodTestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BloodTestCreateOrConnectWithoutUserInput | BloodTestCreateOrConnectWithoutUserInput[]
    createMany?: BloodTestCreateManyUserInputEnvelope
    connect?: BloodTestWhereUniqueInput | BloodTestWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AppointmentUpdateManyWithoutUserNestedInput = {
    create?: XOR<AppointmentCreateWithoutUserInput, AppointmentUncheckedCreateWithoutUserInput> | AppointmentCreateWithoutUserInput[] | AppointmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutUserInput | AppointmentCreateOrConnectWithoutUserInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutUserInput | AppointmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AppointmentCreateManyUserInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutUserInput | AppointmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutUserInput | AppointmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type HistoricalDataUpdateManyWithoutUserNestedInput = {
    create?: XOR<HistoricalDataCreateWithoutUserInput, HistoricalDataUncheckedCreateWithoutUserInput> | HistoricalDataCreateWithoutUserInput[] | HistoricalDataUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HistoricalDataCreateOrConnectWithoutUserInput | HistoricalDataCreateOrConnectWithoutUserInput[]
    upsert?: HistoricalDataUpsertWithWhereUniqueWithoutUserInput | HistoricalDataUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HistoricalDataCreateManyUserInputEnvelope
    set?: HistoricalDataWhereUniqueInput | HistoricalDataWhereUniqueInput[]
    disconnect?: HistoricalDataWhereUniqueInput | HistoricalDataWhereUniqueInput[]
    delete?: HistoricalDataWhereUniqueInput | HistoricalDataWhereUniqueInput[]
    connect?: HistoricalDataWhereUniqueInput | HistoricalDataWhereUniqueInput[]
    update?: HistoricalDataUpdateWithWhereUniqueWithoutUserInput | HistoricalDataUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HistoricalDataUpdateManyWithWhereWithoutUserInput | HistoricalDataUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HistoricalDataScalarWhereInput | HistoricalDataScalarWhereInput[]
  }

  export type PharmacyUpdateManyWithoutUserNestedInput = {
    create?: XOR<PharmacyCreateWithoutUserInput, PharmacyUncheckedCreateWithoutUserInput> | PharmacyCreateWithoutUserInput[] | PharmacyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PharmacyCreateOrConnectWithoutUserInput | PharmacyCreateOrConnectWithoutUserInput[]
    upsert?: PharmacyUpsertWithWhereUniqueWithoutUserInput | PharmacyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PharmacyCreateManyUserInputEnvelope
    set?: PharmacyWhereUniqueInput | PharmacyWhereUniqueInput[]
    disconnect?: PharmacyWhereUniqueInput | PharmacyWhereUniqueInput[]
    delete?: PharmacyWhereUniqueInput | PharmacyWhereUniqueInput[]
    connect?: PharmacyWhereUniqueInput | PharmacyWhereUniqueInput[]
    update?: PharmacyUpdateWithWhereUniqueWithoutUserInput | PharmacyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PharmacyUpdateManyWithWhereWithoutUserInput | PharmacyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PharmacyScalarWhereInput | PharmacyScalarWhereInput[]
  }

  export type MriTestUpdateManyWithoutUserNestedInput = {
    create?: XOR<MriTestCreateWithoutUserInput, MriTestUncheckedCreateWithoutUserInput> | MriTestCreateWithoutUserInput[] | MriTestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MriTestCreateOrConnectWithoutUserInput | MriTestCreateOrConnectWithoutUserInput[]
    upsert?: MriTestUpsertWithWhereUniqueWithoutUserInput | MriTestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MriTestCreateManyUserInputEnvelope
    set?: MriTestWhereUniqueInput | MriTestWhereUniqueInput[]
    disconnect?: MriTestWhereUniqueInput | MriTestWhereUniqueInput[]
    delete?: MriTestWhereUniqueInput | MriTestWhereUniqueInput[]
    connect?: MriTestWhereUniqueInput | MriTestWhereUniqueInput[]
    update?: MriTestUpdateWithWhereUniqueWithoutUserInput | MriTestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MriTestUpdateManyWithWhereWithoutUserInput | MriTestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MriTestScalarWhereInput | MriTestScalarWhereInput[]
  }

  export type UrineTestUpdateManyWithoutUserNestedInput = {
    create?: XOR<UrineTestCreateWithoutUserInput, UrineTestUncheckedCreateWithoutUserInput> | UrineTestCreateWithoutUserInput[] | UrineTestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UrineTestCreateOrConnectWithoutUserInput | UrineTestCreateOrConnectWithoutUserInput[]
    upsert?: UrineTestUpsertWithWhereUniqueWithoutUserInput | UrineTestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UrineTestCreateManyUserInputEnvelope
    set?: UrineTestWhereUniqueInput | UrineTestWhereUniqueInput[]
    disconnect?: UrineTestWhereUniqueInput | UrineTestWhereUniqueInput[]
    delete?: UrineTestWhereUniqueInput | UrineTestWhereUniqueInput[]
    connect?: UrineTestWhereUniqueInput | UrineTestWhereUniqueInput[]
    update?: UrineTestUpdateWithWhereUniqueWithoutUserInput | UrineTestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UrineTestUpdateManyWithWhereWithoutUserInput | UrineTestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UrineTestScalarWhereInput | UrineTestScalarWhereInput[]
  }

  export type BloodTestUpdateManyWithoutUserNestedInput = {
    create?: XOR<BloodTestCreateWithoutUserInput, BloodTestUncheckedCreateWithoutUserInput> | BloodTestCreateWithoutUserInput[] | BloodTestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BloodTestCreateOrConnectWithoutUserInput | BloodTestCreateOrConnectWithoutUserInput[]
    upsert?: BloodTestUpsertWithWhereUniqueWithoutUserInput | BloodTestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BloodTestCreateManyUserInputEnvelope
    set?: BloodTestWhereUniqueInput | BloodTestWhereUniqueInput[]
    disconnect?: BloodTestWhereUniqueInput | BloodTestWhereUniqueInput[]
    delete?: BloodTestWhereUniqueInput | BloodTestWhereUniqueInput[]
    connect?: BloodTestWhereUniqueInput | BloodTestWhereUniqueInput[]
    update?: BloodTestUpdateWithWhereUniqueWithoutUserInput | BloodTestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BloodTestUpdateManyWithWhereWithoutUserInput | BloodTestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BloodTestScalarWhereInput | BloodTestScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AppointmentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AppointmentCreateWithoutUserInput, AppointmentUncheckedCreateWithoutUserInput> | AppointmentCreateWithoutUserInput[] | AppointmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutUserInput | AppointmentCreateOrConnectWithoutUserInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutUserInput | AppointmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AppointmentCreateManyUserInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutUserInput | AppointmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutUserInput | AppointmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type HistoricalDataUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<HistoricalDataCreateWithoutUserInput, HistoricalDataUncheckedCreateWithoutUserInput> | HistoricalDataCreateWithoutUserInput[] | HistoricalDataUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HistoricalDataCreateOrConnectWithoutUserInput | HistoricalDataCreateOrConnectWithoutUserInput[]
    upsert?: HistoricalDataUpsertWithWhereUniqueWithoutUserInput | HistoricalDataUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HistoricalDataCreateManyUserInputEnvelope
    set?: HistoricalDataWhereUniqueInput | HistoricalDataWhereUniqueInput[]
    disconnect?: HistoricalDataWhereUniqueInput | HistoricalDataWhereUniqueInput[]
    delete?: HistoricalDataWhereUniqueInput | HistoricalDataWhereUniqueInput[]
    connect?: HistoricalDataWhereUniqueInput | HistoricalDataWhereUniqueInput[]
    update?: HistoricalDataUpdateWithWhereUniqueWithoutUserInput | HistoricalDataUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HistoricalDataUpdateManyWithWhereWithoutUserInput | HistoricalDataUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HistoricalDataScalarWhereInput | HistoricalDataScalarWhereInput[]
  }

  export type PharmacyUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PharmacyCreateWithoutUserInput, PharmacyUncheckedCreateWithoutUserInput> | PharmacyCreateWithoutUserInput[] | PharmacyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PharmacyCreateOrConnectWithoutUserInput | PharmacyCreateOrConnectWithoutUserInput[]
    upsert?: PharmacyUpsertWithWhereUniqueWithoutUserInput | PharmacyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PharmacyCreateManyUserInputEnvelope
    set?: PharmacyWhereUniqueInput | PharmacyWhereUniqueInput[]
    disconnect?: PharmacyWhereUniqueInput | PharmacyWhereUniqueInput[]
    delete?: PharmacyWhereUniqueInput | PharmacyWhereUniqueInput[]
    connect?: PharmacyWhereUniqueInput | PharmacyWhereUniqueInput[]
    update?: PharmacyUpdateWithWhereUniqueWithoutUserInput | PharmacyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PharmacyUpdateManyWithWhereWithoutUserInput | PharmacyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PharmacyScalarWhereInput | PharmacyScalarWhereInput[]
  }

  export type MriTestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MriTestCreateWithoutUserInput, MriTestUncheckedCreateWithoutUserInput> | MriTestCreateWithoutUserInput[] | MriTestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MriTestCreateOrConnectWithoutUserInput | MriTestCreateOrConnectWithoutUserInput[]
    upsert?: MriTestUpsertWithWhereUniqueWithoutUserInput | MriTestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MriTestCreateManyUserInputEnvelope
    set?: MriTestWhereUniqueInput | MriTestWhereUniqueInput[]
    disconnect?: MriTestWhereUniqueInput | MriTestWhereUniqueInput[]
    delete?: MriTestWhereUniqueInput | MriTestWhereUniqueInput[]
    connect?: MriTestWhereUniqueInput | MriTestWhereUniqueInput[]
    update?: MriTestUpdateWithWhereUniqueWithoutUserInput | MriTestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MriTestUpdateManyWithWhereWithoutUserInput | MriTestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MriTestScalarWhereInput | MriTestScalarWhereInput[]
  }

  export type UrineTestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UrineTestCreateWithoutUserInput, UrineTestUncheckedCreateWithoutUserInput> | UrineTestCreateWithoutUserInput[] | UrineTestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UrineTestCreateOrConnectWithoutUserInput | UrineTestCreateOrConnectWithoutUserInput[]
    upsert?: UrineTestUpsertWithWhereUniqueWithoutUserInput | UrineTestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UrineTestCreateManyUserInputEnvelope
    set?: UrineTestWhereUniqueInput | UrineTestWhereUniqueInput[]
    disconnect?: UrineTestWhereUniqueInput | UrineTestWhereUniqueInput[]
    delete?: UrineTestWhereUniqueInput | UrineTestWhereUniqueInput[]
    connect?: UrineTestWhereUniqueInput | UrineTestWhereUniqueInput[]
    update?: UrineTestUpdateWithWhereUniqueWithoutUserInput | UrineTestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UrineTestUpdateManyWithWhereWithoutUserInput | UrineTestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UrineTestScalarWhereInput | UrineTestScalarWhereInput[]
  }

  export type BloodTestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BloodTestCreateWithoutUserInput, BloodTestUncheckedCreateWithoutUserInput> | BloodTestCreateWithoutUserInput[] | BloodTestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BloodTestCreateOrConnectWithoutUserInput | BloodTestCreateOrConnectWithoutUserInput[]
    upsert?: BloodTestUpsertWithWhereUniqueWithoutUserInput | BloodTestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BloodTestCreateManyUserInputEnvelope
    set?: BloodTestWhereUniqueInput | BloodTestWhereUniqueInput[]
    disconnect?: BloodTestWhereUniqueInput | BloodTestWhereUniqueInput[]
    delete?: BloodTestWhereUniqueInput | BloodTestWhereUniqueInput[]
    connect?: BloodTestWhereUniqueInput | BloodTestWhereUniqueInput[]
    update?: BloodTestUpdateWithWhereUniqueWithoutUserInput | BloodTestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BloodTestUpdateManyWithWhereWithoutUserInput | BloodTestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BloodTestScalarWhereInput | BloodTestScalarWhereInput[]
  }

  export type AppointmentCreateNestedManyWithoutDoctorInput = {
    create?: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput> | AppointmentCreateWithoutDoctorInput[] | AppointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorInput | AppointmentCreateOrConnectWithoutDoctorInput[]
    createMany?: AppointmentCreateManyDoctorInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput> | AppointmentCreateWithoutDoctorInput[] | AppointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorInput | AppointmentCreateOrConnectWithoutDoctorInput[]
    createMany?: AppointmentCreateManyDoctorInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type AppointmentUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput> | AppointmentCreateWithoutDoctorInput[] | AppointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorInput | AppointmentCreateOrConnectWithoutDoctorInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutDoctorInput | AppointmentUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: AppointmentCreateManyDoctorInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutDoctorInput | AppointmentUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutDoctorInput | AppointmentUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput> | AppointmentCreateWithoutDoctorInput[] | AppointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorInput | AppointmentCreateOrConnectWithoutDoctorInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutDoctorInput | AppointmentUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: AppointmentCreateManyDoctorInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutDoctorInput | AppointmentUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutDoctorInput | AppointmentUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<UserCreateWithoutAppointmentsInput, UserUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAppointmentsInput
    connect?: UserWhereUniqueInput
  }

  export type DoctorCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<DoctorCreateWithoutAppointmentsInput, DoctorUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutAppointmentsInput
    connect?: DoctorWhereUniqueInput
  }

  export type EnumAppointmentStatusFieldUpdateOperationsInput = {
    set?: $Enums.AppointmentStatus
  }

  export type UserUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<UserCreateWithoutAppointmentsInput, UserUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAppointmentsInput
    upsert?: UserUpsertWithoutAppointmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAppointmentsInput, UserUpdateWithoutAppointmentsInput>, UserUncheckedUpdateWithoutAppointmentsInput>
  }

  export type DoctorUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<DoctorCreateWithoutAppointmentsInput, DoctorUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutAppointmentsInput
    upsert?: DoctorUpsertWithoutAppointmentsInput
    connect?: DoctorWhereUniqueInput
    update?: XOR<XOR<DoctorUpdateToOneWithWhereWithoutAppointmentsInput, DoctorUpdateWithoutAppointmentsInput>, DoctorUncheckedUpdateWithoutAppointmentsInput>
  }

  export type UserCreateNestedOneWithoutHistoricalsInput = {
    create?: XOR<UserCreateWithoutHistoricalsInput, UserUncheckedCreateWithoutHistoricalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutHistoricalsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutHistoricalsNestedInput = {
    create?: XOR<UserCreateWithoutHistoricalsInput, UserUncheckedCreateWithoutHistoricalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutHistoricalsInput
    upsert?: UserUpsertWithoutHistoricalsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutHistoricalsInput, UserUpdateWithoutHistoricalsInput>, UserUncheckedUpdateWithoutHistoricalsInput>
  }

  export type UserCreateNestedOneWithoutPharmaciesInput = {
    create?: XOR<UserCreateWithoutPharmaciesInput, UserUncheckedCreateWithoutPharmaciesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPharmaciesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPharmaciesNestedInput = {
    create?: XOR<UserCreateWithoutPharmaciesInput, UserUncheckedCreateWithoutPharmaciesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPharmaciesInput
    upsert?: UserUpsertWithoutPharmaciesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPharmaciesInput, UserUpdateWithoutPharmaciesInput>, UserUncheckedUpdateWithoutPharmaciesInput>
  }

  export type UserCreateNestedOneWithoutMriTestsInput = {
    create?: XOR<UserCreateWithoutMriTestsInput, UserUncheckedCreateWithoutMriTestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMriTestsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMriTestsNestedInput = {
    create?: XOR<UserCreateWithoutMriTestsInput, UserUncheckedCreateWithoutMriTestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMriTestsInput
    upsert?: UserUpsertWithoutMriTestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMriTestsInput, UserUpdateWithoutMriTestsInput>, UserUncheckedUpdateWithoutMriTestsInput>
  }

  export type UserCreateNestedOneWithoutUrineTestsInput = {
    create?: XOR<UserCreateWithoutUrineTestsInput, UserUncheckedCreateWithoutUrineTestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUrineTestsInput
    connect?: UserWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutUrineTestsNestedInput = {
    create?: XOR<UserCreateWithoutUrineTestsInput, UserUncheckedCreateWithoutUrineTestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUrineTestsInput
    upsert?: UserUpsertWithoutUrineTestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUrineTestsInput, UserUpdateWithoutUrineTestsInput>, UserUncheckedUpdateWithoutUrineTestsInput>
  }

  export type UserCreateNestedOneWithoutBloodTestsInput = {
    create?: XOR<UserCreateWithoutBloodTestsInput, UserUncheckedCreateWithoutBloodTestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBloodTestsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutBloodTestsNestedInput = {
    create?: XOR<UserCreateWithoutBloodTestsInput, UserUncheckedCreateWithoutBloodTestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBloodTestsInput
    upsert?: UserUpsertWithoutBloodTestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBloodTestsInput, UserUpdateWithoutBloodTestsInput>, UserUncheckedUpdateWithoutBloodTestsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumAppointmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusFilter<$PrismaModel> | $Enums.AppointmentStatus
  }

  export type NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AppointmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAppointmentStatusFilter<$PrismaModel>
    _max?: NestedEnumAppointmentStatusFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type AppointmentCreateWithoutUserInput = {
    date: Date | string
    purpose: string
    information: string
    location: string
    status: $Enums.AppointmentStatus
    doctor: DoctorCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentUncheckedCreateWithoutUserInput = {
    id?: number
    date: Date | string
    purpose: string
    information: string
    location: string
    status: $Enums.AppointmentStatus
    idDokter: number
  }

  export type AppointmentCreateOrConnectWithoutUserInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutUserInput, AppointmentUncheckedCreateWithoutUserInput>
  }

  export type AppointmentCreateManyUserInputEnvelope = {
    data: AppointmentCreateManyUserInput | AppointmentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type HistoricalDataCreateWithoutUserInput = {
    parameter: string
    value: string
    tgl: Date | string
  }

  export type HistoricalDataUncheckedCreateWithoutUserInput = {
    id?: number
    parameter: string
    value: string
    tgl: Date | string
  }

  export type HistoricalDataCreateOrConnectWithoutUserInput = {
    where: HistoricalDataWhereUniqueInput
    create: XOR<HistoricalDataCreateWithoutUserInput, HistoricalDataUncheckedCreateWithoutUserInput>
  }

  export type HistoricalDataCreateManyUserInputEnvelope = {
    data: HistoricalDataCreateManyUserInput | HistoricalDataCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PharmacyCreateWithoutUserInput = {
    namaObat: string
    keteranganPenggunaan: string
    dosis: string
    tanggalMulaiObat: Date | string
    tanggalSelesaiObat: Date | string
  }

  export type PharmacyUncheckedCreateWithoutUserInput = {
    id?: number
    namaObat: string
    keteranganPenggunaan: string
    dosis: string
    tanggalMulaiObat: Date | string
    tanggalSelesaiObat: Date | string
  }

  export type PharmacyCreateOrConnectWithoutUserInput = {
    where: PharmacyWhereUniqueInput
    create: XOR<PharmacyCreateWithoutUserInput, PharmacyUncheckedCreateWithoutUserInput>
  }

  export type PharmacyCreateManyUserInputEnvelope = {
    data: PharmacyCreateManyUserInput | PharmacyCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MriTestCreateWithoutUserInput = {
    urlPhoto: string
    keterangan: string
    tanggal: Date | string
  }

  export type MriTestUncheckedCreateWithoutUserInput = {
    id?: number
    urlPhoto: string
    keterangan: string
    tanggal: Date | string
  }

  export type MriTestCreateOrConnectWithoutUserInput = {
    where: MriTestWhereUniqueInput
    create: XOR<MriTestCreateWithoutUserInput, MriTestUncheckedCreateWithoutUserInput>
  }

  export type MriTestCreateManyUserInputEnvelope = {
    data: MriTestCreateManyUserInput | MriTestCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UrineTestCreateWithoutUserInput = {
    warna: string
    bau: string
    ph: number
    glukosa: string
    protein: string
    tanggal: Date | string
  }

  export type UrineTestUncheckedCreateWithoutUserInput = {
    id?: number
    warna: string
    bau: string
    ph: number
    glukosa: string
    protein: string
    tanggal: Date | string
  }

  export type UrineTestCreateOrConnectWithoutUserInput = {
    where: UrineTestWhereUniqueInput
    create: XOR<UrineTestCreateWithoutUserInput, UrineTestUncheckedCreateWithoutUserInput>
  }

  export type UrineTestCreateManyUserInputEnvelope = {
    data: UrineTestCreateManyUserInput | UrineTestCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BloodTestCreateWithoutUserInput = {
    hemoglobin: number
    leukosit: number
    trombosit: number
    gulaDarah: number
    kolesterol: number
    tanggal: Date | string
  }

  export type BloodTestUncheckedCreateWithoutUserInput = {
    id?: number
    hemoglobin: number
    leukosit: number
    trombosit: number
    gulaDarah: number
    kolesterol: number
    tanggal: Date | string
  }

  export type BloodTestCreateOrConnectWithoutUserInput = {
    where: BloodTestWhereUniqueInput
    create: XOR<BloodTestCreateWithoutUserInput, BloodTestUncheckedCreateWithoutUserInput>
  }

  export type BloodTestCreateManyUserInputEnvelope = {
    data: BloodTestCreateManyUserInput | BloodTestCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AppointmentUpsertWithWhereUniqueWithoutUserInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutUserInput, AppointmentUncheckedUpdateWithoutUserInput>
    create: XOR<AppointmentCreateWithoutUserInput, AppointmentUncheckedCreateWithoutUserInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutUserInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutUserInput, AppointmentUncheckedUpdateWithoutUserInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutUserInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutUserInput>
  }

  export type AppointmentScalarWhereInput = {
    AND?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    OR?: AppointmentScalarWhereInput[]
    NOT?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    id?: IntFilter<"Appointment"> | number
    date?: DateTimeFilter<"Appointment"> | Date | string
    purpose?: StringFilter<"Appointment"> | string
    information?: StringFilter<"Appointment"> | string
    location?: StringFilter<"Appointment"> | string
    status?: EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus
    idUser?: IntFilter<"Appointment"> | number
    idDokter?: IntFilter<"Appointment"> | number
  }

  export type HistoricalDataUpsertWithWhereUniqueWithoutUserInput = {
    where: HistoricalDataWhereUniqueInput
    update: XOR<HistoricalDataUpdateWithoutUserInput, HistoricalDataUncheckedUpdateWithoutUserInput>
    create: XOR<HistoricalDataCreateWithoutUserInput, HistoricalDataUncheckedCreateWithoutUserInput>
  }

  export type HistoricalDataUpdateWithWhereUniqueWithoutUserInput = {
    where: HistoricalDataWhereUniqueInput
    data: XOR<HistoricalDataUpdateWithoutUserInput, HistoricalDataUncheckedUpdateWithoutUserInput>
  }

  export type HistoricalDataUpdateManyWithWhereWithoutUserInput = {
    where: HistoricalDataScalarWhereInput
    data: XOR<HistoricalDataUpdateManyMutationInput, HistoricalDataUncheckedUpdateManyWithoutUserInput>
  }

  export type HistoricalDataScalarWhereInput = {
    AND?: HistoricalDataScalarWhereInput | HistoricalDataScalarWhereInput[]
    OR?: HistoricalDataScalarWhereInput[]
    NOT?: HistoricalDataScalarWhereInput | HistoricalDataScalarWhereInput[]
    id?: IntFilter<"HistoricalData"> | number
    parameter?: StringFilter<"HistoricalData"> | string
    value?: StringFilter<"HistoricalData"> | string
    tgl?: DateTimeFilter<"HistoricalData"> | Date | string
    idUser?: IntFilter<"HistoricalData"> | number
  }

  export type PharmacyUpsertWithWhereUniqueWithoutUserInput = {
    where: PharmacyWhereUniqueInput
    update: XOR<PharmacyUpdateWithoutUserInput, PharmacyUncheckedUpdateWithoutUserInput>
    create: XOR<PharmacyCreateWithoutUserInput, PharmacyUncheckedCreateWithoutUserInput>
  }

  export type PharmacyUpdateWithWhereUniqueWithoutUserInput = {
    where: PharmacyWhereUniqueInput
    data: XOR<PharmacyUpdateWithoutUserInput, PharmacyUncheckedUpdateWithoutUserInput>
  }

  export type PharmacyUpdateManyWithWhereWithoutUserInput = {
    where: PharmacyScalarWhereInput
    data: XOR<PharmacyUpdateManyMutationInput, PharmacyUncheckedUpdateManyWithoutUserInput>
  }

  export type PharmacyScalarWhereInput = {
    AND?: PharmacyScalarWhereInput | PharmacyScalarWhereInput[]
    OR?: PharmacyScalarWhereInput[]
    NOT?: PharmacyScalarWhereInput | PharmacyScalarWhereInput[]
    id?: IntFilter<"Pharmacy"> | number
    namaObat?: StringFilter<"Pharmacy"> | string
    keteranganPenggunaan?: StringFilter<"Pharmacy"> | string
    dosis?: StringFilter<"Pharmacy"> | string
    tanggalMulaiObat?: DateTimeFilter<"Pharmacy"> | Date | string
    tanggalSelesaiObat?: DateTimeFilter<"Pharmacy"> | Date | string
    idUser?: IntFilter<"Pharmacy"> | number
  }

  export type MriTestUpsertWithWhereUniqueWithoutUserInput = {
    where: MriTestWhereUniqueInput
    update: XOR<MriTestUpdateWithoutUserInput, MriTestUncheckedUpdateWithoutUserInput>
    create: XOR<MriTestCreateWithoutUserInput, MriTestUncheckedCreateWithoutUserInput>
  }

  export type MriTestUpdateWithWhereUniqueWithoutUserInput = {
    where: MriTestWhereUniqueInput
    data: XOR<MriTestUpdateWithoutUserInput, MriTestUncheckedUpdateWithoutUserInput>
  }

  export type MriTestUpdateManyWithWhereWithoutUserInput = {
    where: MriTestScalarWhereInput
    data: XOR<MriTestUpdateManyMutationInput, MriTestUncheckedUpdateManyWithoutUserInput>
  }

  export type MriTestScalarWhereInput = {
    AND?: MriTestScalarWhereInput | MriTestScalarWhereInput[]
    OR?: MriTestScalarWhereInput[]
    NOT?: MriTestScalarWhereInput | MriTestScalarWhereInput[]
    id?: IntFilter<"MriTest"> | number
    urlPhoto?: StringFilter<"MriTest"> | string
    keterangan?: StringFilter<"MriTest"> | string
    tanggal?: DateTimeFilter<"MriTest"> | Date | string
    idUser?: IntFilter<"MriTest"> | number
  }

  export type UrineTestUpsertWithWhereUniqueWithoutUserInput = {
    where: UrineTestWhereUniqueInput
    update: XOR<UrineTestUpdateWithoutUserInput, UrineTestUncheckedUpdateWithoutUserInput>
    create: XOR<UrineTestCreateWithoutUserInput, UrineTestUncheckedCreateWithoutUserInput>
  }

  export type UrineTestUpdateWithWhereUniqueWithoutUserInput = {
    where: UrineTestWhereUniqueInput
    data: XOR<UrineTestUpdateWithoutUserInput, UrineTestUncheckedUpdateWithoutUserInput>
  }

  export type UrineTestUpdateManyWithWhereWithoutUserInput = {
    where: UrineTestScalarWhereInput
    data: XOR<UrineTestUpdateManyMutationInput, UrineTestUncheckedUpdateManyWithoutUserInput>
  }

  export type UrineTestScalarWhereInput = {
    AND?: UrineTestScalarWhereInput | UrineTestScalarWhereInput[]
    OR?: UrineTestScalarWhereInput[]
    NOT?: UrineTestScalarWhereInput | UrineTestScalarWhereInput[]
    id?: IntFilter<"UrineTest"> | number
    warna?: StringFilter<"UrineTest"> | string
    bau?: StringFilter<"UrineTest"> | string
    ph?: FloatFilter<"UrineTest"> | number
    glukosa?: StringFilter<"UrineTest"> | string
    protein?: StringFilter<"UrineTest"> | string
    tanggal?: DateTimeFilter<"UrineTest"> | Date | string
    idUser?: IntFilter<"UrineTest"> | number
  }

  export type BloodTestUpsertWithWhereUniqueWithoutUserInput = {
    where: BloodTestWhereUniqueInput
    update: XOR<BloodTestUpdateWithoutUserInput, BloodTestUncheckedUpdateWithoutUserInput>
    create: XOR<BloodTestCreateWithoutUserInput, BloodTestUncheckedCreateWithoutUserInput>
  }

  export type BloodTestUpdateWithWhereUniqueWithoutUserInput = {
    where: BloodTestWhereUniqueInput
    data: XOR<BloodTestUpdateWithoutUserInput, BloodTestUncheckedUpdateWithoutUserInput>
  }

  export type BloodTestUpdateManyWithWhereWithoutUserInput = {
    where: BloodTestScalarWhereInput
    data: XOR<BloodTestUpdateManyMutationInput, BloodTestUncheckedUpdateManyWithoutUserInput>
  }

  export type BloodTestScalarWhereInput = {
    AND?: BloodTestScalarWhereInput | BloodTestScalarWhereInput[]
    OR?: BloodTestScalarWhereInput[]
    NOT?: BloodTestScalarWhereInput | BloodTestScalarWhereInput[]
    id?: IntFilter<"BloodTest"> | number
    hemoglobin?: FloatFilter<"BloodTest"> | number
    leukosit?: FloatFilter<"BloodTest"> | number
    trombosit?: FloatFilter<"BloodTest"> | number
    gulaDarah?: FloatFilter<"BloodTest"> | number
    kolesterol?: FloatFilter<"BloodTest"> | number
    tanggal?: DateTimeFilter<"BloodTest"> | Date | string
    idUser?: IntFilter<"BloodTest"> | number
  }

  export type AppointmentCreateWithoutDoctorInput = {
    date: Date | string
    purpose: string
    information: string
    location: string
    status: $Enums.AppointmentStatus
    user: UserCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentUncheckedCreateWithoutDoctorInput = {
    id?: number
    date: Date | string
    purpose: string
    information: string
    location: string
    status: $Enums.AppointmentStatus
    idUser: number
  }

  export type AppointmentCreateOrConnectWithoutDoctorInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput>
  }

  export type AppointmentCreateManyDoctorInputEnvelope = {
    data: AppointmentCreateManyDoctorInput | AppointmentCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type AppointmentUpsertWithWhereUniqueWithoutDoctorInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutDoctorInput, AppointmentUncheckedUpdateWithoutDoctorInput>
    create: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutDoctorInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutDoctorInput, AppointmentUncheckedUpdateWithoutDoctorInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutDoctorInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutDoctorInput>
  }

  export type UserCreateWithoutAppointmentsInput = {
    username: string
    password: string
    name: string
    birthdate: Date | string
    address: string
    profession: string
    religion: string
    avatar: string
    historicals?: HistoricalDataCreateNestedManyWithoutUserInput
    pharmacies?: PharmacyCreateNestedManyWithoutUserInput
    mriTests?: MriTestCreateNestedManyWithoutUserInput
    urineTests?: UrineTestCreateNestedManyWithoutUserInput
    bloodTests?: BloodTestCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAppointmentsInput = {
    id?: number
    username: string
    password: string
    name: string
    birthdate: Date | string
    address: string
    profession: string
    religion: string
    avatar: string
    historicals?: HistoricalDataUncheckedCreateNestedManyWithoutUserInput
    pharmacies?: PharmacyUncheckedCreateNestedManyWithoutUserInput
    mriTests?: MriTestUncheckedCreateNestedManyWithoutUserInput
    urineTests?: UrineTestUncheckedCreateNestedManyWithoutUserInput
    bloodTests?: BloodTestUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAppointmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAppointmentsInput, UserUncheckedCreateWithoutAppointmentsInput>
  }

  export type DoctorCreateWithoutAppointmentsInput = {
    about: string
    name: string
    specialist: string
    education: string
    experience: string
  }

  export type DoctorUncheckedCreateWithoutAppointmentsInput = {
    id?: number
    about: string
    name: string
    specialist: string
    education: string
    experience: string
  }

  export type DoctorCreateOrConnectWithoutAppointmentsInput = {
    where: DoctorWhereUniqueInput
    create: XOR<DoctorCreateWithoutAppointmentsInput, DoctorUncheckedCreateWithoutAppointmentsInput>
  }

  export type UserUpsertWithoutAppointmentsInput = {
    update: XOR<UserUpdateWithoutAppointmentsInput, UserUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<UserCreateWithoutAppointmentsInput, UserUncheckedCreateWithoutAppointmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAppointmentsInput, UserUncheckedUpdateWithoutAppointmentsInput>
  }

  export type UserUpdateWithoutAppointmentsInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    profession?: StringFieldUpdateOperationsInput | string
    religion?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    historicals?: HistoricalDataUpdateManyWithoutUserNestedInput
    pharmacies?: PharmacyUpdateManyWithoutUserNestedInput
    mriTests?: MriTestUpdateManyWithoutUserNestedInput
    urineTests?: UrineTestUpdateManyWithoutUserNestedInput
    bloodTests?: BloodTestUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAppointmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    profession?: StringFieldUpdateOperationsInput | string
    religion?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    historicals?: HistoricalDataUncheckedUpdateManyWithoutUserNestedInput
    pharmacies?: PharmacyUncheckedUpdateManyWithoutUserNestedInput
    mriTests?: MriTestUncheckedUpdateManyWithoutUserNestedInput
    urineTests?: UrineTestUncheckedUpdateManyWithoutUserNestedInput
    bloodTests?: BloodTestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DoctorUpsertWithoutAppointmentsInput = {
    update: XOR<DoctorUpdateWithoutAppointmentsInput, DoctorUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<DoctorCreateWithoutAppointmentsInput, DoctorUncheckedCreateWithoutAppointmentsInput>
    where?: DoctorWhereInput
  }

  export type DoctorUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: DoctorWhereInput
    data: XOR<DoctorUpdateWithoutAppointmentsInput, DoctorUncheckedUpdateWithoutAppointmentsInput>
  }

  export type DoctorUpdateWithoutAppointmentsInput = {
    about?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    specialist?: StringFieldUpdateOperationsInput | string
    education?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
  }

  export type DoctorUncheckedUpdateWithoutAppointmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    about?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    specialist?: StringFieldUpdateOperationsInput | string
    education?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutHistoricalsInput = {
    username: string
    password: string
    name: string
    birthdate: Date | string
    address: string
    profession: string
    religion: string
    avatar: string
    appointments?: AppointmentCreateNestedManyWithoutUserInput
    pharmacies?: PharmacyCreateNestedManyWithoutUserInput
    mriTests?: MriTestCreateNestedManyWithoutUserInput
    urineTests?: UrineTestCreateNestedManyWithoutUserInput
    bloodTests?: BloodTestCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutHistoricalsInput = {
    id?: number
    username: string
    password: string
    name: string
    birthdate: Date | string
    address: string
    profession: string
    religion: string
    avatar: string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutUserInput
    pharmacies?: PharmacyUncheckedCreateNestedManyWithoutUserInput
    mriTests?: MriTestUncheckedCreateNestedManyWithoutUserInput
    urineTests?: UrineTestUncheckedCreateNestedManyWithoutUserInput
    bloodTests?: BloodTestUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutHistoricalsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHistoricalsInput, UserUncheckedCreateWithoutHistoricalsInput>
  }

  export type UserUpsertWithoutHistoricalsInput = {
    update: XOR<UserUpdateWithoutHistoricalsInput, UserUncheckedUpdateWithoutHistoricalsInput>
    create: XOR<UserCreateWithoutHistoricalsInput, UserUncheckedCreateWithoutHistoricalsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutHistoricalsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutHistoricalsInput, UserUncheckedUpdateWithoutHistoricalsInput>
  }

  export type UserUpdateWithoutHistoricalsInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    profession?: StringFieldUpdateOperationsInput | string
    religion?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    appointments?: AppointmentUpdateManyWithoutUserNestedInput
    pharmacies?: PharmacyUpdateManyWithoutUserNestedInput
    mriTests?: MriTestUpdateManyWithoutUserNestedInput
    urineTests?: UrineTestUpdateManyWithoutUserNestedInput
    bloodTests?: BloodTestUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutHistoricalsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    profession?: StringFieldUpdateOperationsInput | string
    religion?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    appointments?: AppointmentUncheckedUpdateManyWithoutUserNestedInput
    pharmacies?: PharmacyUncheckedUpdateManyWithoutUserNestedInput
    mriTests?: MriTestUncheckedUpdateManyWithoutUserNestedInput
    urineTests?: UrineTestUncheckedUpdateManyWithoutUserNestedInput
    bloodTests?: BloodTestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPharmaciesInput = {
    username: string
    password: string
    name: string
    birthdate: Date | string
    address: string
    profession: string
    religion: string
    avatar: string
    appointments?: AppointmentCreateNestedManyWithoutUserInput
    historicals?: HistoricalDataCreateNestedManyWithoutUserInput
    mriTests?: MriTestCreateNestedManyWithoutUserInput
    urineTests?: UrineTestCreateNestedManyWithoutUserInput
    bloodTests?: BloodTestCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPharmaciesInput = {
    id?: number
    username: string
    password: string
    name: string
    birthdate: Date | string
    address: string
    profession: string
    religion: string
    avatar: string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutUserInput
    historicals?: HistoricalDataUncheckedCreateNestedManyWithoutUserInput
    mriTests?: MriTestUncheckedCreateNestedManyWithoutUserInput
    urineTests?: UrineTestUncheckedCreateNestedManyWithoutUserInput
    bloodTests?: BloodTestUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPharmaciesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPharmaciesInput, UserUncheckedCreateWithoutPharmaciesInput>
  }

  export type UserUpsertWithoutPharmaciesInput = {
    update: XOR<UserUpdateWithoutPharmaciesInput, UserUncheckedUpdateWithoutPharmaciesInput>
    create: XOR<UserCreateWithoutPharmaciesInput, UserUncheckedCreateWithoutPharmaciesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPharmaciesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPharmaciesInput, UserUncheckedUpdateWithoutPharmaciesInput>
  }

  export type UserUpdateWithoutPharmaciesInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    profession?: StringFieldUpdateOperationsInput | string
    religion?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    appointments?: AppointmentUpdateManyWithoutUserNestedInput
    historicals?: HistoricalDataUpdateManyWithoutUserNestedInput
    mriTests?: MriTestUpdateManyWithoutUserNestedInput
    urineTests?: UrineTestUpdateManyWithoutUserNestedInput
    bloodTests?: BloodTestUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPharmaciesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    profession?: StringFieldUpdateOperationsInput | string
    religion?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    appointments?: AppointmentUncheckedUpdateManyWithoutUserNestedInput
    historicals?: HistoricalDataUncheckedUpdateManyWithoutUserNestedInput
    mriTests?: MriTestUncheckedUpdateManyWithoutUserNestedInput
    urineTests?: UrineTestUncheckedUpdateManyWithoutUserNestedInput
    bloodTests?: BloodTestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutMriTestsInput = {
    username: string
    password: string
    name: string
    birthdate: Date | string
    address: string
    profession: string
    religion: string
    avatar: string
    appointments?: AppointmentCreateNestedManyWithoutUserInput
    historicals?: HistoricalDataCreateNestedManyWithoutUserInput
    pharmacies?: PharmacyCreateNestedManyWithoutUserInput
    urineTests?: UrineTestCreateNestedManyWithoutUserInput
    bloodTests?: BloodTestCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMriTestsInput = {
    id?: number
    username: string
    password: string
    name: string
    birthdate: Date | string
    address: string
    profession: string
    religion: string
    avatar: string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutUserInput
    historicals?: HistoricalDataUncheckedCreateNestedManyWithoutUserInput
    pharmacies?: PharmacyUncheckedCreateNestedManyWithoutUserInput
    urineTests?: UrineTestUncheckedCreateNestedManyWithoutUserInput
    bloodTests?: BloodTestUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMriTestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMriTestsInput, UserUncheckedCreateWithoutMriTestsInput>
  }

  export type UserUpsertWithoutMriTestsInput = {
    update: XOR<UserUpdateWithoutMriTestsInput, UserUncheckedUpdateWithoutMriTestsInput>
    create: XOR<UserCreateWithoutMriTestsInput, UserUncheckedCreateWithoutMriTestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMriTestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMriTestsInput, UserUncheckedUpdateWithoutMriTestsInput>
  }

  export type UserUpdateWithoutMriTestsInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    profession?: StringFieldUpdateOperationsInput | string
    religion?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    appointments?: AppointmentUpdateManyWithoutUserNestedInput
    historicals?: HistoricalDataUpdateManyWithoutUserNestedInput
    pharmacies?: PharmacyUpdateManyWithoutUserNestedInput
    urineTests?: UrineTestUpdateManyWithoutUserNestedInput
    bloodTests?: BloodTestUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMriTestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    profession?: StringFieldUpdateOperationsInput | string
    religion?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    appointments?: AppointmentUncheckedUpdateManyWithoutUserNestedInput
    historicals?: HistoricalDataUncheckedUpdateManyWithoutUserNestedInput
    pharmacies?: PharmacyUncheckedUpdateManyWithoutUserNestedInput
    urineTests?: UrineTestUncheckedUpdateManyWithoutUserNestedInput
    bloodTests?: BloodTestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutUrineTestsInput = {
    username: string
    password: string
    name: string
    birthdate: Date | string
    address: string
    profession: string
    religion: string
    avatar: string
    appointments?: AppointmentCreateNestedManyWithoutUserInput
    historicals?: HistoricalDataCreateNestedManyWithoutUserInput
    pharmacies?: PharmacyCreateNestedManyWithoutUserInput
    mriTests?: MriTestCreateNestedManyWithoutUserInput
    bloodTests?: BloodTestCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUrineTestsInput = {
    id?: number
    username: string
    password: string
    name: string
    birthdate: Date | string
    address: string
    profession: string
    religion: string
    avatar: string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutUserInput
    historicals?: HistoricalDataUncheckedCreateNestedManyWithoutUserInput
    pharmacies?: PharmacyUncheckedCreateNestedManyWithoutUserInput
    mriTests?: MriTestUncheckedCreateNestedManyWithoutUserInput
    bloodTests?: BloodTestUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUrineTestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUrineTestsInput, UserUncheckedCreateWithoutUrineTestsInput>
  }

  export type UserUpsertWithoutUrineTestsInput = {
    update: XOR<UserUpdateWithoutUrineTestsInput, UserUncheckedUpdateWithoutUrineTestsInput>
    create: XOR<UserCreateWithoutUrineTestsInput, UserUncheckedCreateWithoutUrineTestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUrineTestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUrineTestsInput, UserUncheckedUpdateWithoutUrineTestsInput>
  }

  export type UserUpdateWithoutUrineTestsInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    profession?: StringFieldUpdateOperationsInput | string
    religion?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    appointments?: AppointmentUpdateManyWithoutUserNestedInput
    historicals?: HistoricalDataUpdateManyWithoutUserNestedInput
    pharmacies?: PharmacyUpdateManyWithoutUserNestedInput
    mriTests?: MriTestUpdateManyWithoutUserNestedInput
    bloodTests?: BloodTestUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUrineTestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    profession?: StringFieldUpdateOperationsInput | string
    religion?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    appointments?: AppointmentUncheckedUpdateManyWithoutUserNestedInput
    historicals?: HistoricalDataUncheckedUpdateManyWithoutUserNestedInput
    pharmacies?: PharmacyUncheckedUpdateManyWithoutUserNestedInput
    mriTests?: MriTestUncheckedUpdateManyWithoutUserNestedInput
    bloodTests?: BloodTestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutBloodTestsInput = {
    username: string
    password: string
    name: string
    birthdate: Date | string
    address: string
    profession: string
    religion: string
    avatar: string
    appointments?: AppointmentCreateNestedManyWithoutUserInput
    historicals?: HistoricalDataCreateNestedManyWithoutUserInput
    pharmacies?: PharmacyCreateNestedManyWithoutUserInput
    mriTests?: MriTestCreateNestedManyWithoutUserInput
    urineTests?: UrineTestCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBloodTestsInput = {
    id?: number
    username: string
    password: string
    name: string
    birthdate: Date | string
    address: string
    profession: string
    religion: string
    avatar: string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutUserInput
    historicals?: HistoricalDataUncheckedCreateNestedManyWithoutUserInput
    pharmacies?: PharmacyUncheckedCreateNestedManyWithoutUserInput
    mriTests?: MriTestUncheckedCreateNestedManyWithoutUserInput
    urineTests?: UrineTestUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBloodTestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBloodTestsInput, UserUncheckedCreateWithoutBloodTestsInput>
  }

  export type UserUpsertWithoutBloodTestsInput = {
    update: XOR<UserUpdateWithoutBloodTestsInput, UserUncheckedUpdateWithoutBloodTestsInput>
    create: XOR<UserCreateWithoutBloodTestsInput, UserUncheckedCreateWithoutBloodTestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBloodTestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBloodTestsInput, UserUncheckedUpdateWithoutBloodTestsInput>
  }

  export type UserUpdateWithoutBloodTestsInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    profession?: StringFieldUpdateOperationsInput | string
    religion?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    appointments?: AppointmentUpdateManyWithoutUserNestedInput
    historicals?: HistoricalDataUpdateManyWithoutUserNestedInput
    pharmacies?: PharmacyUpdateManyWithoutUserNestedInput
    mriTests?: MriTestUpdateManyWithoutUserNestedInput
    urineTests?: UrineTestUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBloodTestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    profession?: StringFieldUpdateOperationsInput | string
    religion?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    appointments?: AppointmentUncheckedUpdateManyWithoutUserNestedInput
    historicals?: HistoricalDataUncheckedUpdateManyWithoutUserNestedInput
    pharmacies?: PharmacyUncheckedUpdateManyWithoutUserNestedInput
    mriTests?: MriTestUncheckedUpdateManyWithoutUserNestedInput
    urineTests?: UrineTestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AppointmentCreateManyUserInput = {
    id?: number
    date: Date | string
    purpose: string
    information: string
    location: string
    status: $Enums.AppointmentStatus
    idDokter: number
  }

  export type HistoricalDataCreateManyUserInput = {
    id?: number
    parameter: string
    value: string
    tgl: Date | string
  }

  export type PharmacyCreateManyUserInput = {
    id?: number
    namaObat: string
    keteranganPenggunaan: string
    dosis: string
    tanggalMulaiObat: Date | string
    tanggalSelesaiObat: Date | string
  }

  export type MriTestCreateManyUserInput = {
    id?: number
    urlPhoto: string
    keterangan: string
    tanggal: Date | string
  }

  export type UrineTestCreateManyUserInput = {
    id?: number
    warna: string
    bau: string
    ph: number
    glukosa: string
    protein: string
    tanggal: Date | string
  }

  export type BloodTestCreateManyUserInput = {
    id?: number
    hemoglobin: number
    leukosit: number
    trombosit: number
    gulaDarah: number
    kolesterol: number
    tanggal: Date | string
  }

  export type AppointmentUpdateWithoutUserInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    purpose?: StringFieldUpdateOperationsInput | string
    information?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    doctor?: DoctorUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    purpose?: StringFieldUpdateOperationsInput | string
    information?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    idDokter?: IntFieldUpdateOperationsInput | number
  }

  export type AppointmentUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    purpose?: StringFieldUpdateOperationsInput | string
    information?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    idDokter?: IntFieldUpdateOperationsInput | number
  }

  export type HistoricalDataUpdateWithoutUserInput = {
    parameter?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    tgl?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoricalDataUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    parameter?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    tgl?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoricalDataUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    parameter?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    tgl?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PharmacyUpdateWithoutUserInput = {
    namaObat?: StringFieldUpdateOperationsInput | string
    keteranganPenggunaan?: StringFieldUpdateOperationsInput | string
    dosis?: StringFieldUpdateOperationsInput | string
    tanggalMulaiObat?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalSelesaiObat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PharmacyUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    namaObat?: StringFieldUpdateOperationsInput | string
    keteranganPenggunaan?: StringFieldUpdateOperationsInput | string
    dosis?: StringFieldUpdateOperationsInput | string
    tanggalMulaiObat?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalSelesaiObat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PharmacyUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    namaObat?: StringFieldUpdateOperationsInput | string
    keteranganPenggunaan?: StringFieldUpdateOperationsInput | string
    dosis?: StringFieldUpdateOperationsInput | string
    tanggalMulaiObat?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalSelesaiObat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MriTestUpdateWithoutUserInput = {
    urlPhoto?: StringFieldUpdateOperationsInput | string
    keterangan?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MriTestUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    urlPhoto?: StringFieldUpdateOperationsInput | string
    keterangan?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MriTestUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    urlPhoto?: StringFieldUpdateOperationsInput | string
    keterangan?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UrineTestUpdateWithoutUserInput = {
    warna?: StringFieldUpdateOperationsInput | string
    bau?: StringFieldUpdateOperationsInput | string
    ph?: FloatFieldUpdateOperationsInput | number
    glukosa?: StringFieldUpdateOperationsInput | string
    protein?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UrineTestUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    warna?: StringFieldUpdateOperationsInput | string
    bau?: StringFieldUpdateOperationsInput | string
    ph?: FloatFieldUpdateOperationsInput | number
    glukosa?: StringFieldUpdateOperationsInput | string
    protein?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UrineTestUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    warna?: StringFieldUpdateOperationsInput | string
    bau?: StringFieldUpdateOperationsInput | string
    ph?: FloatFieldUpdateOperationsInput | number
    glukosa?: StringFieldUpdateOperationsInput | string
    protein?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BloodTestUpdateWithoutUserInput = {
    hemoglobin?: FloatFieldUpdateOperationsInput | number
    leukosit?: FloatFieldUpdateOperationsInput | number
    trombosit?: FloatFieldUpdateOperationsInput | number
    gulaDarah?: FloatFieldUpdateOperationsInput | number
    kolesterol?: FloatFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BloodTestUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    hemoglobin?: FloatFieldUpdateOperationsInput | number
    leukosit?: FloatFieldUpdateOperationsInput | number
    trombosit?: FloatFieldUpdateOperationsInput | number
    gulaDarah?: FloatFieldUpdateOperationsInput | number
    kolesterol?: FloatFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BloodTestUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    hemoglobin?: FloatFieldUpdateOperationsInput | number
    leukosit?: FloatFieldUpdateOperationsInput | number
    trombosit?: FloatFieldUpdateOperationsInput | number
    gulaDarah?: FloatFieldUpdateOperationsInput | number
    kolesterol?: FloatFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentCreateManyDoctorInput = {
    id?: number
    date: Date | string
    purpose: string
    information: string
    location: string
    status: $Enums.AppointmentStatus
    idUser: number
  }

  export type AppointmentUpdateWithoutDoctorInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    purpose?: StringFieldUpdateOperationsInput | string
    information?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    user?: UserUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutDoctorInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    purpose?: StringFieldUpdateOperationsInput | string
    information?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    idUser?: IntFieldUpdateOperationsInput | number
  }

  export type AppointmentUncheckedUpdateManyWithoutDoctorInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    purpose?: StringFieldUpdateOperationsInput | string
    information?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    idUser?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}