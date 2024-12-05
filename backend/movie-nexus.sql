--
-- PostgreSQL database dump
--

-- Dumped from database version 16.4
-- Dumped by pg_dump version 16.4

-- Started on 2024-12-02 22:10:21

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 6 (class 2615 OID 55019)
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

-- *not* creating schema, since initdb creates it


ALTER SCHEMA public OWNER TO postgres;

--
-- TOC entry 5016 (class 0 OID 0)
-- Dependencies: 6
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON SCHEMA public IS '';


--
-- TOC entry 2 (class 3079 OID 57746)
-- Name: pg_trgm; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS pg_trgm WITH SCHEMA public;


--
-- TOC entry 5018 (class 0 OID 0)
-- Dependencies: 2
-- Name: EXTENSION pg_trgm; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION pg_trgm IS 'text similarity measurement and index searching based on trigrams';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 223 (class 1259 OID 56494)
-- Name: Actor; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Actor" (
    id integer NOT NULL,
    name text NOT NULL,
    "birthDate" timestamp(3) without time zone NOT NULL,
    "photoUrl" text,
    "countryCode" text NOT NULL
);


ALTER TABLE public."Actor" OWNER TO postgres;

--
-- TOC entry 222 (class 1259 OID 56493)
-- Name: Actor_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Actor_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Actor_id_seq" OWNER TO postgres;

--
-- TOC entry 5019 (class 0 OID 0)
-- Dependencies: 222
-- Name: Actor_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Actor_id_seq" OWNED BY public."Actor".id;


--
-- TOC entry 221 (class 1259 OID 56485)
-- Name: Award; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Award" (
    id integer NOT NULL,
    name text NOT NULL,
    year timestamp(3) without time zone NOT NULL,
    "countryCode" text NOT NULL
);


ALTER TABLE public."Award" OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 56484)
-- Name: Award_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Award_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Award_id_seq" OWNER TO postgres;

--
-- TOC entry 5020 (class 0 OID 0)
-- Dependencies: 220
-- Name: Award_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Award_id_seq" OWNED BY public."Award".id;


--
-- TOC entry 217 (class 1259 OID 56468)
-- Name: Country; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Country" (
    code text NOT NULL,
    name text NOT NULL
);


ALTER TABLE public."Country" OWNER TO postgres;

--
-- TOC entry 225 (class 1259 OID 56503)
-- Name: Director; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Director" (
    id integer NOT NULL,
    name text NOT NULL,
    "birthDate" timestamp(3) without time zone NOT NULL,
    "photoUrl" text,
    "countryCode" text NOT NULL
);


ALTER TABLE public."Director" OWNER TO postgres;

--
-- TOC entry 224 (class 1259 OID 56502)
-- Name: Director_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Director_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Director_id_seq" OWNER TO postgres;

--
-- TOC entry 5021 (class 0 OID 0)
-- Dependencies: 224
-- Name: Director_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Director_id_seq" OWNED BY public."Director".id;


--
-- TOC entry 219 (class 1259 OID 56476)
-- Name: Genre; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Genre" (
    id integer NOT NULL,
    name text NOT NULL
);


ALTER TABLE public."Genre" OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 56475)
-- Name: Genre_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Genre_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Genre_id_seq" OWNER TO postgres;

--
-- TOC entry 5022 (class 0 OID 0)
-- Dependencies: 218
-- Name: Genre_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Genre_id_seq" OWNED BY public."Genre".id;


--
-- TOC entry 227 (class 1259 OID 56512)
-- Name: Movie; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Movie" (
    id integer NOT NULL,
    title text NOT NULL,
    synopsis text NOT NULL,
    "posterUrl" text NOT NULL,
    "backdropUrl" text NOT NULL,
    "videoUrl" text,
    "releaseDate" timestamp(3) without time zone NOT NULL,
    "approvalStatus" boolean NOT NULL,
    rating double precision,
    "countryCode" text,
    "directorId" integer,
    "userId" integer NOT NULL
);


ALTER TABLE public."Movie" OWNER TO postgres;

--
-- TOC entry 228 (class 1259 OID 56520)
-- Name: MovieActors; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."MovieActors" (
    "actorId" integer NOT NULL,
    "movieId" integer NOT NULL
);


ALTER TABLE public."MovieActors" OWNER TO postgres;

--
-- TOC entry 230 (class 1259 OID 56530)
-- Name: MovieAwards; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."MovieAwards" (
    "movieId" integer NOT NULL,
    "awardId" integer NOT NULL
);


ALTER TABLE public."MovieAwards" OWNER TO postgres;

--
-- TOC entry 229 (class 1259 OID 56525)
-- Name: MovieGenres; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."MovieGenres" (
    "genreId" integer NOT NULL,
    "movieId" integer NOT NULL
);


ALTER TABLE public."MovieGenres" OWNER TO postgres;

--
-- TOC entry 226 (class 1259 OID 56511)
-- Name: Movie_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Movie_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Movie_id_seq" OWNER TO postgres;

--
-- TOC entry 5023 (class 0 OID 0)
-- Dependencies: 226
-- Name: Movie_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Movie_id_seq" OWNED BY public."Movie".id;


--
-- TOC entry 232 (class 1259 OID 56536)
-- Name: Review; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Review" (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    "movieId" integer NOT NULL,
    content text NOT NULL,
    rating integer NOT NULL,
    "approvalStatus" boolean NOT NULL
);


ALTER TABLE public."Review" OWNER TO postgres;

--
-- TOC entry 231 (class 1259 OID 56535)
-- Name: Review_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Review_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Review_id_seq" OWNER TO postgres;

--
-- TOC entry 5024 (class 0 OID 0)
-- Dependencies: 231
-- Name: Review_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Review_id_seq" OWNED BY public."Review".id;


--
-- TOC entry 234 (class 1259 OID 56545)
-- Name: User; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."User" (
    id integer NOT NULL,
    username text NOT NULL,
    email text NOT NULL,
    password text,
    "photoProfile" text,
    provider text DEFAULT 'email'::text,
    role text DEFAULT 'writer'::text,
    "isVerified" boolean DEFAULT false NOT NULL,
    "verificationCode" text,
    "verificationCodeExpired" timestamp(3) without time zone DEFAULT (now() + '1 day'::interval),
    "verificationRequestDate" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP,
    "isSuspended" boolean DEFAULT false NOT NULL,
    "verificationResetPasswordCode" text,
    "verificationResetPasswordCodeExpired" timestamp(3) without time zone DEFAULT (now() + '1 day'::interval),
    "verificationResetPasswordRequestDate" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public."User" OWNER TO postgres;

--
-- TOC entry 233 (class 1259 OID 56544)
-- Name: User_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."User_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."User_id_seq" OWNER TO postgres;

--
-- TOC entry 5025 (class 0 OID 0)
-- Dependencies: 233
-- Name: User_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."User_id_seq" OWNED BY public."User".id;


--
-- TOC entry 216 (class 1259 OID 56459)
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO postgres;

--
-- TOC entry 4791 (class 2604 OID 56497)
-- Name: Actor id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Actor" ALTER COLUMN id SET DEFAULT nextval('public."Actor_id_seq"'::regclass);


--
-- TOC entry 4790 (class 2604 OID 56488)
-- Name: Award id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Award" ALTER COLUMN id SET DEFAULT nextval('public."Award_id_seq"'::regclass);


--
-- TOC entry 4792 (class 2604 OID 56506)
-- Name: Director id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Director" ALTER COLUMN id SET DEFAULT nextval('public."Director_id_seq"'::regclass);


--
-- TOC entry 4789 (class 2604 OID 56479)
-- Name: Genre id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Genre" ALTER COLUMN id SET DEFAULT nextval('public."Genre_id_seq"'::regclass);


--
-- TOC entry 4793 (class 2604 OID 56515)
-- Name: Movie id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Movie" ALTER COLUMN id SET DEFAULT nextval('public."Movie_id_seq"'::regclass);


--
-- TOC entry 4794 (class 2604 OID 56539)
-- Name: Review id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Review" ALTER COLUMN id SET DEFAULT nextval('public."Review_id_seq"'::regclass);


--
-- TOC entry 4795 (class 2604 OID 56548)
-- Name: User id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."User" ALTER COLUMN id SET DEFAULT nextval('public."User_id_seq"'::regclass);


--
-- TOC entry 4999 (class 0 OID 56494)
-- Dependencies: 223
-- Data for Name: Actor; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Actor" (id, name, "birthDate", "photoUrl", "countryCode") FROM stdin;
137905	Bill Skarsgård	1990-08-09 00:00:00	https://image.tmdb.org/t/p/w500/7PSShz1Ht0qK2kqzC0jC31ktKPI.jpg	SE
1503200	FKA twigs	1988-01-16 00:00:00	https://image.tmdb.org/t/p/w500/oQUWQaZ0zFP0LxYMMrQiiZsnVoS.jpg	GB
6413	Danny Huston	1962-05-14 00:00:00	https://image.tmdb.org/t/p/w500/7Wdh73SltnllH4KVd64PvqKQ5NJ.jpg	IT
212815	Laura Birn	1981-04-25 00:00:00	https://image.tmdb.org/t/p/w500/7aFAUPKj1joqQ2VOWOuGh88biuH.jpg	FI
1674734	Jordan Bolger	1994-11-09 00:00:00	https://image.tmdb.org/t/p/w500/zGSxXrllgm3MNVT0jjvnAQFacPS.jpg	GB
3578843	Isabella Wei	2004-05-01 00:00:00	https://image.tmdb.org/t/p/w500/1I8orviIp6GXv7m3jZPtf64M8nw.jpg	HK
20667	Sami Bouajila	1966-05-12 00:00:00	https://image.tmdb.org/t/p/w500/xq8TMMCA4RI2omGxbPtLVsBMWX8.jpg	FR
993074	David Bowles	1971-04-30 00:00:00	https://image.tmdb.org/t/p/w500/bJFHfEI7VxmfhHw7esTIS0QVeTK.jpg	FR
1857604	Dukagjin Podrimaj	1986-01-02 00:00:00	https://image.tmdb.org/t/p/w500/dT0SxaqOjZiWtdMbnp2D1gRonnf.jpg	XK
231246	Karel Dobrý	1969-05-02 00:00:00	https://image.tmdb.org/t/p/w500/mcvTqsqIPTVZiT4saALPljNUQ5B.jpg	XC
10859	Ryan Reynolds	1976-10-23 00:00:00	https://image.tmdb.org/t/p/w500/algQ1VEno2W9SesoArWcZTeF617.jpg	CA
6968	Hugh Jackman	1968-10-12 00:00:00	https://image.tmdb.org/t/p/w500/4Xujtewxqt6aU0Y81tsS9gkjizk.jpg	AU
2324569	Emma Corrin	1995-12-13 00:00:00	https://image.tmdb.org/t/p/w500/wqGOVOsHzZaHeHymIS40elGCnY0.jpg	GB
15576	Matthew Macfadyen	1974-10-17 00:00:00	https://image.tmdb.org/t/p/w500/2FF3Yjxd7DYR4EIJL6s2GpKDMkJ.jpg	GB
1464650	Dafne Keen	2005-01-04 00:00:00	https://image.tmdb.org/t/p/w500/g325OIjIHrFr0te8ewPfhKQ2SKj.jpg	ES
15277	Jon Favreau	1966-10-19 00:00:00	https://image.tmdb.org/t/p/w500/tnx7iMVydPQXGOoLsxXl84PXtbA.jpg	US
54882	Morena Baccarin	1979-06-02 00:00:00	https://image.tmdb.org/t/p/w500/kBSKKaOtsqIzZPhtEeHfCBmhWl9.jpg	BR
1091324	Rob Delaney	1977-01-19 00:00:00	https://image.tmdb.org/t/p/w500/xirfT1znRkkughLiPemKu3NhkKQ.jpg	US
122750	Leslie Uggams	1943-05-25 00:00:00	https://image.tmdb.org/t/p/w500/peLaqLcs3y2WY4TbrLOXQGt9I8S.jpg	US
9278	Jennifer Garner	1972-04-17 00:00:00	https://image.tmdb.org/t/p/w500/ftymEXqdTnXfaI6dGd9qrJoFOSE.jpg	US
10814	Wesley Snipes	1962-07-31 00:00:00	https://image.tmdb.org/t/p/w500/81D6oJ81kiQ5xnEHhaHrY29ntdO.jpg	US
38673	Channing Tatum	1980-04-26 00:00:00	https://image.tmdb.org/t/p/w500/4TpgnS6l8YUXSne9Av9nda6mjxY.jpg	US
16828	Chris Evans	1981-06-13 00:00:00	https://image.tmdb.org/t/p/w500/3bOGNsHlrswhyW79uvIHH1V43JI.jpg	US
73968	Henry Cavill	1983-05-05 00:00:00	https://image.tmdb.org/t/p/w500/iWdKjMry5Pt7vmxU7bmOQsIUyHa.jpg	US
134774	Wunmi Mosaku	1986-07-31 00:00:00	https://image.tmdb.org/t/p/w500/mWDsVCo9sBcekrsjUTsoCFLhtYt.jpg	NG
11022	Aaron Stanford	1976-12-27 00:00:00	https://image.tmdb.org/t/p/w500/xt2c0vdTb6UmSFq6fl09iCcIFve.jpg	US
9832	Tyler Mane	1966-12-08 00:00:00	https://image.tmdb.org/t/p/w500/h5knoBWStVv7a0FKPwfKV7f7Ez1.jpg	CA
1109702	Karan Soni	1989-01-08 00:00:00	https://image.tmdb.org/t/p/w500/t3eNrzRKy3wTVCUiEp002UXbjxX.jpg	IN
1492326	Brianna Hildebrand	1996-08-14 00:00:00	https://image.tmdb.org/t/p/w500/8lGwV4rMQReWMlsXhLBYMRTYzTA.jpg	US
230660	Shioli Kutsuna	1992-12-22 00:00:00	https://image.tmdb.org/t/p/w500/5EdMbcRIemzLszjEr36Ic0Obmdb.jpg	AU
80507	Stefan Kapicic	1978-12-01 00:00:00	https://image.tmdb.org/t/p/w500/6qHO7ckiyjLNOmW0v5RZj1MpLBj.jpg	DE
215887	Randal Reeder	1971-11-27 00:00:00	https://image.tmdb.org/t/p/w500/eJfW7w36Vl8dEnN9T2dnlkUReWG.jpg	US
1610940	Lewis Tan	1987-02-04 00:00:00	https://image.tmdb.org/t/p/w500/ik347wakcZRfULiLbjGJpRcqSQz.jpg	GB
963257	Sonita Henry	1977-01-23 00:00:00	https://image.tmdb.org/t/p/w500/oIBILFSVqHT2warKlXSPDML3llI.jpg	GB
4698632	Ollie Palmer	1992-01-21 00:00:00	https://image.tmdb.org/t/p/w500/kICsR18nsLMjxMrIWjJKtOsAkJj.jpg	GB
167008	Greg Hemphill	1969-12-14 00:00:00	https://image.tmdb.org/t/p/w500/juE0ZmdUbxfMBhtOz9LBV8MiLKH.jpg	GB
3158217	Aaron W Reed	1981-09-12 00:00:00	https://image.tmdb.org/t/p/w500/e9dW9ezNxeGEu8MnQ1NTOz3PM93.jpg	US
78597	Rob McElhenney	1977-04-14 00:00:00	https://image.tmdb.org/t/p/w500/gcep3ItyxaZ3ljH1IS6Lfkm8IAs.jpg	US
59175	Blake Lively	1987-08-25 00:00:00	https://image.tmdb.org/t/p/w500/rkGVjd6wImtgjOCi0IpeffdEWtb.jpg	US
4846410	Inez Reynolds	2016-09-30 00:00:00	https://image.tmdb.org/t/p/w500/5LLlPfq78KnOGlMFGlcyDSKunRG.jpg	US
51797	Nathan Fillion	1971-03-27 00:00:00	https://image.tmdb.org/t/p/w500/6arEYF9gD9mqjwGXv1QfqmLw445.jpg	CA
10297	Matthew McConaughey	1969-11-04 00:00:00	https://image.tmdb.org/t/p/w500/rUxLWWCDUF8RnDaocSqrVDJ2MS1.jpg	US
74568	Chris Hemsworth	1983-08-11 00:00:00	https://image.tmdb.org/t/p/w500/piQGdoIQOF3C1EI5cbYZLAW1gfj.jpg	AU
2423284	Billy Clements	1984-12-09 00:00:00	https://image.tmdb.org/t/p/w500/nipJ22DXJBsdM1teQodwop42U6S.jpg	GB
1674196	Harry Holland	1999-02-14 00:00:00	https://image.tmdb.org/t/p/w500/8gsfzGUySLLaT0GCzuWxAfLWOWS.jpg	GB
88675	Justin Baldoni	1984-01-24 00:00:00	https://image.tmdb.org/t/p/w500/2sc6iUWljADnqtjsaKU3s6f0DGW.jpg	US
1855143	Brandon Sklenar	1990-06-26 00:00:00	https://image.tmdb.org/t/p/w500/unM5wewbqrmE2cf6DSyyKLeA05I.jpg	US
213001	Jenny Slate	1982-03-25 00:00:00	https://image.tmdb.org/t/p/w500/iNpXig5Djkh5moYG4TCekIATs5B.jpg	US
552252	Hasan Minhaj	1985-09-23 00:00:00	https://image.tmdb.org/t/p/w500/6vHHhLnbKBCPmYc90qAV2Cde95F.jpg	US
26930	Amy Morton	1959-04-03 00:00:00	https://image.tmdb.org/t/p/w500/2qLHQpxvFMlMKf7qeBKGRTsJF4S.jpg	US
9013	Kevin McKidd	1973-08-09 00:00:00	https://image.tmdb.org/t/p/w500/ekCsHT7eXmqy9aqOVLuMb7fCqMN.jpg	GB
1388470	Alex Neustaedter	1998-03-29 00:00:00	https://image.tmdb.org/t/p/w500/nuPCIJ3bV5CK1qq3MOFgQpNt2KR.jpg	US
2256	Robert Clohessy	1958-06-10 00:00:00	https://image.tmdb.org/t/p/w500/lhNUk6PF0mNhgbvTDxXfIy4uhRe.jpg	US
15905	Robyn Lively	1972-02-07 00:00:00	https://image.tmdb.org/t/p/w500/tz4oKXOkJhHZezaQUTgo66gPn77.jpg	US
209200	Emily Baldoni	1984-08-03 00:00:00	https://image.tmdb.org/t/p/w500/zJoIHD7MWd0jTPszxOjHskm85Xj.jpg	SE
2118672	Adam Mondschein	1976-05-06 00:00:00	https://image.tmdb.org/t/p/w500/sGIztpuSVvAwBw4E0PTeZuTjRup.jpg	US
131125	Steve Monroe	1972-10-30 00:00:00	https://image.tmdb.org/t/p/w500/8dwHkvyiWcq1ntIDLNLwRJnw8Z3.jpg	US
56322	Amy Poehler	1971-09-16 00:00:00	https://image.tmdb.org/t/p/w500/rwmvRonpluV6dCPiQissYrchvSD.jpg	US
1903874	Maya Hawke	1998-07-08 00:00:00	https://image.tmdb.org/t/p/w500/evjbbHM1bzA6Ma5Ptjwa4WkYkkj.jpg	US
3020876	Kensington Tallman	2008-08-06 00:00:00	https://image.tmdb.org/t/p/w500/tBqawwg2VJq1V4mZjAOFQ7fnXNW.jpg	US
51998	Liza Lapira	1981-12-03 00:00:00	https://image.tmdb.org/t/p/w500/o3jvQAGWtxi5rEycslhC6CY8BWX.jpg	US
25147	Tony Hale	1970-09-30 00:00:00	https://image.tmdb.org/t/p/w500/ar4uapp4w5wMkThZcqWUNMSTO8z.jpg	US
59258	Lewis Black	1948-08-30 00:00:00	https://image.tmdb.org/t/p/w500/1Yvp5dwnJ1UI0KtXGNhZ384wTgv.jpg	US
169200	Phyllis Smith	1949-08-15 00:00:00	https://image.tmdb.org/t/p/w500/h9w9pQbiderRWAC2mi7spjzuIGz.jpg	US
2195140	Ayo Edebiri	1995-10-03 00:00:00	https://image.tmdb.org/t/p/w500/V9TNVjNkAJIiCHLTzcnHLktnPf.jpg	US
1469135	Lilimar	2000-06-02 00:00:00	https://image.tmdb.org/t/p/w500/cRerzbUsq0TiWe6z0VGtLHz4JOa.jpg	VE
586757	Adèle Exarchopoulos	1993-11-22 00:00:00	https://image.tmdb.org/t/p/w500/zlto2xvsdzLnfzoZNnS6txzNO5l.jpg	FR
2882	Diane Lane	1965-01-22 00:00:00	https://image.tmdb.org/t/p/w500/tUPAKAtstqeQrAKhkQge9jV7Owz.jpg	US
6677	Kyle MacLachlan	1959-02-22 00:00:00	https://image.tmdb.org/t/p/w500/dNGPjhInyADHjiiYJAWsSUAIC7o.jpg	US
1294982	Paul Walter Hauser	1986-10-15 00:00:00	https://image.tmdb.org/t/p/w500/hV2oiKF2xlDMXtuq3Si1TA4b6DA.jpg	US
111513	Yvette Nicole Brown	1971-08-12 00:00:00	https://image.tmdb.org/t/p/w500/ghdt5K3noAdmWV2YFLWegLRuK3T.jpg	US
1260038	Ron Funches	1983-03-12 00:00:00	https://image.tmdb.org/t/p/w500/DtULMxPvAlOKfrwISxdEffIKlk.jpg	US
1756597	James Austin Johnson	1989-07-19 00:00:00	https://image.tmdb.org/t/p/w500/g9y0aABiKtB1FOIKmklDlgRpDof.jpg	US
3602293	Yong Yea	1992-03-27 00:00:00	https://image.tmdb.org/t/p/w500/mZX1dsTJBtiSE5LMCGAdq94UZsP.jpg	KR
137262	Steve Purcell	1961-10-01 00:00:00	https://image.tmdb.org/t/p/w500/8wdCJVDq7v4g5N9Qkv8D87B3Xne.jpg	US
64181	Dave Goelz	1946-07-16 00:00:00	https://image.tmdb.org/t/p/w500/gVwJIPP0cohKEFwgymTmzzkSX7E.jpg	US
145446	Kirk R. Thatcher	1962-02-14 00:00:00	https://image.tmdb.org/t/p/w500/7rkO6MLFgcPzbLV4mpwLu2r6M3S.jpg	US
7908	Frank Oz	1944-05-25 00:00:00	https://image.tmdb.org/t/p/w500/mb2JbT8s6LIgaxj6QTph0NW1pmI.jpg	GB
1226294	Paula Pell	1963-04-15 00:00:00	https://image.tmdb.org/t/p/w500/aQZsAcaac2zzLBMhb15O2mrSrpx.jpg	US
35515	June Squibb	1929-11-06 00:00:00	https://image.tmdb.org/t/p/w500/iohsuSDPcVAFr0NKQifM7qEJDFt.jpg	US
12890	Pete Docter	1968-10-09 00:00:00	https://image.tmdb.org/t/p/w500/xz46mHzo8apkVMxmrkMQvqakOL0.jpg	US
7907	John Ratzenberger	1947-04-06 00:00:00	https://image.tmdb.org/t/p/w500/oRtDEOuIO1yDhTz5dORBdxXuLMO.jpg	US
1224130	Sarayu Blue	1975-03-07 00:00:00	https://image.tmdb.org/t/p/w500/zW1G9wSJ03iaSDToFxkMJaqGZLs.jpg	US
1237	Flea	1962-10-16 00:00:00	https://image.tmdb.org/t/p/w500/nGQE7xf4YJeqO0a4lpFebhwI7R9.jpg	AU
452205	Bobby Moynihan	1978-01-31 00:00:00	https://image.tmdb.org/t/p/w500/gOvwNz5joi5yWJ7dAhuF8WA2aas.jpg	US
4578519	Kendall Coyne Schofield	1992-05-25 00:00:00	https://image.tmdb.org/t/p/w500/hkFryqJW9IYDlZRlDfmINbvVvKy.jpg	US
4495	Steve Carell	1962-08-16 00:00:00	https://image.tmdb.org/t/p/w500/dzJtsLspH5Bf8Tvw7OQC47ETNfJ.jpg	US
41091	Kristen Wiig	1973-08-22 00:00:00	https://image.tmdb.org/t/p/w500/6U6UGztBwk7c4lg8n5BS5QOByot.jpg	US
23659	Will Ferrell	1967-07-16 00:00:00	https://image.tmdb.org/t/p/w500/xYPM1OOLXZguj4FsgmOzTSUXaXd.jpg	US
63522	Sofía Vergara	1972-07-10 00:00:00	https://image.tmdb.org/t/p/w500/7VZL8Lupwf3rgNyc7DC3m0XNtvq.jpg	CO
17743	Miranda Cosgrove	1993-05-14 00:00:00	https://image.tmdb.org/t/p/w500/qIGeoyXEVu1LxTH34TWx1YSHyQr.jpg	US
124750	Dana Gaier	1997-02-05 00:00:00	https://image.tmdb.org/t/p/w500/hw3Ou8cj22MLXl8QKrL8vcidcCB.jpg	US
124747	Pierre Coffin	1967-03-16 00:00:00	https://image.tmdb.org/t/p/w500/eAA9uWRqHlm1LT3nZfXb7UuPfVb.jpg	FR
124748	Chris Renaud	1966-12-05 00:00:00	https://image.tmdb.org/t/p/w500/sumBJgBqRkK4XEJ2JYXpad3MTJs.jpg	US
4581	Steve Coogan	1965-10-14 00:00:00	https://image.tmdb.org/t/p/w500/tT7OXc2qA6hlREHXdwGLp0XihzA.jpg	GB
58769	Stephen Colbert	1964-05-13 00:00:00	https://image.tmdb.org/t/p/w500/zQ6pvfqIqYiV4TB7lDoaJL52H93.jpg	US
2000658	Chloe Fineman	1988-07-20 00:00:00	https://image.tmdb.org/t/p/w500/iSVuuIRcamYuwYfXwSKPGWSA0ay.jpg	US
125025	Joey King	1999-07-30 00:00:00	https://image.tmdb.org/t/p/w500/td1mTuzaajIzN9EjK5Bd6ly6WBO.jpg	US
35159	Laraine Newman	1952-03-02 00:00:00	https://image.tmdb.org/t/p/w500/62i0sFf0IwmkQkBW9Osucgx8qGr.jpg	US
31531	John DiMaggio	1968-09-04 00:00:00	https://image.tmdb.org/t/p/w500/qcbQe71nSlULDsP1OxTqltEKFbl.jpg	US
15762	Tara Strong	1973-02-12 00:00:00	https://image.tmdb.org/t/p/w500/8Z86FfWbnUJnyFTcLa9MpVVFhMh.jpg	CA
1304658	Romesh Ranganathan	1978-03-27 00:00:00	https://image.tmdb.org/t/p/w500/kZ4g2kvgx8MHKLEQ7DAQ07ta2Lz.jpg	GB
1035822	Brad Ableson	1975-09-02 00:00:00	https://image.tmdb.org/t/p/w500/cOnT6KuNNjwXKmCNw5nmOFPsrsj.jpg	US
230436	Barbara Harris	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/d1BGeZT2b81Wa9gCOPdrXGWUtmR.jpg	US
4815785	Eden Boulton	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/p6VnFY6NRyF1luVn4oSoob78Io3.jpg	US
1541380	JP Karliak	1981-05-11 00:00:00	https://image.tmdb.org/t/p/w500/7Rc3n8KmKUaztqfsIpddO1a2ggn.jpg	US
64948	Cathy Cavadini	1961-04-21 00:00:00	https://image.tmdb.org/t/p/w500/9sThx5Ajdy1aBJSppQDbTkmANlA.jpg	US
1217803	Arif S. Kinchen	1973-02-07 00:00:00	https://image.tmdb.org/t/p/w500/rY16iqdy5lJIyEMoL941NdzUlEr.jpg	US
105191	Will Collyer	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/gxOV12lRnBh6FQUjOxtpRyo9cXx.jpg	US
98429	Jeremy Maxwell	1975-04-30 00:00:00	https://image.tmdb.org/t/p/w500/haG5rF1ogYIsQpIpAQ74Q2P1ek0.jpg	US
65640	Khary Payton	1972-05-16 00:00:00	https://image.tmdb.org/t/p/w500/4PgEGuAb2KkaRb7P9PdK40pPeVH.jpg	US
56348	John DeMita	1959-01-06 00:00:00	https://image.tmdb.org/t/p/w500/cIUd7zTcGzJ0CMSkL4SUOee3gME.jpg	US
53209	Aaron Fors	1989-01-30 00:00:00	https://image.tmdb.org/t/p/w500/cZuAdf50vu237WYIKryYCLUDiD4.jpg	US
1865803	Isaac Robinson-Smith	1989-12-15 00:00:00	https://image.tmdb.org/t/p/w500/ceNxqevAX7c9uAzl8IthjG3slqy.jpg	US
938425	Willow Geer	1981-03-02 00:00:00	https://image.tmdb.org/t/p/w500/kreFbFc095mvIRI89FIHUlWOBuo.jpg	US
61536	Aaron Hendry	1973-10-30 00:00:00	https://image.tmdb.org/t/p/w500/lOA25S5b1fkBL6fnG3u33mFtTdE.jpg	US
41088	Jason Segel	1980-01-18 00:00:00	https://image.tmdb.org/t/p/w500/aG6tVNSbl1YEjN65G3luFYnWbUM.jpg	US
4589	Benjamin Bratt	1963-12-16 00:00:00	https://image.tmdb.org/t/p/w500/y1yVEcSwJS8HtuQmOxk0vAvyGbH.jpg	US
34517	Trey Parker	1969-10-19 00:00:00	https://image.tmdb.org/t/p/w500/pVEfyxGOBoKoirRZtmSsJ7PX91V.jpg	US
1537686	Naomi Ackie	1992-11-02 00:00:00	https://image.tmdb.org/t/p/w500/kRJHgH4ATdFrHmWS48enQn2qiZj.jpg	GB
61178	Alia Shawkat	1989-04-18 00:00:00	https://image.tmdb.org/t/p/w500/aUc0hlILKfDKhlKnWQliGjkQL9a.jpg	US
2224	Christian Slater	1969-08-18 00:00:00	https://image.tmdb.org/t/p/w500/6ww3uweEEXMlvtNjTlgBHxLErPF.jpg	US
35548	Simon Rex	1974-07-20 00:00:00	https://image.tmdb.org/t/p/w500/auAl58OL05S6fVXNz7neiGF8b8N.jpg	US
1371297	Adria Arjona	1992-04-25 00:00:00	https://image.tmdb.org/t/p/w500/gr4J6p49rZ7aBcW9NJ8yZYLJoe8.jpg	PR
9640	Haley Joel Osment	1988-04-10 00:00:00	https://image.tmdb.org/t/p/w500/2rnMTQB9Q3vLtmRyyUaenVwSgfY.jpg	US
3514776	Liz Caribel Sierra	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/o19U0aAcLwvf6mYtD4VpmKkNtqH.jpg	US
3560034	Levon Hawke	2002-01-15 00:00:00	https://image.tmdb.org/t/p/w500/1WqRWDunsCfpJo3pxUzxc7OzRMW.jpg	US
2599167	Trew Mullen	1996-10-18 00:00:00	https://image.tmdb.org/t/p/w500/6iWFgelyzHFMvnZFZnyA5N3mbuU.jpg	US
16935	Geena Davis	1956-01-21 00:00:00	https://image.tmdb.org/t/p/w500/hqzWAoGpUPqaiK2BuvtSWe4563h.jpg	US
1985	Saul Williams	1972-02-29 00:00:00	https://image.tmdb.org/t/p/w500/5VQZl7h6jVyx6hSttUZwtYBVrYy.jpg	US
43373	Aaron Himelstein	1985-10-10 00:00:00	https://image.tmdb.org/t/p/w500/rIZXqniTmZ2FE6YvCjRJESycW6P.jpg	US
2221430	Mika Kubo	1986-01-01 00:00:00	https://image.tmdb.org/t/p/w500/vgnfnM5SdLNvHquKbyTyxXFRjeK.jpg	US
976042	Nuria Bages	1950-12-23 00:00:00	https://image.tmdb.org/t/p/w500/95MZyacVqJZeMNQX5m3yisTrfdj.jpg	MX
37153	Zoë Kravitz	1988-12-01 00:00:00	https://image.tmdb.org/t/p/w500/A8Ig9UHh8NSiUGg3xChcoF7749w.jpg	US
77069	Lenny Kravitz	1964-05-26 00:00:00	https://image.tmdb.org/t/p/w500/pIoGuEUax5aeH3PKuaYK9wKEeoj.jpg	US
81685	Frank Grillo	1965-06-08 00:00:00	https://image.tmdb.org/t/p/w500/br2nPzelch2Tb3pZHnYAbXng7cz.jpg	US
418	Robert Patrick	1958-11-05 00:00:00	https://image.tmdb.org/t/p/w500/qRv2Es9rZoloullTbzss3I5j1Mp.jpg	US
25702	Rhona Mitra	1976-08-09 00:00:00	https://image.tmdb.org/t/p/w500/1YThpok3Wk3BBy0pcUTcpuZyOBB.jpg	GB
1457026	Urs Rechn	1978-01-18 00:00:00	https://image.tmdb.org/t/p/w500/kFeVHoL8FKSOrw9spcnO2kz9fF6.jpg	DE
80371	Steven Elder	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/gnx8icv0FQ8f4qZFPFLpoWQoKFX.jpg	GB
1434242	Victor Solé	1969-11-30 00:00:00	https://image.tmdb.org/t/p/w500/cTeS4SRMq9IUHKTC1aCHRh22Vhd.jpg	ES
142447	Seydina Baldé	1977-09-23 00:00:00	https://image.tmdb.org/t/p/w500/2qc4Lkf1u4a35m0YG8UvaNY5R1s.jpg	FR
985030	Marc Hoang	1967-10-22 00:00:00	https://image.tmdb.org/t/p/w500/o5ahH1ZqIEYzyl4oz6ofvs3Q6hv.jpg	FR
81671	Mark Strange	1973-10-08 00:00:00	https://image.tmdb.org/t/p/w500/1oYGZnDhIHpJHonuCCwKSeTN1mR.jpg	GB
29406	Joey Ansah	1982-11-24 00:00:00	https://image.tmdb.org/t/p/w500/c45UKk6xo7Y3RMSTzjuTmqlklqh.jpg	GB
1301638	Lee Charles	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/hPcEeF8mG9PiOJmnduVjq9yH9jD.jpg	GB
1493724	Steffi Thake	1990-11-29 00:00:00	https://image.tmdb.org/t/p/w500/xksMWCg0UmSWu6BswyERfZXjwEp.jpg	MT
17353	Matthew Marsh	1954-07-08 00:00:00	https://image.tmdb.org/t/p/w500/9NfvGnHBZI4CwyPIOgv8qPMIaAv.jpg	GB
75913	Ha Jung-woo	1978-03-11 00:00:00	https://image.tmdb.org/t/p/w500/alHcDyLYbc6C2X9yOHw8mNHZVGu.jpg	KR
1207629	Yeo Jin-goo	1997-08-13 00:00:00	https://image.tmdb.org/t/p/w500/f9Gj12cCk66vdIaDVjltTGAZPC9.jpg	KR
1020859	Sung Dong-il	1967-04-27 00:00:00	https://image.tmdb.org/t/p/w500/9VLRIvOyQSHkpJaeaBcmHzcEUQn.jpg	KR
1466233	Chae Soo-bin	1994-07-10 00:00:00	https://image.tmdb.org/t/p/w500/bf38XUHvsgz1IVwtHX6N8HLDMa.jpg	KR
3003147	Moon You-kang	1996-02-22 00:00:00	https://image.tmdb.org/t/p/w500/69bOe5fyGaUFZy7JUsq40hWd75F.jpg	KR
1352930	Kim Sun-young	1976-04-10 00:00:00	https://image.tmdb.org/t/p/w500/e5dA924TS68xdYGKFBvBLPGAIRY.jpg	KR
1108037	Lim Se-mi	1987-05-29 00:00:00	https://image.tmdb.org/t/p/w500/hmDpdTlTj1KX9AlgmBouNWcg09F.jpg	KR
118976	Kim Dong-wook	1983-07-29 00:00:00	https://image.tmdb.org/t/p/w500/zN4UoEuFIbjuzkgvtvQtziG7Rtq.jpg	KR
1295417	Kim Jong-soo	1964-11-30 00:00:00	https://image.tmdb.org/t/p/w500/bcZLy3t0EXvRY4EWsD5BoEt3xOM.jpg	KR
2189618	Chung Ye-jin	1994-11-02 00:00:00	https://image.tmdb.org/t/p/w500/2GJBcw3WhyJFgPJWzAVE9Qs4NKO.jpg	KR
2704194	Moon Woo-jin	2009-02-18 00:00:00	https://image.tmdb.org/t/p/w500/jAk8EhqNnflSWltcJuv5nE4MpTu.jpg	KR
1078674	Park Ji-hwan	1980-09-05 00:00:00	https://image.tmdb.org/t/p/w500/yCxBKivLmLaoziCveVbo89aW0zW.jpg	KR
2232	Michael Keaton	1951-09-05 00:00:00	https://image.tmdb.org/t/p/w500/82rxrGxOqQW2NjKsIiNbDYHFfmb.jpg	US
1920	Winona Ryder	1971-10-29 00:00:00	https://image.tmdb.org/t/p/w500/5yteOSY2lgGOgSWmRTlxqfY59MS.jpg	US
974169	Jenna Ortega	2002-09-27 00:00:00	https://image.tmdb.org/t/p/w500/mNLx63JbIAHyfb3YNeVvGP9jfcv.jpg	US
11514	Catherine O'Hara	1954-03-04 00:00:00	https://image.tmdb.org/t/p/w500/gI2RyymLJ9ZrhEyJSD5EqSvFpCX.jpg	CA
15009	Justin Theroux	1971-08-10 00:00:00	https://image.tmdb.org/t/p/w500/vnI9L0rXBAw1HeC0Q8hJGeJMGAW.jpg	US
28782	Monica Bellucci	1964-09-30 00:00:00	https://image.tmdb.org/t/p/w500/tkfVKKNzfDEXOAfiSB3IrcNAZ4A.jpg	IT
5293	Willem Dafoe	1955-07-22 00:00:00	https://image.tmdb.org/t/p/w500/ui8e4sgZAwMPi3hzEO53jyBJF9B.jpg	US
518	Danny DeVito	1944-11-16 00:00:00	https://image.tmdb.org/t/p/w500/gNHF2SNXFFCRqwIQ2Xv6r6aV6UD.jpg	US
3706720	Arthur Conti	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/pnO8qBwvLJfN54UaKsy0QQlAc8u.jpg	GB
34065	Santiago Cabrera	1978-05-05 00:00:00	https://image.tmdb.org/t/p/w500/ig1nyOlNKXsRy8xggYPLMcohpJA.jpg	VE
39659	Burn Gorman	1974-09-01 00:00:00	https://image.tmdb.org/t/p/w500/nl5V2mpfTnp8YSShtVYjgNjnv4M.jpg	US
1160625	Amy Nuttall	1982-06-07 00:00:00	https://image.tmdb.org/t/p/w500/uQS399fI8KdUgWKu3JtQi4xjInt.jpg	GB
1401548	Rebecca O'Mara	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/uIlgKmFDIp5jWuBaGlkeCTor4Cn.jpg	IE
225202	Stephen K. Amos	1967-12-03 00:00:00	https://image.tmdb.org/t/p/w500/7rE07wLicCw50vwxV2m5He9NOfp.jpg	GB
1087066	James Fisher	1972-04-20 00:00:00	https://image.tmdb.org/t/p/w500/wdTQ7dif4N72Ijxp6vdxxBK95UP.jpg	GB
112	Cate Blanchett	1969-05-14 00:00:00	https://image.tmdb.org/t/p/w500/vUuEHiAR0eD3XEJhg2DWIjymUAA.jpg	AU
55638	Kevin Hart	1979-07-06 00:00:00	https://image.tmdb.org/t/p/w500/byiNydUlM6oP8diA7WMvYbNM7a1.jpg	US
25616	Edgar Ramírez	1977-03-25 00:00:00	https://image.tmdb.org/t/p/w500/7VZnIAI7Yye0rfs7fPM5wI2CI6N.jpg	VE
8944	Jamie Lee Curtis	1958-11-22 00:00:00	https://image.tmdb.org/t/p/w500/9KWvPVeiLOXlOGl0XVyHZtJWQtx.jpg	US
1767250	Ariana Greenblatt	2007-08-27 00:00:00	https://image.tmdb.org/t/p/w500/f3cguEmUiHQz1lXSMC95dG5f4YG.jpg	US
1998541	Florian Munteanu	1990-10-13 00:00:00	https://image.tmdb.org/t/p/w500/lE26A169mjuwW5x0zx2wW9Q9o2w.jpg	DE
210665	Janina Gavankar	1980-11-29 00:00:00	https://image.tmdb.org/t/p/w500/3lj5jZFvjjc4XD6pdykMdgyPREp.jpg	US
70851	Jack Black	1969-08-28 00:00:00	https://image.tmdb.org/t/p/w500/rtCx0fiYxJVhzXXdwZE2XRTfIKE.jpg	US
1356013	Benjamin Byron Davis	1972-06-21 00:00:00	https://image.tmdb.org/t/p/w500/5WHDh9l9Ylsbf5ZKt3nQ4FRweUi.jpg	US
2074238	Olivier Richters	1989-09-05 00:00:00	https://image.tmdb.org/t/p/w500/8Zz5WYE1Muc3AX9daxCxgNTRE5.jpg	NL
11150	Gina Gershon	1962-06-10 00:00:00	https://image.tmdb.org/t/p/w500/pX6v6LmyWWVE2fiiTmQSmjDxOA4.jpg	US
198149	Bobby Lee	1971-09-17 00:00:00	https://image.tmdb.org/t/p/w500/90TyhVb7OfyHPmj3ZVX6hEjHGlD.jpg	US
58754	Haley Bennett	1988-01-07 00:00:00	https://image.tmdb.org/t/p/w500/8HRgGypSwHeI27ffmcAELNoxIOw.jpg	US
1422571	Steven Boyer	1985-06-01 00:00:00	https://image.tmdb.org/t/p/w500/3rt0I7SWke8YqSmtzySypnlR2vf.jpg	US
2758719	Harry Szovik	1978-01-29 00:00:00	https://image.tmdb.org/t/p/w500/zCj7D7T8mL2eXwozKerAvSDiG99.jpg	HU
1491583	Harry M. Ford	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/jgsqioqOaki7cBsFg2MevzKTGsu.jpg	US
2888	Will Smith	1968-09-25 00:00:00	https://image.tmdb.org/t/p/w500/9QD9DvQUF5t8ZVKpeoW4k2sFZ4D.jpg	US
78029	Martin Lawrence	1965-04-16 00:00:00	https://image.tmdb.org/t/p/w500/y3SQzIPUPJpdueb1DkbTYph68nk.jpg	DE
67599	Vanessa Hudgens	1988-12-14 00:00:00	https://image.tmdb.org/t/p/w500/ssFXWN5li5OWJLgUoFlUDY0ZyPc.jpg	US
23498	Alexander Ludwig	1992-05-07 00:00:00	https://image.tmdb.org/t/p/w500/unP5YUgEdECL2gMLs0zCNya6is6.jpg	CA
544442	Paola Nuñez	1978-04-08 00:00:00	https://image.tmdb.org/t/p/w500/5k8tBBvoV43iK6u0k2YUSVXPmuK.jpg	MX
58115	Eric Dane	1972-11-09 00:00:00	https://image.tmdb.org/t/p/w500/wlL8P2Oe56UOZSXaxjqy9ujscCN.jpg	US
65524	Ioan Gruffudd	1973-10-06 00:00:00	https://image.tmdb.org/t/p/w500/8fZ1h879lO5lcKt9SG2UIXisq1k.jpg	GB
2256312	Jacob Scipio	1993-01-10 00:00:00	https://image.tmdb.org/t/p/w500/gcZSJy9LZ8DUDP480Q2K1OhL1Ct.jpg	GB
1399166	Melanie Liburd	1987-11-11 00:00:00	https://image.tmdb.org/t/p/w500/diWkE87OnBDaXZkRLLkT78lTcI9.jpg	GB
74610	Tasha Smith	1971-02-28 00:00:00	https://image.tmdb.org/t/p/w500/viJnHL3BjQ5oqisXklQWGlh29Hx.jpg	US
62765	Rhea Seehorn	1972-05-12 00:00:00	https://image.tmdb.org/t/p/w500/g6niUzFMQOiAcSThWoGk0LlAQRP.jpg	US
1230868	Tiffany Haddish	1979-12-03 00:00:00	https://image.tmdb.org/t/p/w500/pvAYqQD4LXavzDkBqCrC4IgVBur.jpg	US
532	Joe Pantoliano	1951-09-12 00:00:00	https://image.tmdb.org/t/p/w500/cXMOad9KKVBK1lg8EjEbcNPn1OT.jpg	US
224235	DJ Khaled	1975-11-26 00:00:00	https://image.tmdb.org/t/p/w500/2aZXRm1ETaXx6wsVJ22kaUpCWJe.jpg	US
119869	John Salley	1964-05-16 00:00:00	https://image.tmdb.org/t/p/w500/efN5d1FEOVsnvxospYfvn9ebwsk.jpg	US
1516729	Bianca Bethune	1990-02-02 00:00:00	https://image.tmdb.org/t/p/w500/p3XdSCPD2pmoj52mAKDnl87fG2U.jpg	US
1578220	Levy Tran	1983-04-08 00:00:00	https://image.tmdb.org/t/p/w500/ungYHOdC0DETelUD8I6FR1bFdn.jpg	US
2089936	Steven Sean Garland	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/oeLWb6c9XnlKgV2pW5hB20ryuFe.jpg	US
4199450	Jewelianna Ramos-Ortiz	1999-10-02 00:00:00	https://image.tmdb.org/t/p/w500/6l18Lcxg9wmhPnwJ6O3w0FnxXRf.jpg	US
3081264	Jay Shetty	1987-11-06 00:00:00	https://image.tmdb.org/t/p/w500/mN0lKvfDjSaNByQXbDYPHzLxJAu.jpg	GB
58733	Jason Davis	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/thSH5TatER5b1WbgFpGt5YDdOu.jpg	US
3568034	Nathan Hesse	1990-07-24 00:00:00	https://image.tmdb.org/t/p/w500/d3cdL1xbsDr2nfi4nu5LxKjzaGQ.jpg	US
4433125	Joyner Lucas	1988-08-17 00:00:00	https://image.tmdb.org/t/p/w500/n95q8exFP5R8XqTyo2YrI0AhuZK.jpg	US
1303873	Jenna Kanell	1991-11-12 00:00:00	https://image.tmdb.org/t/p/w500/dzx7LYrEX5TnxSau43AZMYm5Mub.jpg	US
865	Michael Bay	1965-02-17 00:00:00	https://image.tmdb.org/t/p/w500/thkrvZJqUbA265Y16sKj7HAmXwV.jpg	US
1399841	Adil El Arbi	1988-06-30 00:00:00	https://image.tmdb.org/t/p/w500/hpl12TXFDUjzomftx7zST3M2aLg.jpg	BE
1399842	Bilall Fallah	1986-01-04 00:00:00	https://image.tmdb.org/t/p/w500/thwiN6FPRkCtzrP7PrmrwaEIFtv.jpg	BE
3416	Demi Moore	1962-11-11 00:00:00	https://image.tmdb.org/t/p/w500/brENIHiNrGUpoBMPqIEQwFNdIsc.jpg	US
1392137	Margaret Qualley	1994-10-23 00:00:00	https://image.tmdb.org/t/p/w500/jStNyMj3acpLuH48awLVLqqlyaV.jpg	US
6065	Dennis Quaid	1954-04-09 00:00:00	https://image.tmdb.org/t/p/w500/lMaDAJHzsKH7U3dln2B3kY3rOhE.jpg	US
584338	Tom Morton	1981-07-29 00:00:00	https://image.tmdb.org/t/p/w500/aOdP4niQX4ckaFwPQmbf0mlYTC5.jpg	GB
225161	Matthew Géczy	1964-08-23 00:00:00	https://image.tmdb.org/t/p/w500/z6E5VeyI12MigTCKiK3WLNAR3hI.jpg	US
1179888	Philip Schurer	1973-08-01 00:00:00	https://image.tmdb.org/t/p/w500/7fGa2ESs2wg7540VsOZnf4F3r56.jpg	GB
68842	John Cho	1972-06-16 00:00:00	https://image.tmdb.org/t/p/w500/4Lar4uy8gk78cEocq6ERPRFWt3e.jpg	KR
77795	Katherine Waterston	1980-03-03 00:00:00	https://image.tmdb.org/t/p/w500/zaqbXjr5jE1DnEoyAHokUDoCKOM.jpg	GB
30613	Keith Carradine	1949-08-08 00:00:00	https://image.tmdb.org/t/p/w500/5gayZWGqjTAVJXr1bXovk3oqOxW.jpg	US
2378813	Havana Rose Liu	1997-09-30 00:00:00	https://image.tmdb.org/t/p/w500/xt5jIhVekKpwZDbVuHJb8H4A6oM.jpg	US
1709431	Lukita Maxwell	2001-10-28 00:00:00	https://image.tmdb.org/t/p/w500/l9YXhH4yrsLLez9E08Nue7fSDv4.jpg	ID
83854	David Dastmalchian	1977-07-21 00:00:00	https://image.tmdb.org/t/p/w500/sF7yHISn8kuBy7T39gB5dMpObpk.jpg	US
453	Riki Lindhome	1979-03-05 00:00:00	https://image.tmdb.org/t/p/w500/sNLK8k5FfMSbmvu1lc15nCXUKvR.jpg	US
1891984	Ashley Romans	1992-12-28 00:00:00	https://image.tmdb.org/t/p/w500/jVZiQYt9tk4zPMm2CIndRqCu01t.jpg	US
1506297	Mason Shea Joyce	2010-06-01 00:00:00	https://image.tmdb.org/t/p/w500/93uP19JB418DQdTxbF0K3KECJLp.jpg	US
2941060	River Drosche	2011-06-14 00:00:00	https://image.tmdb.org/t/p/w500/iTAhv9HlH4ynfXY3fzni5obAfnL.jpg	US
76035	Todd Waring	1955-04-28 00:00:00	https://image.tmdb.org/t/p/w500/sChPo2fEUepBih1UUYQmZNMiYCb.jpg	US
1257671	Kim Woo-bin	1989-07-16 00:00:00	https://image.tmdb.org/t/p/w500/AjMMxxWbTNdafyWuY41xAHFPVou.jpg	KR
1024396	Kim Sung-kyun	1980-05-25 00:00:00	https://image.tmdb.org/t/p/w500/pii4fmXdkSEppsHSIhJ9jV5izX1.jpg	KR
2133923	Lee Jung-ok	1979-04-12 00:00:00	https://image.tmdb.org/t/p/w500/fMkBpHRElwNatevfGinSv248bYg.jpg	KR
4475212	Kim Yo-han	1994-07-23 00:00:00	https://image.tmdb.org/t/p/w500/eWhB8DN0YQGfIesZNJDzf9k87E5.jpg	KR
3229192	Kang Hyung-suk	1992-01-01 00:00:00	https://image.tmdb.org/t/p/w500/xclHffQgjyMTCO0KWTopkkDHvX5.jpg	KR
223348	Lee Hae-yeong	1970-09-07 00:00:00	https://image.tmdb.org/t/p/w500/pN1iaIOP2MBhIhqli6u08Gehuut.jpg	KR
231477	Kim Ji-young	1974-09-07 00:00:00	https://image.tmdb.org/t/p/w500/7bEs0Z6klajJZE3PWBAy5gh099D.jpg	KR
4256123	Kang Seung-ho	1993-04-23 00:00:00	https://image.tmdb.org/t/p/w500/paNUXzTKaxd4rWvdjxCs7Gvi0cS.jpg	KR
2396991	Son Sang-yeon	2002-04-02 00:00:00	https://image.tmdb.org/t/p/w500/gv2IG2mYJHD7aEQjMsDPIQulXz1.jpg	KR
3347250	Kim Yool-ho	1985-02-21 00:00:00	https://image.tmdb.org/t/p/w500/3xNaZtfDkOvR6tzu0qDE9JF1tuQ.jpg	KR
145989	Ji Jin-hee	1971-06-24 00:00:00	https://image.tmdb.org/t/p/w500/7O6u0vn1SafFgcyJwP4rJwBfvaR.jpg	KR
2097693	Lee Jung-hyun	1990-10-26 00:00:00	https://image.tmdb.org/t/p/w500/2LJKgRqFczkhRSGJiVPdvy6ENpe.jpg	KR
3245607	Kwon Il-yong	1966-05-03 00:00:00	https://image.tmdb.org/t/p/w500/jlPqPLLZTzut6KvHyLjmrNqHyBo.jpg	KR
226366	Brian Tyree Henry	1982-03-31 00:00:00	https://image.tmdb.org/t/p/w500/2MsJh0bpyzwvOUnXOltHp3j85Pb.jpg	US
1245	Scarlett Johansson	1984-11-22 00:00:00	https://image.tmdb.org/t/p/w500/6NsMbJXRlDZuDzatN2akFdGuTvx.jpg	US
298410	Keegan-Michael Key	1971-03-22 00:00:00	https://image.tmdb.org/t/p/w500/vAR5gVXRG2Cl6WskXT99wgkAoH8.jpg	US
884	Steve Buscemi	1957-12-13 00:00:00	https://image.tmdb.org/t/p/w500/n0pZumkrcZrAPMoPq684RhYnjPV.jpg	US
2975	Laurence Fishburne	1961-07-30 00:00:00	https://image.tmdb.org/t/p/w500/aBRISux1AGCqkFNTKHYfLcJunWA.jpg	US
65717	Jon Hamm	1971-03-10 00:00:00	https://image.tmdb.org/t/p/w500/mrXE5fZbEDPc7BEE5G21J6qrwzi.jpg	US
2204260	Jon Bailey	1979-03-03 00:00:00	https://image.tmdb.org/t/p/w500/9Z1u1pj23ZlDEKTd7JdNG9OvfUw.jpg	US
1375036	Jason Konopisos-Alvarez	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/vWunN0rdthwvaX3FOj1tmQIMylD.jpg	US
1736	James Remar	1953-12-31 00:00:00	https://image.tmdb.org/t/p/w500/56LwfMaMge2LmWYI46O6R2Wm0YX.jpg	US
1717	Isaac C. Singleton Jr.	1967-08-13 00:00:00	https://image.tmdb.org/t/p/w500/AsVdOAbT1Ewqy6fbWZTvfKWkt4r.jpg	US
571562	Steve Blum	1960-04-29 00:00:00	https://image.tmdb.org/t/p/w500/cpO0muunoigq1WHegeOEI1AIQAo.jpg	US
84496	Josh Cooley	1979-05-23 00:00:00	https://image.tmdb.org/t/p/w500/rw6TQFIv9L5McYtRLyfTjfeeQfS.jpg	US
19537	Megan Fox	1986-05-16 00:00:00	https://image.tmdb.org/t/p/w500/9khvk5svs81TLqIGlI3ZJqYtqaY.jpg	US
2349355	Michele Morrone	1990-10-03 00:00:00	https://image.tmdb.org/t/p/w500/90IF4aQKrr7zXmtcsNAYbrvcIg2.jpg	IT
84613	Madeline Zima	1985-09-16 00:00:00	https://image.tmdb.org/t/p/w500/6hmUs5Q1EETapn32yKNt3c3i1sn.jpg	US
3844059	Matilda Firth	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/b2ZE0ybK5P3ecxYm354XIXwCd5t.jpg	GB
67247	Atanas Srebrev	1971-04-19 00:00:00	https://image.tmdb.org/t/p/w500/aW9keIvjMkH9YAMQDEyJayAs7oy.jpg	BG
1685018	Kate Nichols	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/l3xIf1uuk0ziE81NM87BVh8UyVv.jpg	BG
2507565	Maria Bomani	2000-07-18 00:00:00	https://image.tmdb.org/t/p/w500/4yCdXCaYzD6RTDYpuJxbRLD3kq.jpg	BR
52586	Milhem Cortaz	1971-12-06 00:00:00	https://image.tmdb.org/t/p/w500/cst7PosjKYBuLo7FEvpUEx0B7dK.jpg	BR
2218419	JP Rufino	2002-09-26 00:00:00	https://image.tmdb.org/t/p/w500/43kF5RUfM206N6beg5S74oLOzW.jpg	BR
1759957	Wilson Rabelo	1957-09-22 00:00:00	https://image.tmdb.org/t/p/w500/ftffYgb7vuPnBbNeRfZJfDwhcEq.jpg	BR
55826	Natália Lage	1978-10-30 00:00:00	https://image.tmdb.org/t/p/w500/yfzh26XZEVGQlIwDMkXQVXVwAQZ.jpg	BR
3404719	Natália Deodato	2000-01-12 00:00:00	https://image.tmdb.org/t/p/w500/34Rbx3xlw73iR1XLiIW7uMIipCi.jpg	BR
1927755	Kelner Macêdo	1994-12-04 00:00:00	https://image.tmdb.org/t/p/w500/uhGovKTSjaAGLdQmQ5QsVTIi0vc.jpg	BR
1267329	Lupita Nyong'o	1983-03-01 00:00:00	https://image.tmdb.org/t/p/w500/y40Wu1T742kynOqtwXASc5Qgm49.jpg	MX
1253360	Pedro Pascal	1975-04-02 00:00:00	https://image.tmdb.org/t/p/w500/9VYK7oxcqhjd5LAH6ZFJ3XzOlID.jpg	CL
1538851	Kit Connor	2004-03-08 00:00:00	https://image.tmdb.org/t/p/w500/gCIdbnV9D3lzTaOB0YtuKDz6Nt0.jpg	GB
2440	Bill Nighy	1949-12-12 00:00:00	https://image.tmdb.org/t/p/w500/ixFI2YCGNGJfwlpI8iyhvVZRg8C.jpg	GB
1381186	Stephanie Hsu	1990-11-25 00:00:00	https://image.tmdb.org/t/p/w500/8gb3lfIHKQAGOQyeC4ynQPsCiHr.jpg	US
2	Mark Hamill	1951-09-25 00:00:00	https://image.tmdb.org/t/p/w500/2ZulC2Ccq1yv3pemusks6Zlfy2s.jpg	US
10182	Ving Rhames	1959-05-12 00:00:00	https://image.tmdb.org/t/p/w500/4gpLVNKPZlVucc4fT2fSZ7DksTK.jpg	US
1488236	Matt Berry	1974-05-02 00:00:00	https://image.tmdb.org/t/p/w500/7a1sWg1W7ZmNF8bLSnyAlJgQQGD.jpg	GB
1368512	Raphael Alejandro	2007-08-22 00:00:00	https://image.tmdb.org/t/p/w500/7wPajmopoSh8RYIVSVemQrUBCJv.jpg	CA
23680	Dee Bradley Baker	1962-08-31 00:00:00	https://image.tmdb.org/t/p/w500/9oFnToDZWp0I484s7Ua1EzNQQ2m.jpg	US
42267	Randy Thom	1951-08-21 00:00:00	https://image.tmdb.org/t/p/w500/oWv5U4r7NcIlQjs0IxMWE3dsx2l.jpg	US
1152021	Keston John	1984-08-17 00:00:00	https://image.tmdb.org/t/p/w500/zEqkvuCDDgiErHg3XNyoG5TulUg.jpg	US
1379386	Max Mittelman	1990-09-05 00:00:00	https://image.tmdb.org/t/p/w500/zQqiIgestpxssPrUXQXkY2Sq0y8.jpg	US
1449707	Piotr Michael	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/r9ddS7WpHoLLb0KMEeRE3QSECnW.jpg	US
65838	Jeremy Sumpter	1989-02-05 00:00:00	https://image.tmdb.org/t/p/w500/pycR7N2pLA1fYFdySq1fP2wW7rN.jpg	US
58058	Lochlyn Munro	1966-02-12 00:00:00	https://image.tmdb.org/t/p/w500/nTtzCBFYTEnYCS7CqUwxtC6OsXD.jpg	CA
343	Taryn Manning	1978-11-06 00:00:00	https://image.tmdb.org/t/p/w500/kE4Hvw7Wga6keoMI3MyLakULr91.jpg	US
1382011	Carol Anne Watts	1987-09-13 00:00:00	https://image.tmdb.org/t/p/w500/wgNEIRpOAJGL4GlMypxpZwRpiWp.jpg	US
96277	Shawn Stevens	1958-04-05 00:00:00	https://image.tmdb.org/t/p/w500/i20i1fmF2Mb6yO3wQuhymMbWxHU.jpg	US
1763709	Aaron Pierre	1994-06-07 00:00:00	https://image.tmdb.org/t/p/w500/hNwZWdT2KxKj1YLbipvtUhNjfAp.jpg	GB
25129	Don Johnson	1949-12-15 00:00:00	https://image.tmdb.org/t/p/w500/6s6oav541p7xspCG6PvXut7knkP.jpg	US
1285	AnnaSophia Robb	1993-12-08 00:00:00	https://image.tmdb.org/t/p/w500/tWlnAuyQeFidHcAo2zUVxNv0G0T.jpg	US
1041440	Emory Cohen	1990-03-13 00:00:00	https://image.tmdb.org/t/p/w500/mtummZcNxmcJQ1JIoQUcV3Fwb3.jpg	US
62562	David Denman	1973-07-25 00:00:00	https://image.tmdb.org/t/p/w500/4I06ZD8SQ6pU1QYShiUXb711fJW.jpg	US
45398	Steve Zissis	1975-12-17 00:00:00	https://image.tmdb.org/t/p/w500/hiaDKTWD9dziiMjSDbCDh7bltDU.jpg	US
16584	Dana Lee	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/k9fWzIKYt2Cf3MNC1j1r7TUC2CR.jpg	CN
1797347	Matthew Rimmer	1970-11-23 00:00:00	https://image.tmdb.org/t/p/w500/zz7rByCamd8mzdbYc1iwXk39F7V.jpg	US
2505	James Cromwell	1940-01-27 00:00:00	https://image.tmdb.org/t/p/w500/vpNQQbM5PtxsYmVm4oh79SGFyUK.jpg	US
156625	Al Vicente	1971-03-08 00:00:00	https://image.tmdb.org/t/p/w500/xRD09IlpCMyPWX3vij303rZTQE9.jpg	US
1411625	Terence Rosemore	1964-07-29 00:00:00	https://image.tmdb.org/t/p/w500/mjBaREqAREvJLxDpOlUGLxaYrIP.jpg	US
175630	Charlie Talbert	1978-12-13 00:00:00	https://image.tmdb.org/t/p/w500/4OHHVt0BtpfSYcOTbQTejplFEtD.jpg	US
78799	Carolyn Lawrence	1967-02-13 00:00:00	https://image.tmdb.org/t/p/w500/7Ehx4bEO8loovbmbntXl0sBNjtj.jpg	US
78798	Tom Kenny	1962-07-13 00:00:00	https://image.tmdb.org/t/p/w500/kftXtExrcoTTjyeYmSXJ0Ogr3R7.jpg	US
6574	Clancy Brown	1959-01-05 00:00:00	https://image.tmdb.org/t/p/w500/1JeBRNG7VS7r64V9lOvej9bZXW5.jpg	US
34398	Bill Fagerbakke	1957-10-04 00:00:00	https://image.tmdb.org/t/p/w500/zntKKc1uT53BnIihmzbq601eWKZ.jpg	US
188229	Mr. Lawrence	1969-01-01 00:00:00	https://image.tmdb.org/t/p/w500/9EOlQ6YG8zQOwTn10dQewYOyQ6C.jpg	US
70615	Rodger Bumpass	1951-11-20 00:00:00	https://image.tmdb.org/t/p/w500/lGQkw6adxqB6Hcm7VK8nVHbKupe.jpg	US
9656	Johnny Knoxville	1971-03-11 00:00:00	https://image.tmdb.org/t/p/w500/7XDKsHsLC4uNYaGsuWG1tQXWRnu.jpg	US
64342	Craig Robinson	1971-10-25 00:00:00	https://image.tmdb.org/t/p/w500/nWZI2ghokrha2lYnr5Z48agItL7.jpg	US
15761	Grey DeLisle	1973-08-24 00:00:00	https://image.tmdb.org/t/p/w500/vrUHaXe1pG56yZkgH7Hs3LGRLTT.jpg	US
979412	Matthew Cardarople	1983-02-09 00:00:00	https://image.tmdb.org/t/p/w500/xhKO4iMPnwQS1GeDiY8vOyLFa8x.jpg	US
27102	Wanda Sykes	1964-03-07 00:00:00	https://image.tmdb.org/t/p/w500/ddMGHykrPp3PQ11WVRGNcDmvh0c.jpg	US
1112414	Christopher Hagen	1948-02-05 00:00:00	https://image.tmdb.org/t/p/w500/fgATDH8BSkhFfHD0fg82pnmNVTO.jpg	US
80634	Mary Jo Catlett	1938-09-02 00:00:00	https://image.tmdb.org/t/p/w500/72XlPyoJS8RSze69hrv0xeUFppt.jpg	US
17414	Jill Talley	1962-12-19 00:00:00	https://image.tmdb.org/t/p/w500/x0r43qyI9KNEyb5RsF0MckqxgfM.jpg	US
116315	Kari Wahlgren	1977-07-13 00:00:00	https://image.tmdb.org/t/p/w500/9phhl0oubAKt8D50xLGAb81KPSb.jpg	US
1683343	Cailee Spaeny	1998-07-24 00:00:00	https://image.tmdb.org/t/p/w500/nquUc6o2dK4Pg4zjvl2HmZOfiRS.jpg	US
2164506	Archie Renaux	1997-11-22 00:00:00	https://image.tmdb.org/t/p/w500/uTd18t2VJovN2jSJyhuG8Yy3PV6.jpg	GB
1428070	Isabela Merced	2001-07-10 00:00:00	https://image.tmdb.org/t/p/w500/cQlaWpBzyPx4p6PDz0cr1Y0DrWY.jpg	US
4848549	Robert Bobroczkyi	2000-07-17 00:00:00	https://image.tmdb.org/t/p/w500/3SK7NuuBKR5PSJwsQ7HO4qHIM9C.jpg	US
107733	Daniel Betts	1971-12-10 00:00:00	https://image.tmdb.org/t/p/w500/wKtPsR1At1EmJeYenSjRm4BeIiQ.jpg	GB
73457	Chris Pratt	1979-06-21 00:00:00	https://image.tmdb.org/t/p/w500/83o3koL82jt30EJ0rz4Bnzrt2dd.jpg	US
2231	Samuel L. Jackson	1948-12-21 00:00:00	https://image.tmdb.org/t/p/w500/AiAYAqwpM5xmiFrAIeQvUXDCVvo.jpg	US
1278487	Hannah Waddingham	1974-07-28 00:00:00	https://image.tmdb.org/t/p/w500/eHAICyhvjiRZCgzKyJCk9hWnnjr.jpg	GB
3292	Nicholas Hoult	1989-12-07 00:00:00	https://image.tmdb.org/t/p/w500/laeAYQVBV9U3DkJ1B4Cn1XhpT8P.jpg	GB
1093919	Cecily Strong	1984-02-08 00:00:00	https://image.tmdb.org/t/p/w500/g1WbsojbgQAB72UfUJnNWPaB4b5.jpg	US
210172	Harvey Guillén	1990-05-03 00:00:00	https://image.tmdb.org/t/p/w500/yiNBonobPwqMVweB02JWufzp2l9.jpg	US
21422	Brett Goldstein	1980-07-17 00:00:00	https://image.tmdb.org/t/p/w500/xYdFNE7EkncE8uiPJzT3RrkqcAQ.jpg	GB
1564920	Bowen Yang	1990-11-06 00:00:00	https://image.tmdb.org/t/p/w500/lrebxaz4BGJucBW79cakZ0HsSa1.jpg	AU
19767	Snoop Dogg	1971-10-20 00:00:00	https://image.tmdb.org/t/p/w500/V8eEB5ybSxSTluFcBZkVgT73sv.jpg	US
2692283	Janelle James	1979-09-23 00:00:00	https://image.tmdb.org/t/p/w500/vLiXGdCRCfWhamrPdUGYiBRZk6y.jpg	US
2352372	Angus Cloud	1998-07-10 00:00:00	https://image.tmdb.org/t/p/w500/cN3n9UBBtRASNLSibS8WUZD1d1A.jpg	US
60736	Jeff Foxworthy	1958-09-06 00:00:00	https://image.tmdb.org/t/p/w500/3kJ6uVvDddIrTudxlZIpJ5yg4bN.jpg	US
237087	Eugenia Caruso	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/ocWaLnqvU58oU7ZAVsVKA1w2Als.jpg	IT
61411	Mark Dindal	1960-05-31 00:00:00	https://image.tmdb.org/t/p/w500/333OWiQBGLBjAWUemWySFzxCbhx.jpg	US
78047	Matt Rippy	1968-01-26 00:00:00	https://image.tmdb.org/t/p/w500/nJhQoU3YaGcdd9xFbdXGjO1ciMN.jpg	US
113235	Eric Loren	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/3Eaz5sDV4s7obHVSsWXSGmsEZy4.jpg	US
12835	Vin Diesel	1967-07-18 00:00:00	https://image.tmdb.org/t/p/w500/nZdVry7lnUkE24PnXakok9okvL4.jpg	US
18514	Asia Argento	1975-09-20 00:00:00	https://image.tmdb.org/t/p/w500/dYbYNxMnqhNyAJyrPU7e2C9jcRz.jpg	IT
20982	Marton Csokas	1966-06-30 00:00:00	https://image.tmdb.org/t/p/w500/jKtjjwf8MHnUsQ3YA56LH9pJjee.jpg	NZ
2341	Richy Müller	1955-09-26 00:00:00	https://image.tmdb.org/t/p/w500/69W9VO478asbTZJrhqOfHddyunF.jpg	DE
39849	Werner Daehn	1967-10-14 00:00:00	https://image.tmdb.org/t/p/w500/7AVQ2pesALZjo5J0KsYADzoms9Z.jpg	DE
53348	Petr Jákl	1973-09-14 00:00:00	https://image.tmdb.org/t/p/w500/8zi7MXdHXWBIP6IuMFZB1HdWnGX.jpg	XC
137332	Jan Filipenský	1973-10-08 00:00:00	https://image.tmdb.org/t/p/w500/lQtE0gsFf6T7QXFnq3InuIG9WE9.jpg	XC
140250	Tom Everett	1948-10-21 00:00:00	https://image.tmdb.org/t/p/w500/lJIlLkadJ62eRai5BRgmmyObeiC.jpg	US
11160	Danny Trejo	1944-05-16 00:00:00	https://image.tmdb.org/t/p/w500/7JrUkRGBscZ1Hy5JinaaXjjzSCF.jpg	US
60705	Thomas Ian Griffith	1962-03-18 00:00:00	https://image.tmdb.org/t/p/w500/4h1qQeZMG2drwEEat6WKG0rbPVC.jpg	US
230176	Eve	1978-11-10 00:00:00	https://image.tmdb.org/t/p/w500/p0vwoXyDgnx3z2v3PWZVlVEk6KJ.jpg	US
65240	Leila Arcieri	1973-12-18 00:00:00	https://image.tmdb.org/t/p/w500/ly1UGt7QuRSUIM0o68w1L500qji.jpg	US
10207	William Hope	1955-03-02 00:00:00	https://image.tmdb.org/t/p/w500/blKMEeCftWVBPI2hqvzycmdE9nS.jpg	CA
51302	Joe Bucaro III	1964-04-04 00:00:00	https://image.tmdb.org/t/p/w500/gvJs1YQZRrSbkiSGAiCAugaXyzl.jpg	US
154837	Chris Gann	1972-04-13 00:00:00	https://image.tmdb.org/t/p/w500/jX73lEGi5TNjordeEEZRKjqGL9x.jpg	US
1054325	Martin Hub	1964-03-13 00:00:00	https://image.tmdb.org/t/p/w500/udBteEYEksf6Icrrx7cAhGcq1r0.jpg	CZ
1213088	Mary-Pat Green	1951-09-24 00:00:00	https://image.tmdb.org/t/p/w500/cLqn3eEGnE5zGxT2KBXRSkahrPE.jpg	US
293911	Scott Waugh	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/i84mhk9KQndHi5c1IhomNdRnvFw.jpg	US
1386009	Václav Chalupa	1974-07-12 00:00:00	https://image.tmdb.org/t/p/w500/1lDgt4Pl0Hk00G7ltEVlIk13TDM.jpg	XC
3260091	Martina Smuková	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/yPvLFxOYTcVd2KwtAsxG4m9MIeJ.jpg	CZ
16832	Tony Hawk	1968-05-12 00:00:00	https://image.tmdb.org/t/p/w500/gYNmD0a7LemMX6zDZ1lyDs6YYwd.jpg	US
558036	Mike Vallely	1970-06-29 00:00:00	https://image.tmdb.org/t/p/w500/swAZzsNkLiuTbbRUGlOSaytfsRu.jpg	US
82697	Carey Hart	1975-07-17 00:00:00	https://image.tmdb.org/t/p/w500/vM43fEY0CCfPpbiSRJOnhysaRIN.jpg	US
10849	Marek Vašut	1960-05-05 00:00:00	https://image.tmdb.org/t/p/w500/1gaHNNG8MuA3meaDHGi6Tb3Vw1K.jpg	XC
15537	Leonard L. Thomas	1961-08-31 00:00:00	https://image.tmdb.org/t/p/w500/5s5Zg61G02YtLTKJ7VEvMPeAlwS.jpg	US
1088666	Till Lindemann	1963-01-04 00:00:00	https://image.tmdb.org/t/p/w500/mhbcRcw5KRFxUbKFglHDHuo4XNI.jpg	DE
1515687	Richard Kruspe	1967-06-24 00:00:00	https://image.tmdb.org/t/p/w500/gvFc5geScokaG0kZAiM65jPpvin.jpg	DE
1088667	Christian Lorenz	1966-11-16 00:00:00	https://image.tmdb.org/t/p/w500/eVFwuhuOg2bejR5RLEqZb8aM9WR.jpg	DE
1515688	Paul Landers	1964-12-09 00:00:00	https://image.tmdb.org/t/p/w500/hSgkxg65eAVEWauIjbImY6CKwqL.jpg	DE
1088668	Oliver Riedel	1971-04-11 00:00:00	https://image.tmdb.org/t/p/w500/8vLuztIqxATiJLdTeD2WXmjN4tU.jpg	DE
1088669	Christoph Schneider	1966-05-11 00:00:00	https://image.tmdb.org/t/p/w500/9MQQaHddJR7df99fJFzxbQXBWO8.jpg	DE
1774635	Paul Hartnoll	1968-05-19 00:00:00	https://image.tmdb.org/t/p/w500/533FE98wNOWzL9BJWkscRUx2NZn.jpg	GB
18878	Rob Cohen	1949-03-12 00:00:00	https://image.tmdb.org/t/p/w500/kVbB8Q0g8eXsn8l81flyC6TgMPW.jpg	US
1110521	Caitlin Dechelle	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/A9IBrs6pScz0cIXR18ctXqLVvSp.jpg	US
1102421	Jade Xu	1986-02-09 00:00:00	https://image.tmdb.org/t/p/w500/lJBBfW1egrlpHvm9cBv008zqMDv.jpg	CN
2230991	Daisy Edgar-Jones	1998-05-24 00:00:00	https://image.tmdb.org/t/p/w500/uhrgWinc0W2Q1K0ynUmyTaWd8dv.jpg	GB
83271	Glen Powell	1988-10-21 00:00:00	https://image.tmdb.org/t/p/w500/fUnIaJkdgvQTztyR1nLeUceSzly.jpg	US
1560244	Anthony Ramos	1991-11-01 00:00:00	https://image.tmdb.org/t/p/w500/seFm2fKh6reyZaaCg7DmRpodLCw.jpg	US
1602972	Brandon Perea	1995-05-25 00:00:00	https://image.tmdb.org/t/p/w500/hEzljVgsho0Uwd8tg7AGB5Uy3Lr.jpg	US
16307	Maura Tierney	1965-02-03 00:00:00	https://image.tmdb.org/t/p/w500/4BCrwdHdC4iRSDimvkoYaXg2qki.jpg	US
145133	Harry Hadden-Paton	1981-04-10 00:00:00	https://image.tmdb.org/t/p/w500/qyP94KSd95vGScVwIpENI3aWTYb.jpg	GB
1535218	Sasha Lane	1995-09-29 00:00:00	https://image.tmdb.org/t/p/w500/s77bn2SJAagmRWEVFR5zwyUKH1N.jpg	US
1829245	Daryl McCormack	1993-01-22 00:00:00	https://image.tmdb.org/t/p/w500/hGW4nbGz2gdd6UUIihWwaMi8HcQ.jpg	IE
934289	Kiernan Shipka	1999-11-10 00:00:00	https://image.tmdb.org/t/p/w500/t2FWVLTIhVRIa398mQAfN4thO5R.jpg	US
1466581	Nik Dodani	1993-12-19 00:00:00	https://image.tmdb.org/t/p/w500/tFSgtHLlZRE75C7sOJYeAYOwkjR.jpg	US
1785590	David Corenswet	1993-07-08 00:00:00	https://image.tmdb.org/t/p/w500/kPxoeGBVRb4goUVmi4Qpg0lLnYW.jpg	US
94476	Tunde Adebimpe	1975-02-26 00:00:00	https://image.tmdb.org/t/p/w500/k40ggj14fUjSipf1muSenSjWzWp.jpg	US
2252989	Katy O'Brian	1989-02-12 00:00:00	https://image.tmdb.org/t/p/w500/lEz7WmJPrBGSsIkEiAA10t5nDDM.jpg	US
110993	David Born	1960-10-07 00:00:00	https://image.tmdb.org/t/p/w500/qfw98nf0T6OVm0ZTcsINeDvghcL.jpg	US
59843	Paul Scheer	1976-01-31 00:00:00	https://image.tmdb.org/t/p/w500/76c6ieidSECRslxVX4ZA5WBdz40.jpg	US
4830556	Chris Adrien	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/sypGKYEU0EYWGFdCUkyUhEHOvty.jpg	US
1335252	Samantha Ireland	1987-07-28 00:00:00	https://image.tmdb.org/t/p/w500/9GkFhJh20byH7TdiKdlCZrnEEzS.jpg	US
1231768	James Paxton	1994-02-23 00:00:00	https://image.tmdb.org/t/p/w500/op96bq1cIcDlMPXCMFqllNVUhxk.jpg	US
2956118	Austin Brooks	1969-10-06 00:00:00	https://image.tmdb.org/t/p/w500/aaGieuJ9jGKdgAz9moKx3UYQLFH.jpg	US
97391	Darryl Cox	1955-04-08 00:00:00	https://image.tmdb.org/t/p/w500/dokVBvE6DlV7gBXnLPfQo8GDC6t.jpg	US
4031864	Ashley Jay Sandberg	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/eb6lyCtiMvzzvEmvZngT6c4QCbI.jpg	US
2340180	Hunter Schafer	1998-12-31 00:00:00	https://image.tmdb.org/t/p/w500/6ZDieLlbm2m3jbYaxsHFo7cWWzJ.jpg	US
221018	Dan Stevens	1982-10-10 00:00:00	https://image.tmdb.org/t/p/w500/fFsgginZKH527o38ZfdDxuzx7Ew.jpg	GB
1202689	Jessica Henwick	1992-08-30 00:00:00	https://image.tmdb.org/t/p/w500/hRrEqDIWlov1FvYRmBN2vLaAxyl.jpg	GB
1061583	Greta Fernández	1995-02-04 00:00:00	https://image.tmdb.org/t/p/w500/huq5gEMvQo0dWk35KEpnjqmbSIm.jpg	ES
469759	Astrid Bergès-Frisbey	1986-05-26 00:00:00	https://image.tmdb.org/t/p/w500/2mcTwrg61M7beQv05YQFPLWADmc.jpg	ES
114594	Proschat Madani	1967-10-11 00:00:00	https://image.tmdb.org/t/p/w500/eoFZ1H7hOt3NwQtQx8B6mFtNuOe.jpg	IR
3885284	Kalin Morrow	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/6goFGzTwRa4xO0IpK96S6lhN7Vn.jpg	US
3987657	Joshua Hupfauer	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/repsqggQWiY46f64aAyeRRuoaTT.jpg	DE
1070805	Ranee Campen	1989-12-24 00:00:00	https://image.tmdb.org/t/p/w500/p2mHicig9Obk6InadpCmdxFIMpj.jpg	TH
1597365	Joseph Quinn	1994-01-26 00:00:00	https://image.tmdb.org/t/p/w500/zshhuioZaH8S5ZKdMcojzWi1ntl.jpg	GB
934281	Alex Wolff	1997-11-01 00:00:00	https://image.tmdb.org/t/p/w500/hMhGWS5nB7ZGA3B1aefY39pizgm.jpg	US
938	Djimon Hounsou	1964-04-24 00:00:00	https://image.tmdb.org/t/p/w500/tpvtxxvCx2Mb5DV632hmuYlHoiY.jpg	US
1847948	Eliane Umuhire	1986-01-01 00:00:00	https://image.tmdb.org/t/p/w500/u2q6nQtLsKGyTnWHtmKGyeYAyXq.jpg	RW
2044689	Michael Roberts	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/tJtD4Qfffbth8Yg0hXDKN22MEXF.jpg	GB
4803251	Thea Butler	1994-10-01 00:00:00	https://image.tmdb.org/t/p/w500/v9sq17aJMSaszqECDm8VQhKRe7i.jpg	GB
2766131	Cain Aiden	1988-01-01 00:00:00	https://image.tmdb.org/t/p/w500/kfYliFAOtNwA2mwpLiR44MF0zPz.jpg	GB
7447	Alec Baldwin	1958-04-03 00:00:00	https://image.tmdb.org/t/p/w500/hzKy7x574eeUS3wt1R3yvWBRpeR.jpg	US
4004	Jeffrey Jones	1946-09-28 00:00:00	https://image.tmdb.org/t/p/w500/zLodpqWUb9OzQLpK1ZY9im1Lh0p.jpg	US
13243	Glenn Shadix	1952-04-15 00:00:00	https://image.tmdb.org/t/p/w500/zTu0Fh0ohLIvFnEXiRvhe91T3Wg.jpg	US
528	Sylvia Sidney	1910-08-09 00:00:00	https://image.tmdb.org/t/p/w500/2ahFUatfOEqqY6p7XnSAPlIZU2e.jpg	US
54813	Patrice Martinez	1963-06-12 00:00:00	https://image.tmdb.org/t/p/w500/FhZmy7Nz2Bz43pJZidl8klK6Gm.jpg	US
10565	Dick Cavett	1936-11-19 00:00:00	https://image.tmdb.org/t/p/w500/7g5J47vQY2k4GzGhlJr6KdYm04P.jpg	US
128621	Robert Goulet	1933-11-26 00:00:00	https://image.tmdb.org/t/p/w500/kqCwDpsRWIHDtbfIrpJ4L63j53i.jpg	US
114604	Maree Cheatham	1940-06-02 00:00:00	https://image.tmdb.org/t/p/w500/gtgvheeo3rR8N7o6gvo5S5EO9GP.jpg	US
27264	Susan Kellermann	1944-07-04 00:00:00	https://image.tmdb.org/t/p/w500/qmdeLIQAskusv6Rm8fGfLWoph5g.jpg	US
154073	Carmen Filpi	1923-03-22 00:00:00	https://image.tmdb.org/t/p/w500/zYLuWaqYUYYzxHo00kmXnUUg6ra.jpg	US
34535	Annie McEnroe	1956-01-01 00:00:00	https://image.tmdb.org/t/p/w500/elB4sLQupC4880XZWDzR33ndkJH.jpg	US
104944	Simmy Bow	1921-06-07 00:00:00	https://image.tmdb.org/t/p/w500/aX31wcFFQWSIg61MrdFLoC3iZG6.jpg	US
19754	Tony Cox	1958-03-31 00:00:00	https://image.tmdb.org/t/p/w500/sbZS0gxvRsAIgHxIEL8STINpn7u.jpg	US
19545	Jack Angel	1930-10-24 00:00:00	https://image.tmdb.org/t/p/w500/5MsVwIULYJotUSbDs61uSJff7ei.jpg	US
148130	Charles Schneider	1960-02-19 00:00:00	https://image.tmdb.org/t/p/w500/5gE3iObRtCUBWcByUPdKWUBJZn9.jpg	US
1586047	Owen Teague	1998-12-08 00:00:00	https://image.tmdb.org/t/p/w500/tgCkGE0LIggyjMmgSwHhpZAkfJs.jpg	US
2146942	Freya Allan	2001-09-06 00:00:00	https://image.tmdb.org/t/p/w500/xq33JCqUjBzPz3drN48N2N7ySKI.jpg	GB
79072	Kevin Durand	1974-01-14 00:00:00	https://image.tmdb.org/t/p/w500/hINvryvce5tpod6kTnUg9ZTH8wg.jpg	CA
1444816	Peter Macon	1982-05-18 00:00:00	https://image.tmdb.org/t/p/w500/jF4jzgtWB2NAJ6BfVTSDQOlOHLr.jpg	US
3905	William H. Macy	1950-03-13 00:00:00	https://image.tmdb.org/t/p/w500/hdVEGSrP8qWlJnt0v5vSVcGOjy7.jpg	US
966554	Eka Darville	1989-04-11 00:00:00	https://image.tmdb.org/t/p/w500/7tNdST92WSTGHmEJbExaRlQHWcW.jpg	AU
1394427	Travis Jeffery	1989-04-12 00:00:00	https://image.tmdb.org/t/p/w500/picKz6F5ZNpZeDF1oRXHpSR8V8w.jpg	AU
136295	Neil Sandilands	1975-05-01 00:00:00	https://image.tmdb.org/t/p/w500/t0tWl640swPEEBd5mY51Xtekvuo.jpg	ZA
3757983	Ras-Samuel Welda'abzgi	1997-02-20 00:00:00	https://image.tmdb.org/t/p/w500/pZhLFFEjzbg5fEl53TgagusDGp1.jpg	ET
103406	Sara Wiseman	1972-05-27 00:00:00	https://image.tmdb.org/t/p/w500/oZUbTYeLBywjNv6Ul1nZryFsffq.jpg	NZ
78962	Andy McPhee	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/uC0QWuaaOoIcLl6f5ebkFgTyF1r.jpg	AU
94797	Dichen Lachman	1982-02-22 00:00:00	https://image.tmdb.org/t/p/w500/ySRHqthzU1gcEhV5rt7awZCzcwd.jpg	NP
581170	Dmitriy Miller	1972-04-02 00:00:00	https://image.tmdb.org/t/p/w500/wuQSGEO26fJkIKGKaIxwd9dPIRZ.jpg	RU
58395	Karin Konoval	1961-06-04 00:00:00	https://image.tmdb.org/t/p/w500/5e8YyNQjWre2UbExYBlJ7zva934.jpg	US
236696	Terry Notary	1968-08-14 00:00:00	https://image.tmdb.org/t/p/w500/nYs1Sd11czZNwcDyUYdHPwHHIRO.jpg	US
1882502	Lauren LaVera	1994-06-16 00:00:00	https://image.tmdb.org/t/p/w500/qJYWq2oZcvHh7lnGskxkrYXCom0.jpg	US
8776	Claudia Gerini	1971-12-18 00:00:00	https://image.tmdb.org/t/p/w500/QFBen9LPrKuSr9awe0Go3gl6sG.jpg	IT
27277	Giovanni Lombardo Radice	1954-09-23 00:00:00	https://image.tmdb.org/t/p/w500/2CNIb3EZuLNP695fawIAEbRtRXT.jpg	IT
141205	Lorenzo Renzi	1977-12-01 00:00:00	https://image.tmdb.org/t/p/w500/vJYjQQnWZD9U3DIhiUePhVAQzeP.jpg	IT
1479747	Melanie Gaydos	1998-07-18 00:00:00	https://image.tmdb.org/t/p/w500/uxb62mXTVLSyHrHpQuvFh81NCf3.jpg	US
129068	Anis Gharbi	1977-11-15 00:00:00	https://image.tmdb.org/t/p/w500/x95hWRq4Mh9WcX6dRhT7IOodEGK.jpg	TN
2011444	Lakshya Lalwani	1996-04-19 00:00:00	https://image.tmdb.org/t/p/w500/iabAj9GCIkGnAMvzyIvdUXeCPTo.jpg	IN
1374676	Raghav Juyal	1991-07-10 00:00:00	https://image.tmdb.org/t/p/w500/dX1hoTwnZnT8qnFIsXxoDTRgoDt.jpg	IN
2368989	Tanya Maniktala	1997-07-07 00:00:00	https://image.tmdb.org/t/p/w500/hW0q6MjqGzPEZKx6OftGcvxeheo.jpg	IN
85684	Ashish Vidhyarthi	1962-06-19 00:00:00	https://image.tmdb.org/t/p/w500/iBUUpfHZIfpC5afHrHwcyGTHKQF.jpg	IN
4815438	Calib Logan	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/ZHFkzvtCTRx8CYpyJuoouJvYcB.jpg	IN
583940	Riyaz Khan	1972-09-09 00:00:00	https://image.tmdb.org/t/p/w500/pwl6in6HaayAmiSQjx8Hp3eimw9.jpg	IN
2126206	Yolanda Stange	1970-03-01 00:00:00	https://image.tmdb.org/t/p/w500/fZ676uqj2n0OpMM4A8nnvjvVEsG.jpg	US
2425186	Alicia Oberle Farmer	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/32446lR4TONiQYAioYf0isBPwd5.jpg	US
89409	Raymond Lam	1979-12-08 00:00:00	https://image.tmdb.org/t/p/w500/Ak40P6TWthdQ9diRki5RIcJ6r95.jpg	CN
78875	Louis Koo	1970-10-21 00:00:00	https://image.tmdb.org/t/p/w500/yQuDBTzm7xWlJICNvl20OmcJP80.jpg	US
2217481	Terrance Lau	1988-09-26 00:00:00	https://image.tmdb.org/t/p/w500/12UjFLBUTopW0O9UB9f2TK18dSl.jpg	US
1674432	Tony Wu	1992-04-16 00:00:00	https://image.tmdb.org/t/p/w500/bWYyRg8eFxrOdsgzuC1guPtrLoO.jpg	US
1455929	Man Kit Cheung	1985-12-03 00:00:00	https://image.tmdb.org/t/p/w500/k8FKv1WgRQfsJlGi4l3J8YyeMYQ.jpg	HK
100585	Philip Ng	1977-09-16 00:00:00	https://image.tmdb.org/t/p/w500/dUvw7dvUyfAiXhyzGWNV0Gd5ycN.jpg	US
64496	Richie Jen	1966-06-23 00:00:00	https://image.tmdb.org/t/p/w500/A4oidg4FY6or9TNHi2yz1TO7xeH.jpg	CN
62410	Sammo Hung	1952-01-07 00:00:00	https://image.tmdb.org/t/p/w500/ltThjSeD7d2jdO9GSi9rZq1pbjB.jpg	CN
70108	Kenny Wong Tak-Ban	1963-04-30 00:00:00	https://image.tmdb.org/t/p/w500/fSSna59ChOc0OA8ju2xRf8jxOvT.jpg	HK
21908	Aaron Kwok	1965-10-26 00:00:00	https://image.tmdb.org/t/p/w500/haCdKHKCBle20HkbHCapfYTibc0.jpg	US
1638505	Fish Liew	1990-03-31 00:00:00	https://image.tmdb.org/t/p/w500/wouDO99Pw2tCjhRYCbck9qPuGo1.jpg	MY
2684219	Chu Pak-Hong	1982-11-04 00:00:00	https://image.tmdb.org/t/p/w500/hGpToKjLUDXbz69NjCriRcBHYv8.jpg	HK
1529401	Cecilia Choi	1994-07-23 00:00:00	https://image.tmdb.org/t/p/w500/gOCyKz6VaHf4E4qYk70Rf45lz0y.jpg	US
1334855	Deon Cheung	1967-04-02 00:00:00	https://image.tmdb.org/t/p/w500/oib9cyzPvcT07Fg6v9yFHxcZuVr.jpg	US
4684605	Jozev Lau	1969-02-06 00:00:00	https://image.tmdb.org/t/p/w500/fy16sADv6nhxu4kc2vDbGd6r6GF.jpg	US
137143	Law Wing-Cheong	1966-06-26 00:00:00	https://image.tmdb.org/t/p/w500/3MXEBNMNgaOxATtmPwupVAgS3qI.jpg	CN
1415784	Liu Chun-Hung	1960-08-20 00:00:00	https://image.tmdb.org/t/p/w500/bLtpSLTjnrkmV5ZKSfsChfuNYwU.jpg	CN
38285	Jacqueline Zhu Zhi-Ying	1982-07-23 00:00:00	https://image.tmdb.org/t/p/w500/zJs10JAZSn3upwBSjMHbWPdcwDH.jpg	TW
3270592	Sean Wong Tsz-lok	2012-11-05 00:00:00	https://image.tmdb.org/t/p/w500/LzqwpXTKzDk4ZCC1laiJcr0ufv.jpg	HK
16484	Joey Lauren Adams	1968-01-09 00:00:00	https://image.tmdb.org/t/p/w500/cf5YUeCbiBkAxQ9UPLqzaPdekBF.jpg	US
41687	Patrick Muldoon	1968-09-27 00:00:00	https://image.tmdb.org/t/p/w500/nuqKElpRossYTwh9BIymHLA5G6e.jpg	US
747	Alex Hyde-White	1959-01-30 00:00:00	https://image.tmdb.org/t/p/w500/1h2jQgYgbqtkZyiHsudlKY1eZED.jpg	GB
92020	Scott Bailey	1978-12-16 00:00:00	https://image.tmdb.org/t/p/w500/b9EubBcpNxfQqBsiecyfxpi7cv.jpg	US
2090007	Kobi Frumer	2004-11-12 00:00:00	https://image.tmdb.org/t/p/w500/eTrRgJNa9foybYHMBcTcSRepS88.jpg	US
1762690	Cole Springer	2003-05-01 00:00:00	https://image.tmdb.org/t/p/w500/slJlHmrt4Kwz9Vr9KZDsGMyLXvd.jpg	US
2733818	Deja Monique Cruz	1999-02-17 00:00:00	https://image.tmdb.org/t/p/w500/khLcb8r17UsqhHgCSIiE7fmowBz.jpg	US
1251069	Nathalie Emmanuel	1989-03-02 00:00:00	https://image.tmdb.org/t/p/w500/uh8EIhxKJxK7xsJlWcIgBkqyAKq.jpg	GB
78423	Omar Sy	1978-01-20 00:00:00	https://image.tmdb.org/t/p/w500/laNZay6AfEzvEvY1NUH9UFiSD0a.jpg	FR
65731	Sam Worthington	1976-08-02 00:00:00	https://image.tmdb.org/t/p/w500/mflBcox36s9ZPbsZPVOuhf6axaJ.jpg	GB
2048372	Diana Silvers	1997-11-03 00:00:00	https://image.tmdb.org/t/p/w500/4az1G7gw4uwdX4u6AyRVbOY019R.jpg	US
5419	Saïd Taghmaoui	1973-07-19 00:00:00	https://image.tmdb.org/t/p/w500/kuxI08YpwQFGweIXK7TELknwexr.jpg	FR
1002639	Angeles Woo	1980-07-05 00:00:00	https://image.tmdb.org/t/p/w500/wNsQ99FUY5sOlPrRRI34OG7jmjl.jpg	US
37758	Éric Cantona	1966-05-24 00:00:00	https://image.tmdb.org/t/p/w500/lMIXZd1QiHH7Y5emujCKGnRh6np.jpg	FR
10698	Tchéky Karyo	1953-10-04 00:00:00	https://image.tmdb.org/t/p/w500/jrtGiLYaALwDZgF39Hlgb8O1XZ1.jpg	TR
1423713	Grégory Montel	1976-09-20 00:00:00	https://image.tmdb.org/t/p/w500/nImuHSjUgi8v8CaYp5UAZTHbY0j.jpg	FR
1643602	Elie Haddad	1985-03-05 00:00:00	https://image.tmdb.org/t/p/w500/p0blPwI7mSpKn0RjbQz5OjMHCw5.jpg	US
1710670	Lydie Muller	1972-04-27 00:00:00	https://image.tmdb.org/t/p/w500/xjTJjOWgCVeTpNmneu3fSbHsjNg.jpg	FR
201889	Vincent Winterhalter	1964-06-23 00:00:00	https://image.tmdb.org/t/p/w500/mqeBAxZwkZP5NujhfN4MJLVAfy3.jpg	FR
225403	Igor Skreblin	1964-01-01 00:00:00	https://image.tmdb.org/t/p/w500/qnfKggDDcevbeG9geMiTLHtTjBA.jpg	FR
1855944	Gary Cothenet	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/ryior4TRVqtcyT3qv87GP3iTijA.jpg	FR
2987347	Quentin D'Hainaut	1984-08-30 00:00:00	https://image.tmdb.org/t/p/w500/355IjF5LitXkTGQUZ4nl3yNaGcN.jpg	FR
4033208	Eric Cullet	1983-11-28 00:00:00	https://image.tmdb.org/t/p/w500/hXyZTn0XHmZMcOwEsNtgKVac2r2.jpg	US
16644	Dolph Lundgren	1957-11-03 00:00:00	https://image.tmdb.org/t/p/w500/3MqLWHnFFNGLEOQFlGrIE3rra85.jpg	SE
7090	Kelsey Grammer	1955-02-21 00:00:00	https://image.tmdb.org/t/p/w500/cjUCogoFRnFKAgeyRmGGpekz0TF.jpg	US
60650	Michael Paré	1958-10-09 00:00:00	https://image.tmdb.org/t/p/w500/jxrXW8OL6hwJgtJgePdMO5yHuAM.jpg	US
25877	Roger Cross	1969-10-19 00:00:00	https://image.tmdb.org/t/p/w500/gLbHM7JH2nWCeEzSjzAYBUOSkT8.jpg	JM
583845	Aaron McPherson	1969-06-25 00:00:00	https://image.tmdb.org/t/p/w500/rBeV0ZXhYc0cXC2L0vr50ZmjYyn.jpg	US
2474268	Julian Cavett	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/btHFvdGFbcqVKj87BGJGhuGozY0.jpg	US
3608585	Xzavier Estrada	2004-04-23 00:00:00	https://image.tmdb.org/t/p/w500/fNOzJAuVB94zJWbfxLLxB6kyzdy.jpg	US
1094091	Maika Monroe	1993-05-29 00:00:00	https://image.tmdb.org/t/p/w500/x4yiKkMnCdf8g4eOrDoqla9FYEA.jpg	US
2963	Nicolas Cage	1964-01-07 00:00:00	https://image.tmdb.org/t/p/w500/ar33qcWbEgREn07ZpXv5Pbj8hbM.jpg	US
56871	Blair Underwood	1964-08-25 00:00:00	https://image.tmdb.org/t/p/w500/3e6my8gZYS3L2OP4ZTN1psQDYIT.jpg	US
3128	Alicia Witt	1975-08-21 00:00:00	https://image.tmdb.org/t/p/w500/vQ2McAjHjY3A7oDrPMx6aLSsvkW.jpg	US
1002369	Dakota Daulby	1994-10-10 00:00:00	https://image.tmdb.org/t/p/w500/lFP48m1VR8fBwDqI7LuYoMIziD7.jpg	CA
83445	Jason William Day	1979-03-18 00:00:00	https://image.tmdb.org/t/p/w500/1KHyn8as1ZnAUR7uFnwy4YVvURZ.jpg	CA
1075842	Lisa Chandler	1985-06-19 00:00:00	https://image.tmdb.org/t/p/w500/eak6gzmQkFwTGhbYyEykpKaZP4l.jpg	CA
3177922	Rryla McIntosh	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/9mW6pyncEIawWaMeCBkwzli5n5g.jpg	CA
1392937	Carmel Amit	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/qIBZ3SOsIQOo1CD2ker5YPnnuiY.jpg	IL
61187	Daniel Bacon	1970-10-30 00:00:00	https://image.tmdb.org/t/p/w500/fhonQvc9zI2Vh6sDDpLB8fbvyLH.jpg	GB
53718	Erin Boyes	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/xvtkUVuGSK1gFpc39vIWZuXfl0O.jpg	CA
69899	Zachary Levi	1980-09-29 00:00:00	https://image.tmdb.org/t/p/w500/1W8L3kEMMPF9umT3ZGaNIiCYKfZ.jpg	US
1488961	Lil Rel Howery	1979-12-17 00:00:00	https://image.tmdb.org/t/p/w500/9MDi35Fy6ym7SYbO3B04vf1vBnm.jpg	US
11664	Zooey Deschanel	1980-01-17 00:00:00	https://image.tmdb.org/t/p/w500/30KQyjsXfrdm4Dcori7bDFTg9Le.jpg	US
1731959	Tanya Reynolds	1991-11-04 00:00:00	https://image.tmdb.org/t/p/w500/m5FP6lzbxYon8W6hEvj9d4h21i4.jpg	GB
55936	Jemaine Clement	1974-01-10 00:00:00	https://image.tmdb.org/t/p/w500/nFAD9b0MzFmujo8k4jXbhr5GQpq.jpg	NZ
658	Alfred Molina	1953-05-24 00:00:00	https://image.tmdb.org/t/p/w500/nJo91Czesn6z0d0pkfbDoVZY3sg.jpg	GB
81106	Camille Guaty	1978-06-28 00:00:00	https://image.tmdb.org/t/p/w500/l7LQt6VYq5aOpU4RvCUDx4f9vjz.jpg	US
206485	Ravi Patel	1978-12-18 00:00:00	https://image.tmdb.org/t/p/w500/94GutLAPx72fqxe6XUQ3HWxANxz.jpg	US
2139816	Catherine Davis	1994-01-01 00:00:00	https://image.tmdb.org/t/p/w500/dyZPBqh6JlEmtmFq38gpBZ8n9hy.jpg	US
1477896	Grace Junot	1974-06-08 00:00:00	https://image.tmdb.org/t/p/w500/hI2bpmjmEFtAjknOuguMzX6VC3W.jpg	TH
156831	Stephanie Dunnam	1959-03-28 00:00:00	https://image.tmdb.org/t/p/w500/9Dk1FtJc9ZAHaWqk1ChpZKxBiR7.jpg	US
1074187	Danny Vinson	1954-05-06 00:00:00	https://image.tmdb.org/t/p/w500/m4NZhoQkOkcAXCgaok5hSqqSpzb.jpg	US
1231498	Patrice Fisher	1978-01-05 00:00:00	https://image.tmdb.org/t/p/w500/gLUamHSgSS6Ky6Db0cmu8GQqoud.jpg	US
1352662	Charlotte Kirk	1992-06-16 00:00:00	https://image.tmdb.org/t/p/w500/v2rgc2lVbZf3fcea60IG6kpa2DI.jpg	GB
58428	Philip Winchester	1981-03-24 00:00:00	https://image.tmdb.org/t/p/w500/oc7lc2d98lM393blvmFfAGnXSMf.jpg	US
17782	Colm Meaney	1953-05-30 00:00:00	https://image.tmdb.org/t/p/w500/guL6RJdlRMtOJN3LoaY3G8hG4Rd.jpg	IE
556168	Hoji Fortuna	1974-09-04 00:00:00	https://image.tmdb.org/t/p/w500/hfsnAuwMM9sP4l0Uh0Is01pRMj2.jpg	AO
50948	Stephanie Beacham	1947-02-28 00:00:00	https://image.tmdb.org/t/p/w500/sA16kZgXAa5KTkPv1FcbNNcHkmq.jpg	GB
28848	Sean Pertwee	1964-06-04 00:00:00	https://image.tmdb.org/t/p/w500/j4pAEMhKL5vA61ADrkxxLFtcI4c.jpg	GB
83225	Colin Egglesfield	1973-02-09 00:00:00	https://image.tmdb.org/t/p/w500/cOHljae12aarbS5HZsoasMPf3J0.jpg	US
586106	Pau Poch	1993-01-01 00:00:00	https://image.tmdb.org/t/p/w500/kgWSSCzdgE7eWAl2iSD043VJzE9.jpg	ES
1945695	Yan Tual	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/znQALzXKje5aRUiZXEYfAaW8jKP.jpg	FR
2280178	Sofia Kappel	1998-04-27 00:00:00	https://image.tmdb.org/t/p/w500/y2yMZ37bM9b4oYcsrZFnPpeun4G.jpg	SE
1908347	Zelda Morrison	1996-06-22 00:00:00	https://image.tmdb.org/t/p/w500/8suRdN1ds2iJTPJnLUfoy98CbPa.jpg	US
139422	Tee Reel	1980-06-13 00:00:00	https://image.tmdb.org/t/p/w500/lYnzxsQMdj0CJWA4KuGtqhvo3aP.jpg	US
1903886	Evelyn Claire	1996-04-11 00:00:00	https://image.tmdb.org/t/p/w500/gJWQ1gfCrjGdI9ZFMgSOD1ElPwS.jpg	US
1202732	Chris Cock	1978-12-19 00:00:00	https://image.tmdb.org/t/p/w500/7ZQURgnph71tP4cD3UvWSpAyoTA.jpg	US
125350	Dana DeArmond	1979-06-16 00:00:00	https://image.tmdb.org/t/p/w500/wITtaUtkOKvTVjBMNRomPMdjX74.jpg	US
1997424	Kendra Spade	1998-05-11 00:00:00	https://image.tmdb.org/t/p/w500/roQHjEitd8nWWjAPNOHeO2tn7JJ.jpg	US
1679709	Mark Spiegler	1968-01-01 00:00:00	https://image.tmdb.org/t/p/w500/b7Fc9f9z2iEQnhOEEDf5VuaiIiw.jpg	US
132245	Eva Melander	1974-12-25 00:00:00	https://image.tmdb.org/t/p/w500/rhRJbKhetk4M9KpswhBuWcvZ7Ee.jpg	SE
1531667	Lucy Hart	1979-05-19 00:00:00	https://image.tmdb.org/t/p/w500/5NdrYKZGbh0URR7YGzGrJkP6DtA.jpg	US
610303	John Strong	1969-04-09 00:00:00	https://image.tmdb.org/t/p/w500/cPn2G6WF20I6IqNOcBRCC6Vx9Xm.jpg	UA
136932	Axel Braun	1966-09-22 00:00:00	https://image.tmdb.org/t/p/w500/ld7B9vM9rJ4X5d40kHeuEVrL3Ih.jpg	IT
1614301	Charlotte Cross	1995-09-01 00:00:00	https://image.tmdb.org/t/p/w500/h5vQz6admJszcXVd4u4SsRP3GIr.jpg	US
563723	Xander Corvus	1988-11-18 00:00:00	https://image.tmdb.org/t/p/w500/8JVCcHHVTaGsxF3XCR8Kmt1IODa.jpg	US
1946846	Ivy Sherwood	1992-08-29 00:00:00	https://image.tmdb.org/t/p/w500/iFrn9R8u55QhTPOglYSIr67dCrk.jpg	US
142010	Chanel Preston	1985-12-01 00:00:00	https://image.tmdb.org/t/p/w500/thYGgaUarq7rUGYeNiExoLEfMr0.jpg	US
1252079	Casey Calvert	1990-03-17 00:00:00	https://image.tmdb.org/t/p/w500/wwVjVX2Wer35rOVqC9L5cG1HJ3m.jpg	US
137873	Aiden Starr	1979-08-27 00:00:00	https://image.tmdb.org/t/p/w500/5NgRJeDsUTaxfdA7c3ocQtWYP6C.jpg	US
123088	Mick Blue	1976-09-09 00:00:00	https://image.tmdb.org/t/p/w500/rUrBxRV2uCXPbFIo4mVnOMo7Bnv.jpg	AT
1909553	Nathan Bronson	1988-11-19 00:00:00	https://image.tmdb.org/t/p/w500/wWbUiHSgvZ9J3nZBdWwjxD3TXSy.jpg	US
124045	Bill Bailey	1980-11-21 00:00:00	https://image.tmdb.org/t/p/w500/geePxJVVW7n6j2LDOXl3Q0e7DLW.jpg	US
136093	Steve Holmes	1961-03-23 00:00:00	https://image.tmdb.org/t/p/w500/hj3N1sbk7U1YAhZGsrgoevp2rDw.jpg	RO
1040077	Juliette March	1988-12-03 00:00:00	https://image.tmdb.org/t/p/w500/lCh81tUCpYXsJgaM6kuhq88bd8j.jpg	US
1426252	Abella Danger	1995-11-19 00:00:00	https://image.tmdb.org/t/p/w500/lmty9GJ6ykeqnyg1aGXkb3wkrOR.jpg	US
1762569	Gina Valentina	1997-02-18 00:00:00	https://image.tmdb.org/t/p/w500/x4xTI3nym4cfuRwk5jaV7K2QTLl.jpg	US
1522905	Small Hands	1982-06-25 00:00:00	https://image.tmdb.org/t/p/w500/iLGou3ei40w9CHT4mI25T0lewRw.jpg	US
123139	Derrick Pierce	1973-03-01 00:00:00	https://image.tmdb.org/t/p/w500/d4BUS7c1ztnAES5OoF0y3UtgtXK.jpg	US
135593	Tommy Pistol	1976-07-02 00:00:00	https://image.tmdb.org/t/p/w500/nlcMI2XQutk6BIaZMIdSEs2idmd.jpg	US
550191	Claudio Bergamin	1954-12-31 00:00:00	https://image.tmdb.org/t/p/w500/4uc89oQVZS0jAae4ThbKkHHs0of.jpg	US
3627027	Yoshi Nurijumi	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/lLpMLwoOfEUNBIW7rYkm0hKqTVp.jpg	US
1339697	Rusty Nails	1972-07-24 00:00:00	https://image.tmdb.org/t/p/w500/bRZXtaLXv77C5S8B9orCT2SpVAj.jpg	US
128068	Jules Jordan	1972-05-25 00:00:00	https://image.tmdb.org/t/p/w500/qe2eEs06eqIEH98v0ZDLJqClbn0.jpg	US
15556	Rebecca Hall	1982-05-03 00:00:00	https://image.tmdb.org/t/p/w500/coC58ANiDbqRIyle5zEl9QDektf.jpg	GB
2948491	Kaylee Hottle	2012-05-01 00:00:00	https://image.tmdb.org/t/p/w500/xpQQZgptOUI6duMMBDyCiaJ4JUv.jpg	US
60416	Alex Ferns	1968-10-13 00:00:00	https://image.tmdb.org/t/p/w500/3V3L7MJGURXU6lVaqai80zFT4Wa.jpg	GB
123701	Fala Chen	1982-02-24 00:00:00	https://image.tmdb.org/t/p/w500/nsucfzPlPHeYVXhIS2b8ZtKr4wJ.jpg	CN
15298	Rachel House	1971-10-20 00:00:00	https://image.tmdb.org/t/p/w500/m8D9XlTGfI0ZmauMKtYp5tw8eNi.jpg	NZ
1984017	Chantelle Jamieson	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/dQMkUVkCcKFKVPjZRuSHPwuTK8N.jpg	AU
2096500	Greg Hatton	1976-01-02 00:00:00	https://image.tmdb.org/t/p/w500/j0jioHCWjJJEr41Vr2vHgRRtEMx.jpg	AU
930817	Anthony Brandon Wong	1965-05-12 00:00:00	https://image.tmdb.org/t/p/w500/4QEeh3j7DG6uduyRHGLF6b1KJix.jpg	AU
3366146	Chika Ikogwe	1990-09-23 00:00:00	https://image.tmdb.org/t/p/w500/3BNT7G9U6Xo8eixVvgNtZdAyeGF.jpg	NG
1202032	Vincent B. Gorce	1971-03-03 00:00:00	https://image.tmdb.org/t/p/w500/tGvinuAutqnyovw0sUl1WTtrQf9.jpg	FR
4589985	Zhou Yeye	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/ap1oYlYFBtDZu890pkfFT46SIJa.jpg	CN
4636546	Nick Lawler	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/fyag83fM0i3n43nyqgCLzlzVQ7l.jpg	TH
4193195	Jordy Campbell	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/AeN1423Y3AX2JHF6pLABpAIbfty.jpg	AU
4364226	Cassie Riley	1998-07-18 00:00:00	https://image.tmdb.org/t/p/w500/3ShAghjYQHQ2AIZED6Q0VOgPrbs.jpg	AU
4719447	Patrick Moroney	1998-01-09 00:00:00	https://image.tmdb.org/t/p/w500/t5W8uX5h9zKALp2sdkFBLp5i5Va.jpg	AU
1397778	Anya Taylor-Joy	1996-04-16 00:00:00	https://image.tmdb.org/t/p/w500/jxAbDJWvz4p1hoFpJYG5vY2dQmq.jpg	US
52891	Tom Burke	1981-06-30 00:00:00	https://image.tmdb.org/t/p/w500/9L2O1mAwFQcfEbaB5CHIZUvnqUW.jpg	GB
2431565	Alyla Browne	2010-04-07 00:00:00	https://image.tmdb.org/t/p/w500/tcAQAzqk1z0PsVXqi8HODOVPQoY.jpg	AU
75122	Lachy Hulme	1971-04-01 00:00:00	https://image.tmdb.org/t/p/w500/z6ZEqpIkh1LYQXgSNMcc8akW3ZR.jpg	AU
102603	John Howard	1952-10-22 00:00:00	https://image.tmdb.org/t/p/w500/2XwZDmoeoSiLKDjmmXxQK4m5kHM.jpg	AU
59117	Angus Sampson	1979-02-12 00:00:00	https://image.tmdb.org/t/p/w500/8EX6ul2zyVUg91oDvI3RpYS5szV.jpg	AU
4441956	Charlee Fraser	1997-12-25 00:00:00	https://image.tmdb.org/t/p/w500/lFxpl1F961ORKoNX6F62iEa419m.jpg	AU
73269	Elsa Pataky	1976-07-18 00:00:00	https://image.tmdb.org/t/p/w500/cGgHQPfLFW0AFVlDt82XwdwxdLt.jpg	ES
24898	Nathan Jones	1969-08-21 00:00:00	https://image.tmdb.org/t/p/w500/hlu4qYy9JGPxGn0wT8Ea6mTWR8R.jpg	AU
1056053	Josh Helman	1986-02-22 00:00:00	https://image.tmdb.org/t/p/w500/1thwLjrgvFv7ifjyVtTKQh23OCh.jpg	AU
57795	David Field	1961-06-06 00:00:00	https://image.tmdb.org/t/p/w500/aYtVOMnak4JmlLGw63lJObLf1J.jpg	AU
1551044	Rahel Romahn	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/goKq2RFdHhewUwFu7LM9R8eoisn.jpg	US
150030	David Collins	1969-01-19 00:00:00	https://image.tmdb.org/t/p/w500/a4XNtOqmK4WEvlVgLY1cX07YmT1.jpg	AU
61784	Goran D. Kleut	1975-11-04 00:00:00	https://image.tmdb.org/t/p/w500/vsN8BI3t4c8JHLoLznCZxO9gZ6r.jpg	AU
4377186	CJ. Bloomfield	1991-07-19 00:00:00	https://image.tmdb.org/t/p/w500/aAD2L9PpAsj32AXkqTkteI6NXem.jpg	NZ
3054747	Matuse Paz	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/3D61zv4m0mEqAzSRq1DcKBX9fIU.jpg	AU
1224391	Ian Roberts	1965-07-31 00:00:00	https://image.tmdb.org/t/p/w500/bJHRMaQmojv7Hou1HSrjcdIEQBf.jpg	GB
1125220	Tim Burns	1957-01-01 00:00:00	https://image.tmdb.org/t/p/w500/7pTNhTT1WdvAYV48kqg9f56TDpr.jpg	AU
1513568	Florence Mezzara	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/1OMBJexm2NllhPNZY8u6I01y3bq.jpg	US
3579580	Quaden Bayles	2010-12-13 00:00:00	https://image.tmdb.org/t/p/w500/cgkF366ZtmgBp6ST9gzmIwFJaBh.jpg	AU
1445417	Lee Perry	1959-12-16 00:00:00	https://image.tmdb.org/t/p/w500/zMpLa0qU9ByTvHxmkNyLLKIyH0I.jpg	AU
56162	Josh Randall	1972-01-27 00:00:00	https://image.tmdb.org/t/p/w500/2Ff16QWWbCF4Crs8oTBFM3S9Mar.jpg	US
66055	Richard Norton	1950-01-06 00:00:00	https://image.tmdb.org/t/p/w500/fojWPlb36d63UMzhFL8jOzGbfnP.jpg	AU
3366121	Nick Annas	2005-11-25 00:00:00	https://image.tmdb.org/t/p/w500/hUx5fJR6klTMqKS6pbHPFKWpWko.jpg	AU
2728596	Nat Buchanan	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/r0vGq2jwwA7WQPoD7I0wcOxB2KC.jpg	AU
215913	Jacob Tomuri	1979-12-04 00:00:00	https://image.tmdb.org/t/p/w500/f0jPDz0beDrLsmXWAnfXZqwHqFO.jpg	NZ
1014587	Bryan Probets	1971-01-01 00:00:00	https://image.tmdb.org/t/p/w500/khlX7hm1ap4bJAvsEamYqzBhkWX.jpg	GB
4728234	Chudier Gatwech	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/jGccsQELHxAYg7K9Skb170fpqaj.jpg	ET
2259333	Shivantha Wijesinha	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/bQZ4ps82LdSY0F2A5VPfTEAJmM9.jpg	GB
234548	Daniel Webber	1988-06-28 00:00:00	https://image.tmdb.org/t/p/w500/ldOZipwbPQP7AXoQTQHXQymwu9q.jpg	AU
3100178	Kelli Bailey	1962-09-11 00:00:00	https://image.tmdb.org/t/p/w500/fV66nUKXSRfqxFl8JvSpaRVwjDw.jpg	US
1394433	Hiroshi Kasuga	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/lKi2oPCGSeotF4WidIyYztyM8Qp.jpg	JP
589542	Mario Gas	1947-02-05 00:00:00	https://image.tmdb.org/t/p/w500/rJfShkLP8AV9A2sgcTo9olSmJ14.jpg	UY
552962	César Díaz Capilla	1974-01-15 00:00:00	https://image.tmdb.org/t/p/w500/liyoVSlhHCHcHhTAdP9BLtxTnK2.jpg	ES
1224566	Jonathan D. Mellor	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/gkkpoe9JfhL1A1mofg04cZ1RxtA.jpg	GB
2956442	Yang Enyou	2013-10-16 00:00:00	https://image.tmdb.org/t/p/w500/3CoPKWkYRkuy8G3t0V4gjmcV5xR.jpg	CN
11864	Ryan Phillippe	1974-09-10 00:00:00	https://image.tmdb.org/t/p/w500/fp0GlHdZBt8NGjoms3k3od0w7Qd.jpg	US
46593	Emile Hirsch	1985-03-13 00:00:00	https://image.tmdb.org/t/p/w500/Ah8BYOB7P8tX9jnQVrnAbL2kxYJ.jpg	US
8211	Mena Suvari	1979-02-13 00:00:00	https://image.tmdb.org/t/p/w500/2hRoibF2WkPyML3PD0ijmJo2OKE.jpg	US
1720565	Jeremy Tardy	1990-11-07 00:00:00	https://image.tmdb.org/t/p/w500/irETW24RDmA2EPsCz6XTYgsP2Yh.jpg	US
1677334	Mohamed Hakeemshady	1978-10-01 00:00:00	https://image.tmdb.org/t/p/w500/vu3OeQ25FQf0LBykyO8gSY2DPU7.jpg	SO
1625558	Awkwafina	1988-06-02 00:00:00	https://image.tmdb.org/t/p/w500/l5AKkg3H1QhMuXmTTmq1EyjyiRb.jpg	US
19492	Viola Davis	1965-08-11 00:00:00	https://image.tmdb.org/t/p/w500/bkrRMBXxqR4v3Zeygivfyi6VIfF.jpg	US
4483	Dustin Hoffman	1937-08-08 00:00:00	https://image.tmdb.org/t/p/w500/yFjTzJHE6AFbwQifOlnNDzmiwlq.jpg	US
17419	Bryan Cranston	1956-03-07 00:00:00	https://image.tmdb.org/t/p/w500/kNyTXGkiSP8W4Gs60hF7UoxZnWN.jpg	US
20904	James Hong	1929-02-22 00:00:00	https://image.tmdb.org/t/p/w500/v3lfw5aHOy0paOCx6WHiSnwzbH0.jpg	US
6972	Ian McShane	1942-09-29 00:00:00	https://image.tmdb.org/t/p/w500/rteBJYNgD1yGsHg2HGZAIrYHz1t.jpg	GB
690	Ke Huy Quan	1971-08-20 00:00:00	https://image.tmdb.org/t/p/w500/5PfYVcNLs1gGKIo0qwJrvyc2UOZ.jpg	US
1319469	Ronny Chieng	1985-11-21 00:00:00	https://image.tmdb.org/t/p/w500/nn1y0te102CvakOJ0rSJ7rYPLDF.jpg	MY
171743	Lori Tan Chinn	1948-07-07 00:00:00	https://image.tmdb.org/t/p/w500/i0pvjYbtcGZzVKfqknkA2eBLy1S.jpg	US
19274	Seth Rogen	1982-04-15 00:00:00	https://image.tmdb.org/t/p/w500/2dPFskUtoiG0xafsSEGl9Oz4teA.jpg	CA
2282154	Jimmy Donaldson	1998-05-07 00:00:00	https://image.tmdb.org/t/p/w500/dE6VIMrvZsY5a9gIaWoX40tzYkV.jpg	US
154657	James Sie	1962-12-18 00:00:00	https://image.tmdb.org/t/p/w500/yZ8SFsJJNmhgtNizwcWfknyBoBt.jpg	US
63235	Cedric Yarbrough	1973-03-20 00:00:00	https://image.tmdb.org/t/p/w500/7JsXBxOmHpRdNlVdbWJdbe2YFLO.jpg	US
4379987	Cece Valentina	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/bAdkjOIxQ3NYUcJvkiIEHp6TKVR.jpg	US
2357412	Logan Kim	2007-03-07 00:00:00	https://image.tmdb.org/t/p/w500/brlwtSh5Q3kzmzLqSRf4wIi7eBv.jpg	US
2373501	Reyn Doi	2008-09-20 00:00:00	https://image.tmdb.org/t/p/w500/tEjsr6mcothuc7b6yEGJ6OEZUHf.jpg	US
971877	Mick Wingert	1974-07-04 00:00:00	https://image.tmdb.org/t/p/w500/xMT6toE5LU4NwTSb5rfeATQEE77.jpg	US
16183	Gedde Watanabe	1955-06-26 00:00:00	https://image.tmdb.org/t/p/w500/4uI6QEicUA0cR5suA0B2bEM7JBt.jpg	US
157865	Karen Maruyama	1958-05-29 00:00:00	https://image.tmdb.org/t/p/w500/6XCu6ZFSkF8ppMO40Jx6HgDKJgj.jpg	US
18864	Tom McGrath	1964-08-07 00:00:00	https://image.tmdb.org/t/p/w500/83lSBvaRShYObPvhE89UDUkUfWo.jpg	US
31549	Phil LaMarr	1967-01-24 00:00:00	https://image.tmdb.org/t/p/w500/l5w0qABfsFBxjfWNnpFiaXnh4Nm.jpg	US
64151	Mike Mitchell	1970-10-18 00:00:00	https://image.tmdb.org/t/p/w500/w6ibMbbw7KBrcWxUb7N7h3GEQGO.jpg	US
102693	Colleen Smith	1979-08-30 00:00:00	https://image.tmdb.org/t/p/w500/oWZ76z5N3SDVa1na2KkPD4hngHk.jpg	KR
174563	Paul Pape	1952-07-17 00:00:00	https://image.tmdb.org/t/p/w500/7lBHhavJ6wpLoMl9FybfLzKzVQy.jpg	US
12097	Christopher Knights	1972-10-18 00:00:00	https://image.tmdb.org/t/p/w500/fsdaXx2ytNx2KEW438mlFfSSzkc.jpg	GB
232499	Harry Shum Jr.	1982-04-28 00:00:00	https://image.tmdb.org/t/p/w500/xFQsThmdyuOk9jt3zgZL08ixf2b.jpg	CR
2309874	Kylie Cantrall	2005-06-25 00:00:00	https://image.tmdb.org/t/p/w500/4NT5eQnIczID9nBFOZmFTZ4VdPJ.jpg	US
2630461	Malia Baker	2006-12-18 00:00:00	https://image.tmdb.org/t/p/w500/jpcDv1IZTjvbkYQRnrMT64pKiAc.jpg	CA
1675772	Ruby Rose Turner	2005-10-16 00:00:00	https://image.tmdb.org/t/p/w500/kwnf4SgO6qdl4zxJj5acjsYxIY9.jpg	US
3797199	Morgan Dudley	2001-07-09 00:00:00	https://image.tmdb.org/t/p/w500/7NA7kKTuMJ1kALHtTLP2Obbqozu.jpg	US
1980484	Dara Reneé	2000-11-07 00:00:00	https://image.tmdb.org/t/p/w500/s410paCGWl254kSydPJAa1UJrIn.jpg	US
1089873	Rita Ora	1990-11-26 00:00:00	https://image.tmdb.org/t/p/w500/o1DMrW8vsTYnCcvVTZy6hEvlk4f.jpg	US
33285	Brandy Norwood	1979-02-11 00:00:00	https://image.tmdb.org/t/p/w500/ie1IH8LQI3aGzke4FoYRbcdHv88.jpg	US
80613	China Anne McClain	1998-08-25 00:00:00	https://image.tmdb.org/t/p/w500/wHaHjBLuIxGcc0aGqsaFiCzDoPy.jpg	US
2611805	Joshua Colley	2002-01-20 00:00:00	https://image.tmdb.org/t/p/w500/raNldq1w4CnogapuN2nhknV0lHg.jpg	US
3922466	Peder Lindell	2003-05-31 00:00:00	https://image.tmdb.org/t/p/w500/3GkNMu1uU0nkgrvsAJbhYUgh17Y.jpg	US
1212273	Melanie Paxson	1972-09-26 00:00:00	https://image.tmdb.org/t/p/w500/bCrs1WqTEFY1muwuCfKqrCyPhu7.jpg	US
1455769	Julee Cerda	1978-01-29 00:00:00	https://image.tmdb.org/t/p/w500/mEVWaXXAIncoeTRiHB6AJejumSh.jpg	KR
24200	Leonardo Nam	1979-01-01 00:00:00	https://image.tmdb.org/t/p/w500/yKL70EoAdjJV2JI2CN1Dr5qzAlJ.jpg	AR
89719	Paolo Montalbán	1973-05-21 00:00:00	https://image.tmdb.org/t/p/w500/5bTHfAw2lzd08PosLa9vYqjgsJh.jpg	PH
3555	Jeremy Swift	1960-06-27 00:00:00	https://image.tmdb.org/t/p/w500/z7rFu02dVOkH3wyvHvPd2k3in7a.jpg	GB
1990683	Alex Boniello	1990-10-05 00:00:00	https://image.tmdb.org/t/p/w500/dlTTdjsXJVkgmHyGXTXt5YMVElp.jpg	US
2734255	Grace Narducci	1999-10-06 00:00:00	https://image.tmdb.org/t/p/w500/v9cBH5Nn7NybqB2RvDdem6woEE5.jpg	US
3411744	Sam Morelos	2005-07-07 00:00:00	https://image.tmdb.org/t/p/w500/nmrCwmyVB7BdwNrx1cvvxGY0Ci2.jpg	US
1280503	Ashley Wallen	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/qipM6bYnvPOppHVocj1NEtWrZ4d.jpg	GB
1757755	Ronny Mathew	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/e319puw6iVEzATL9FXYY0MGiQCy.jpg	US
2527414	Nicole Wallace	2002-03-22 00:00:00	https://image.tmdb.org/t/p/w500/seJS4k9g462i7bIal7Z9DiWW5se.jpg	ES
2786960	Gabriel Guevara	2001-02-06 00:00:00	https://image.tmdb.org/t/p/w500/pviRYKEEmoPUfLYwP1VHJ6LQcRg.jpg	ES
970027	Marta Hazas	1977-12-31 00:00:00	https://image.tmdb.org/t/p/w500/1dbeTFRCbWBt70dIGjYHKVLnpaG.jpg	ES
1251336	Iván Sánchez	1974-11-19 00:00:00	https://image.tmdb.org/t/p/w500/woVz8D7t1VUKjFJnsTAdc8tyz5C.jpg	ES
4105602	Eva Ruiz	1998-02-03 00:00:00	https://image.tmdb.org/t/p/w500/bcu0nmQvhxwTzh4csc4kuxJsQee.jpg	ES
4105605	Adriana Ubani	1997-11-25 00:00:00	https://image.tmdb.org/t/p/w500/7TlpwffkqeTu1mQNZW3OG0IdTFm.jpg	ES
31422	Ivan Massagué	1976-09-04 00:00:00	https://image.tmdb.org/t/p/w500/dmnJo2sGlfFjtKb8FDPlNjRhfyc.jpg	ES
56468	Mariano Venancio	1947-08-31 00:00:00	https://image.tmdb.org/t/p/w500/aZT4jP35s7hwOspb4nW1wqKZpmE.jpg	ES
1206196	Jaime Ordóñez	1971-08-19 00:00:00	https://image.tmdb.org/t/p/w500/oORmDftKZFr27jNaZ1XKcVY3eR8.jpg	ES
3690350	Anastasia Russo	2011-10-20 00:00:00	https://image.tmdb.org/t/p/w500/8RQi40pI2ddocE8S3GbXnpUKZ9S.jpg	ES
5530	James McAvoy	1979-04-21 00:00:00	https://image.tmdb.org/t/p/w500/vB6qYlFXgONGVwwxWXE4gf0F8SQ.jpg	GB
1110405	Mackenzie Davis	1987-04-01 00:00:00	https://image.tmdb.org/t/p/w500/ekQbEIKh26jbz17P0wwLbo6uNs9.jpg	CA
59233	Scoot McNairy	1977-11-11 00:00:00	https://image.tmdb.org/t/p/w500/oP2LJEqupxVZ2XdEW1lN5Q5LF3M.jpg	US
1323109	Aisling Franciosi	1993-06-06 00:00:00	https://image.tmdb.org/t/p/w500/qtXgCx5vMlAMIjMbYydDjjzY08T.jpg	IT
2188560	Kris Hitchen	1974-04-28 00:00:00	https://image.tmdb.org/t/p/w500/7HBX75MKwwoiFnLFMS2YKtiPQIB.jpg	GB
13240	Mark Wahlberg	1971-06-05 00:00:00	https://image.tmdb.org/t/p/w500/bTEFpaWd7A6AZVWOqKKBWzKEUe8.jpg	US
4587	Halle Berry	1966-08-14 00:00:00	https://image.tmdb.org/t/p/w500/9aLI0LSi7cbieyiskOdsBaneKmp.jpg	US
18999	J.K. Simmons	1955-01-09 00:00:00	https://image.tmdb.org/t/p/w500/ScmKoJ9eiSUOthAt1PDNLi8Fkw.jpg	US
450	Mike Colter	1976-08-26 00:00:00	https://image.tmdb.org/t/p/w500/rTcfLDlcQ78tVVUDHSFJYiodJtb.jpg	US
31164	Adewale Akinnuoye-Agbaje	1967-08-22 00:00:00	https://image.tmdb.org/t/p/w500/zdtwVtVmmm7VzYfu8xH7mbuTvrH.jpg	GB
1196822	Jessica De Gouw	1988-02-15 00:00:00	https://image.tmdb.org/t/p/w500/pu09eASIUzHPJZMfHPkpFqDZ2RR.jpg	AU
1517252	Alice Lee	1989-04-12 00:00:00	https://image.tmdb.org/t/p/w500/3LVBiCWOLDM6mD0TthfEQ2vcl40.jpg	US
17183	Jackie Earle Haley	1961-07-14 00:00:00	https://image.tmdb.org/t/p/w500/xDPeiyklN8f9Ilowsti4lGVbioj.jpg	US
55467	Stephen Campbell Moore	1979-11-30 00:00:00	https://image.tmdb.org/t/p/w500/5w4EvQfi5YipR5I5lhtN5dCDiEY.jpg	GB
11478	Lorraine Bracco	1954-10-02 00:00:00	https://image.tmdb.org/t/p/w500/tAtpCzN4sTOy1RHpMpJj52zTO4S.jpg	US
65002	Dana Delany	1956-03-13 00:00:00	https://image.tmdb.org/t/p/w500/sw49JGyGVjgtIaARlDb7c3qcAcf.jpg	US
2007198	Alex Brightman	1987-02-05 00:00:00	https://image.tmdb.org/t/p/w500/3QotS4a8RAI1jR6mjWAG4C8HIoq.jpg	US
109669	Fahim Fazli	1966-05-30 00:00:00	https://image.tmdb.org/t/p/w500/hNjSzr3quACIMwotRaRM2yKi9fU.jpg	AF
2277896	Lucy Cork	1991-10-19 00:00:00	https://image.tmdb.org/t/p/w500/litpdpX4LfUyB4OM9q25pUIkPT3.jpg	GB
3725862	Jeśka Pike	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/999GHUz4nPLJFRU4e16YtnbkiI9.jpg	GB
1675387	Adam Collins	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/iuKuZT6xWpzdVhAouEZllgLEwgB.jpg	GB
1475496	Riley Neldam	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/vabMCNK2U2d9dyt4FfLVTp453yp.jpg	US
1553053	Tommy Bayiokos	1965-05-22 00:00:00	https://image.tmdb.org/t/p/w500/81FT5dSauZgrArgtgXhOJyBVAoN.jpg	US
4948573	Nathan Hall	2002-09-13 00:00:00	https://image.tmdb.org/t/p/w500/g1VA75WiwzjuIwXBJhEtcWVqFnK.jpg	GB
4948619	Anthony Thomas	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/v94JaWrDdlEWmYKuuUx6BkDnBTy.jpg	AU
4187325	Jason Latief Anderson	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/aq8GCv618IGNki3Q7d0zbXiaMY9.jpg	US
2303017	Daniel Joseph Woolf	1984-05-02 00:00:00	https://image.tmdb.org/t/p/w500/it2F1ZSOqFp68td0IdfgniooE4d.jpg	JM
2299	Josh Hartnett	1978-07-21 00:00:00	https://image.tmdb.org/t/p/w500/9AhFeNHEcl8CDKHurwnSV3Ad35f.jpg	US
3014800	Ariel Donoghue	2010-03-10 00:00:00	https://image.tmdb.org/t/p/w500/rjucxWiHri2gkFyw5zf9ngVWd4l.jpg	AU
4340759	Saleka Shyamalan	1996-08-01 00:00:00	https://image.tmdb.org/t/p/w500/aFknrMfeoEb7DRg9MnPx3zd9C7V.jpg	US
17486	Alison Pill	1985-11-27 00:00:00	https://image.tmdb.org/t/p/w500/ebcCkhqFtHvHx5dkBfVmlAknDxC.jpg	CA
36819	Hayley Mills	1946-04-19 00:00:00	https://image.tmdb.org/t/p/w500/ktiKpWhBy1O4F9DtB1YxUf3uGA1.jpg	GB
156580	Marnie McPhail	1966-07-04 00:00:00	https://image.tmdb.org/t/p/w500/qHTkE44HUjobp8MwWvVb4xDtQe6.jpg	US
484359	Kid Cudi	1984-01-30 00:00:00	https://image.tmdb.org/t/p/w500/z5TRmx4WQB9Ge1WQa6VdxBKnwmC.jpg	US
4264391	Russ	1992-09-26 00:00:00	https://image.tmdb.org/t/p/w500/wDzuY6KaDv3oWWR6yF8Fk4QVjOT.jpg	US
40385	Marcia Bennett	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/va30xYbQLgI9UvNFv5oNuhiORTC.jpg	US
11614	M. Night Shyamalan	1970-08-06 00:00:00	https://image.tmdb.org/t/p/w500/tOhFWjauKvJgjCVLJFnhbBCZuxZ.jpg	IN
1796797	Michael Brown	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/eZrk95bblzGT4QouyK5sodvDOG8.jpg	CA
1251978	Mateo Arias	1995-10-31 00:00:00	https://image.tmdb.org/t/p/w500/nTlXo5r08sMIh1Vp6BspYRYqdts.jpg	US
2103859	Khiyla Aynne	2008-03-04 00:00:00	https://image.tmdb.org/t/p/w500/gKJrjzcun3sC1gByCPHQ98IZUlr.jpg	CA
1357188	Lara Zaluski	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/qYruuYhE4wqJ1clg23yuVhTTvM2.jpg	CA
2436323	Josh Stone	1983-02-11 00:00:00	https://image.tmdb.org/t/p/w500/bfyUG1oXT97X5jTNylppHYELeYA.jpg	CA
5925	Joshua Peace	1965-12-04 00:00:00	https://image.tmdb.org/t/p/w500/5scowFWZQpvKYi5cOqAT0brgCDI.jpg	CA
529	Guy Pearce	1967-10-05 00:00:00	https://image.tmdb.org/t/p/w500/vTqk6Nh3WgqPubkS23eOlMAwmwa.jpg	GB
1254271	Antonio Te Maioha	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/zqefmIKmQK4z3sixxJIX0haLY7n.jpg	NZ
28744	Jacqueline McKenzie	1967-10-24 00:00:00	https://image.tmdb.org/t/p/w500/hH93PT4yKLtrXyBVw7AF7DbCh3p.jpg	AU
1365	Lawrence Makoare	1968-03-20 00:00:00	https://image.tmdb.org/t/p/w500/gNWX2QLQXzjPzynCwa0azyKYG4M.jpg	NZ
152566	Dean O'Gorman	1976-12-01 00:00:00	https://image.tmdb.org/t/p/w500/2goR6GBeQey7EkTmLufrEi0PZcb.jpg	NZ
1097391	Jared Turner	1978-04-12 00:00:00	https://image.tmdb.org/t/p/w500/mYJeTvEZsY2bfNCVks1zMMZYwLu.jpg	NZ
3756918	Marris Collins	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/gfnpxjKrBt4v3ju9UidEk6wAflB.jpg	NZ
1615098	Duane Evans Jr.	2003-09-05 00:00:00	https://image.tmdb.org/t/p/w500/tqTeJG1QEwddgU97UNkEW6nOsm0.jpg	NZ
107546	Tania Nolan	1983-08-19 00:00:00	https://image.tmdb.org/t/p/w500/nINY9C4zIwRdI0fR0NcXWIKtYiE.jpg	NZ
4825976	Peata Panoho	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/yObTqU08tt5R2RXEWP3Y1q0tPy3.jpg	NZ
1169229	Will Wallace	1971-11-04 00:00:00	https://image.tmdb.org/t/p/w500/k9IfRx7yn8Exd4S4DLMQNAtlhMU.jpg	NZ
205427	Mark Mitchinson	1966-07-06 00:00:00	https://image.tmdb.org/t/p/w500/dBnuglswEEKSQk6kxbSd6D1uS5j.jpg	GB
205407	Aidee Walker	1981-01-24 00:00:00	https://image.tmdb.org/t/p/w500/aZXzj5qcAqDCtuDjWpxULeX1T3a.jpg	NZ
1193052	Stephen Lovatt	1964-05-27 00:00:00	https://image.tmdb.org/t/p/w500/hN24wBIZ1BmuedLi69bKjFHUERD.jpg	NZ
1658802	Andra Day	1984-12-30 00:00:00	https://image.tmdb.org/t/p/w500/y0UZlV2tG3Gu1mmJm2Jhb9FWr4e.jpg	US
515	Glenn Close	1947-03-19 00:00:00	https://image.tmdb.org/t/p/w500/4VHZ1GfLwN7MUgApy0LCBzdDF9L.jpg	US
1474123	Caleb McLaughlin	2001-10-13 00:00:00	https://image.tmdb.org/t/p/w500/6YjorSZyqFBl3f4sgcCQmOc1yoi.jpg	US
2214765	Demi Singleton	2007-02-27 00:00:00	https://image.tmdb.org/t/p/w500/A11knIgd0doXeZYdiwIpNkskRoy.jpg	US
53923	Aunjanue Ellis-Taylor	1969-02-21 00:00:00	https://image.tmdb.org/t/p/w500/79asqIyKo67LliUm5kztgkXjwzS.jpg	US
60561	Mo'Nique	1967-12-11 00:00:00	https://image.tmdb.org/t/p/w500/bzSVVBKTyMi4K6MZvFCzBJs91F5.jpg	US
4987	Omar Epps	1973-07-20 00:00:00	https://image.tmdb.org/t/p/w500/wpsrJit3pVEPoyN8Cb0DBWoy2Mm.jpg	US
13023	Colleen Camp	1953-06-07 00:00:00	https://image.tmdb.org/t/p/w500/hNAIkUVtsQfpC95BDkXr1lmoI2F.jpg	US
80615	Juanita Jennings	1952-09-12 00:00:00	https://image.tmdb.org/t/p/w500/AbSt8u0rSeb2eMfyUMGpUCu1uyw.jpg	US
65397	Kimberly Russell	1964-12-29 00:00:00	https://image.tmdb.org/t/p/w500/shdU4xS8mYlS8N6KFGaT07aYVXc.jpg	US
1937778	James William O'Halloran	1984-10-20 00:00:00	https://image.tmdb.org/t/p/w500/yad3ZHGMfwvtQjhKIKvwxftW86L.jpg	AU
3129672	Ariyan Mehedi	2001-07-27 00:00:00	https://image.tmdb.org/t/p/w500/AIPr0pext5xMFqcFsq6SC1Aj3V.jpg	BD
130689	Malieek Straughter	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/w1CFnOkXdU2F7wYB9BRFFKBtFjg.jpg	US
205	Kirsten Dunst	1982-04-30 00:00:00	https://image.tmdb.org/t/p/w500/5dI5s8Oq2Ook5PFzTWMW6DCXVjm.jpg	US
52583	Wagner Moura	1976-06-27 00:00:00	https://image.tmdb.org/t/p/w500/yJjV1ZCQbCSSgRy05FncCKjyaY4.jpg	BR
196179	Stephen McKinley Henderson	1949-08-31 00:00:00	https://image.tmdb.org/t/p/w500/z2weSPo4sdMNj47tP5o0me41r2z.jpg	US
109019	Nelson Lee	1975-10-16 00:00:00	https://image.tmdb.org/t/p/w500/3zKvaCGrZnxQLnlUxnCITeMp86K.jpg	TW
17039	Nick Offerman	1970-06-26 00:00:00	https://image.tmdb.org/t/p/w500/zhmWZEJkzqgkIbSqZmFtUm0AwUV.jpg	US
1385813	Jefferson White	1989-11-03 00:00:00	https://image.tmdb.org/t/p/w500/8QSrhrWpqTBGJN3rfijXCvmOcb5.jpg	US
1431398	Vince Pisani	1978-03-17 00:00:00	https://image.tmdb.org/t/p/w500/auCC2e7IKC146MDvO4k8tPXMKaZ.jpg	US
1508173	Edmund Donovan	1990-08-24 00:00:00	https://image.tmdb.org/t/p/w500/7ETHPvdkEypL9vkxdQNHnE3S02a.jpg	US
1457238	Sonoya Mizuno	1986-07-01 00:00:00	https://image.tmdb.org/t/p/w500/scbRPaGPw3VnR6mrmZQZi6Cuj1m.jpg	JP
1528809	James Yaegashi	1972-12-10 00:00:00	https://image.tmdb.org/t/p/w500/aeINg1xUlthMoN8ImouqkCkThYi.jpg	JP
1515510	Melissa Saint-Amand	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/3MMyuMtEaYtB5v1BH47se4JPWWO.jpg	US
1327613	Karl Glusman	1988-01-01 00:00:00	https://image.tmdb.org/t/p/w500/5IM5WICx22z7V7jCfyFIKqsiAZx.jpg	US
2088446	Jin Ha	1990-06-19 00:00:00	https://image.tmdb.org/t/p/w500/gawCQyolbVONqOa10RDXj9sH7r9.jpg	KR
2135069	Jojo T. Gibbs	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/sIHpG5ux9C14XADUHa11EWOMA6I.jpg	US
1689329	Juani Feliz	1989-01-03 00:00:00	https://image.tmdb.org/t/p/w500/qDr3nNbTRwBBNQLnF4UCiTCVfPQ.jpg	DO
88124	Jesse Plemons	1988-04-02 00:00:00	https://image.tmdb.org/t/p/w500/t0pEM4pYfWGWiWoWErcmj2Ty16E.jpg	US
1734935	Evan Holtzman	1978-03-31 00:00:00	https://image.tmdb.org/t/p/w500/6bMtNQloX5g4d1xNa4QLKaQKL0z.jpg	US
963818	Troy Baker	1976-04-01 00:00:00	https://image.tmdb.org/t/p/w500/k3eNrfCd6tEH7RKDwn6ZUpmjMnf.jpg	US
11782	Adrienne Barbeau	1945-06-11 00:00:00	https://image.tmdb.org/t/p/w500/8uQqjG63SFCkmgdFB4SG8wRQmfp.jpg	US
35219	Corey Burton	1955-08-03 00:00:00	https://image.tmdb.org/t/p/w500/wcpFwdL7m01cZoBJiUSMQVakK2G.jpg	US
49827	Michael Cerveris	1960-11-06 00:00:00	https://image.tmdb.org/t/p/w500/vahLGniF2yY8I11ZtzhhhXVTbDc.jpg	US
27993	Jeffrey Combs	1954-09-09 00:00:00	https://image.tmdb.org/t/p/w500/dfWcxKNsyGuN18GjWkbOmMhO4c9.jpg	US
11024	Kelly Hu	1968-02-13 00:00:00	https://image.tmdb.org/t/p/w500/aE8K43akwifeAPpDFKiEJ678Bvn.jpg	US
1194347	John Marshall Jones	1962-08-17 00:00:00	https://image.tmdb.org/t/p/w500/8aQ8qxVOeUx23Jw89ouj9gOwy1W.jpg	US
127387	Yuri Lowenthal	1971-03-05 00:00:00	https://image.tmdb.org/t/p/w500/aLgXm0kbbIC8I5OBmnsK8TgVKwy.jpg	US
25879	Geoff Pierson	1949-06-16 00:00:00	https://image.tmdb.org/t/p/w500/vIhxKBwqV19CwHdPuycmkchYOba.jpg	US
29528	Matthew Rhys	1974-11-08 00:00:00	https://image.tmdb.org/t/p/w500/1HO4P8rMOPLRUUfz9m43zkzJNCK.jpg	GB
51798	Katee Sackhoff	1980-04-08 00:00:00	https://image.tmdb.org/t/p/w500/kzcwfDDrgXnVgyTfcpG0obOn7Qk.jpg	US
28248	Dwight Schultz	1947-11-24 00:00:00	https://image.tmdb.org/t/p/w500/kVXkC94gNdSWRvDAs0DqBCduJ4S.jpg	US
216973	Jason Spisak	1973-08-29 00:00:00	https://image.tmdb.org/t/p/w500/yWxJDXNcocccr1LkEuVXapVdcXS.jpg	US
106774	Rick D. Wasserman	1973-10-17 00:00:00	https://image.tmdb.org/t/p/w500/nopjtbzgBB97uD9V3sDjRTi8rBP.jpg	US
39389	Titus Welliver	1961-03-12 00:00:00	https://image.tmdb.org/t/p/w500/3hTwn7Maktr6ONq1VvfqyRacjiv.jpg	US
3323741	Kelly Rian Sanson	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/qYL3sUKcnt6nlnM1M9gUgwI6iXh.jpg	GB
3122182	Chrissie Wunna	1980-12-19 00:00:00	https://image.tmdb.org/t/p/w500/718I2EmnNGLR0UviedliaA4kKmz.jpg	GB
3254592	Danielle Scott	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/ijFTK3OADnuAIjpRTbzuiZYnlYA.jpg	GB
4429403	Peter Watson	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/fc2O8uhvFpBnOjeDcwSKdHaApRn.jpg	GB
3587720	Helen Fullerton	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/6fCZs7rBHKDAwyONutpll3Z2nYw.jpg	XI
3553540	Jenny Miller	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/jcBgqQrFtkycmhkuCPJ1XycIaB9.jpg	GB
2469350	Sarah T. Cohen	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/11p9ZVKJp0llurWCn8RFb0OQyMJ.jpg	GB
3124678	Stephen Staley	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/gZtCL1OTtOQeqG42PSL3VH2BDJ4.jpg	GB
4011036	Kitty Sudbery	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/18H9RBY3f2hfU5FTQ81lXWImmoF.jpg	GB
3570378	Simon Ellis	1971-01-01 00:00:00	https://image.tmdb.org/t/p/w500/5jMod5AQsn2FD7QGanvoXGZMMVT.jpg	GB
3074171	Dana Fradkin	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/wsmRTa1OGvIGkplddLb0pzbluaC.jpg	CA
1676520	Dominique Fishback	1991-03-22 00:00:00	https://image.tmdb.org/t/p/w500/zduC0PM7xKzFX4F7DH8CCt5gt6O.jpg	US
19540	Peter Cullen	1941-07-28 00:00:00	https://image.tmdb.org/t/p/w500/9Snf4fBUkk5MrAjqtNtgZRJYJbj.jpg	CA
2372	Ron Perlman	1950-04-13 00:00:00	https://image.tmdb.org/t/p/w500/9riPBfsWpzEzh2y9ucxTW22iakI.jpg	US
22970	Peter Dinklage	1969-06-11 00:00:00	https://image.tmdb.org/t/p/w500/9CAd7wr8QZyIN0E7nm8v1B6WkGn.jpg	US
1620	Michelle Yeoh	1962-08-06 00:00:00	https://image.tmdb.org/t/p/w500/nrbHNzSMydpWK9um5VqWIFJihB5.jpg	MY
1427948	Pete Davidson	1993-11-16 00:00:00	https://image.tmdb.org/t/p/w500/f3kubnZu3KgMniExcq9nJy8RwjW.jpg	US
1700631	Liza Koshy	1996-03-31 00:00:00	https://image.tmdb.org/t/p/w500/pPu4TYkuNGmPEykWzFwCz55pAWB.jpg	US
2627590	Cristo Fernández	1991-01-27 00:00:00	https://image.tmdb.org/t/p/w500/irx5BVVLSQWY9m5NrhqyxPekwIY.jpg	MX
141610	Luna Lauren Velez	1964-11-02 00:00:00	https://image.tmdb.org/t/p/w500/98BvmTJCZHx0jPv0oNcv04Jkmfb.jpg	US
2940842	Dean Scott Vazquez	2008-02-18 00:00:00	https://image.tmdb.org/t/p/w500/bo4Cmv8rXIYSskIbMFbrcIedFnG.jpg	US
1890500	Sarah Stiles	1979-06-20 00:00:00	https://image.tmdb.org/t/p/w500/t1OuHZmz9GlbFu7bfOUg3nzIki6.jpg	US
90461	Leni Parker	1966-11-05 00:00:00	https://image.tmdb.org/t/p/w500/rmOCAuZxYO50EmRxNDdrS3JB6f1.jpg	CA
237	Aidan Devine	1968-08-01 00:00:00	https://image.tmdb.org/t/p/w500/3qrUCw73cAN0923x5jCxAiiSaJE.jpg	GB
59613	Mike Chute	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/i1zw8nmh7pWHj3KbrVb2GI5ZY2F.jpg	CA
937792	Sean Tucker	1973-02-23 00:00:00	https://image.tmdb.org/t/p/w500/45OP1d88I1Gsr57kRv7Q1u3HbW8.jpg	CA
2131852	Amiel Cayo	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/AbkBl3JoWlSbWtpsFqQI7ypTpAe.jpg	US
50217	Michael Kelly	1969-05-22 00:00:00	https://image.tmdb.org/t/p/w500/riyeGgTnSWGZGJ9k9qK38lfclz1.jpg	US
1518933	Michaela Jaé Rodriguez	1991-01-07 00:00:00	https://image.tmdb.org/t/p/w500/8Mer8z72B2h2yv77qLVi6C2Io5G.jpg	US
91671	Colman Domingo	1969-11-28 00:00:00	https://image.tmdb.org/t/p/w500/2tu6T9ugnf82qIMGVKWSb0dvvq5.jpg	US
105875	Tongayi Chirisa	1981-08-08 00:00:00	https://image.tmdb.org/t/p/w500/iNUnPz0fcz2kGYZ5lhkXo042iAl.jpg	ZW
10980	Daniel Radcliffe	1989-07-23 00:00:00	https://image.tmdb.org/t/p/w500/iPg0J9UzAlPj1fLEJNllpW9IhGe.jpg	GB
10989	Rupert Grint	1988-08-24 00:00:00	https://image.tmdb.org/t/p/w500/iFlkpTaOF6fGLqxz8b0PhI0i0zN.jpg	GB
10990	Emma Watson	1990-04-15 00:00:00	https://image.tmdb.org/t/p/w500/A14lLCZYDhfYdBa0fFRpwMDiwRN.jpg	FR
194	Richard Harris	1930-10-01 00:00:00	https://image.tmdb.org/t/p/w500/51wDHVFNqrYgvUBMOcACAt4sJU9.jpg	IE
10993	Tom Felton	1987-09-22 00:00:00	https://image.tmdb.org/t/p/w500/k22yJiIXmHyw6kjE6qbZU9frKLq.jpg	GB
4566	Alan Rickman	1946-02-21 00:00:00	https://image.tmdb.org/t/p/w500/nKl8ZRYjBJya7aj7phJUyrtSll6.jpg	GB
1923	Robbie Coltrane	1950-03-30 00:00:00	https://image.tmdb.org/t/p/w500/jOHs3xvlwRiiG2CLtso5zzmGCXg.jpg	GB
10978	Maggie Smith	1934-12-28 00:00:00	https://image.tmdb.org/t/p/w500/pxJSXL9NELIsawroTYNQOt5JlZz.jpg	GB
10983	Richard Griffiths	1947-07-31 00:00:00	https://image.tmdb.org/t/p/w500/iZLE14qeU9ytbJVrfpZ8S08Qmnf.jpg	GB
10985	Ian Hart	1964-10-08 00:00:00	https://image.tmdb.org/t/p/w500/xMC8aPDwhEZcjRHEFcgytSr3BzM.jpg	GB
10981	Fiona Shaw	1958-07-10 00:00:00	https://image.tmdb.org/t/p/w500/tjM74LcxwnYM77Csg1EtlXb1F9a.jpg	IE
5049	John Hurt	1940-01-22 00:00:00	https://image.tmdb.org/t/p/w500/8NriFCt6BxzW1Ex2TxGJfvQibrz.jpg	GB
11180	David Bradley	1942-04-17 00:00:00	https://image.tmdb.org/t/p/w500/rDp3nmZTZIYokp3aSOzClpDkVlS.jpg	GB
96841	Matthew Lewis	1989-06-27 00:00:00	https://image.tmdb.org/t/p/w500/aPQCLK2gxWOallsFoEwjb1p9lWE.jpg	GB
11179	Sean Biggerstaff	1983-03-15 00:00:00	https://image.tmdb.org/t/p/w500/6g9cQWg3ikD3xboDtyF8qKdpmgl.jpg	GB
11184	Warwick Davis	1970-02-03 00:00:00	https://image.tmdb.org/t/p/w500/nGorSpUIQWAEErxq8KdDcIF6Q00.jpg	GB
10982	Harry Melling	1989-03-17 00:00:00	https://image.tmdb.org/t/p/w500/b0pHwi2MeqxEpeWnF4Llihu53aJ.jpg	GB
96851	James Phelps	1986-02-25 00:00:00	https://image.tmdb.org/t/p/w500/dk7kTamtnbgSA40Lg00aE36hljs.jpg	GB
140368	Oliver Phelps	1986-02-25 00:00:00	https://image.tmdb.org/t/p/w500/kb00uK7sCDB5K6tiH5rav9kzAfl.jpg	GB
8930	John Cleese	1939-10-27 00:00:00	https://image.tmdb.org/t/p/w500/yonuTnGcc3q9A1w5P7N3dDRdPSh.jpg	GB
234923	Alfred Enoch	1988-12-02 00:00:00	https://image.tmdb.org/t/p/w500/eEVvPHmxRBcEGqtoTujncmwNDhR.jpg	GB
956224	Jamie Waylett	1989-07-21 00:00:00	https://image.tmdb.org/t/p/w500/2Eg3ImAsq5c5tNAyJFHcFC1lejf.jpg	GB
11212	Josh Herdman	1987-09-09 00:00:00	https://image.tmdb.org/t/p/w500/dUWM0gIhQJayVTp30EsoafhLOWt.jpg	GB
20240	Zoë Wanamaker	1949-05-13 00:00:00	https://image.tmdb.org/t/p/w500/keFC6KG1ewLW0ZaP7YkmLVECRrQ.jpg	US
477	Julie Walters	1950-02-22 00:00:00	https://image.tmdb.org/t/p/w500/bCTkV2OUgzbJdQEoCk3GesE4DXq.jpg	GB
10991	Bonnie Wright	1991-02-17 00:00:00	https://image.tmdb.org/t/p/w500/eCDdCvGYYlUM3neNJ1dwaPEgzqG.jpg	GB
871100	Luke Youngblood	1986-06-12 00:00:00	https://image.tmdb.org/t/p/w500/fUHblnZSNAf1AnbPLMhDE16Sen.jpg	GB
10987	Verne Troyer	1969-01-01 00:00:00	https://image.tmdb.org/t/p/w500/iNjzleUvrnhN4PDuuJerF2SCFfn.jpg	US
1643	Adrian Rawlins	1958-03-27 00:00:00	https://image.tmdb.org/t/p/w500/G0PGZqTjenuVTAQiib4ScU7vAI.jpg	GB
10988	Geraldine Somerville	1967-05-19 00:00:00	https://image.tmdb.org/t/p/w500/vyLIquF45MpN6OOPmk8L7gnmKrY.jpg	GB
1220119	Elizabeth Spriggs	1929-09-18 00:00:00	https://image.tmdb.org/t/p/w500/aXyhNX3nqrtrwtIHTwU8brmbdrq.jpg	GB
19903	Richard Bremmer	1953-01-27 00:00:00	https://image.tmdb.org/t/p/w500/f6B04svt1I5WWwWWFd6AIu7YAfG.jpg	GB
58778	Nina Young	1966-01-01 00:00:00	https://image.tmdb.org/t/p/w500/mzR6dmNI5jluErFSM1eWkOb7smI.jpg	GB
10732	Terence Bayler	1930-01-24 00:00:00	https://image.tmdb.org/t/p/w500/ui0sfTzTnum4IkFVrLdpOsUbJDL.jpg	NZ
10655	Leslie Phillips	1924-04-20 00:00:00	https://image.tmdb.org/t/p/w500/xD1ud9ud75GRRQz2EDATyE7NhUV.jpg	GB
1261131	Simon Fisher-Becker	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/wt7FOsSF0DDIkQnsiyQbb9G75QG.jpg	GB
10984	Derek Deadman	1940-03-11 00:00:00	https://image.tmdb.org/t/p/w500/f08j7CcKGKwFsCV6yEhjhb83Vuy.jpg	GB
56650	Ray Fearon	1967-06-01 00:00:00	https://image.tmdb.org/t/p/w500/ou2cqhqdhfQoKVEBpIh0P3sKZti.jpg	GB
1796507	David Holmes	1981-01-01 00:00:00	https://image.tmdb.org/t/p/w500/zZw5evlkEPQb9sOqnGY7KH1K96z.jpg	GB
1795303	Jean Southern	1927-01-14 00:00:00	https://image.tmdb.org/t/p/w500/cdItrlTcghSBIgQO5JHt27OdPbT.jpg	GB
430776	Leila Hoffman	1934-06-11 00:00:00	https://image.tmdb.org/t/p/w500/eI2eL9s2VVMVfmie7xO7jeDcLiM.jpg	GB
143240	Julianne Hough	1988-07-20 00:00:00	https://image.tmdb.org/t/p/w500/s4B1sheXe3zem1H8VXd5oQ2Wu1m.jpg	US
1019545	Derek Hough	1985-05-17 00:00:00	https://image.tmdb.org/t/p/w500/tRHZqu9l6DfdKsASK4sfhjjT5p7.jpg	US
1230975	Dani Harmer	1989-02-08 00:00:00	https://image.tmdb.org/t/p/w500/mrymUPzLZZYFoqbSHvKokAmyxWS.jpg	GB
225473	Paul Marc Davis	1974-04-16 00:00:00	https://image.tmdb.org/t/p/w500/utrqm0eJKhy9zvJWhZosxaFKtZ5.jpg	GB
56446	John Cena	1977-04-23 00:00:00	https://image.tmdb.org/t/p/w500/rgB2eIOt7WyQjdgJCOuESdDlrjg.jpg	US
1489211	Simu Liu	1989-04-19 00:00:00	https://image.tmdb.org/t/p/w500/xc7I32luBZfJgx9lm92aT9xiI6T.jpg	CN
1607789	Ayden Mayeri	1990-10-01 00:00:00	https://image.tmdb.org/t/p/w500/5SG2Glmd6n44m1NAOHfyM3Ke0qr.jpg	US
1347294	Donald Watkins	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/rMPjEgjxK1NQOmwvkOIIKxhRLk2.jpg	US
3103358	Sam Asghari	1994-03-03 00:00:00	https://image.tmdb.org/t/p/w500/d8YGlwclB355weFnKoKDEz9VXRI.jpg	IR
1276759	Machine Gun Kelly	1990-04-22 00:00:00	https://image.tmdb.org/t/p/w500/astSdaQqoYyI4p694WEllO6q3aN.jpg	US
57599	Seann William Scott	1976-10-03 00:00:00	https://image.tmdb.org/t/p/w500/mKc2YXdh8d4U2jYDwpLWaOY6Jwg.jpg	US
1513304	Dolly de Leon	1969-04-13 00:00:00	https://image.tmdb.org/t/p/w500/voGVHt9nJixzSkBWbQjalxeLVEj.jpg	PH
75463	Michael Hitchcock	1958-07-28 00:00:00	https://image.tmdb.org/t/p/w500/sLKiaWJtExmjORZCVYHB0cTgmMn.jpg	US
59206	Becky Ann Baker	1953-02-17 00:00:00	https://image.tmdb.org/t/p/w500/84fEZMqVMlcl9EaBeCLbrYhHn0x.jpg	US
1230842	Leslie David Baker	1958-02-19 00:00:00	https://image.tmdb.org/t/p/w500/9h3xlV5IYqKinlQCW1ouU7sjwWF.jpg	US
2050577	Taylor Ortega	1989-05-26 00:00:00	https://image.tmdb.org/t/p/w500/EQDeznH38E5KP1N879NYBSOhti.jpg	US
102744	Monique Ganderton	1980-08-06 00:00:00	https://image.tmdb.org/t/p/w500/kBhk7VQr42ge3g5iuLXsbpgWeIa.jpg	CA
3759989	Imani Love	1994-12-16 00:00:00	https://image.tmdb.org/t/p/w500/gld9Hz8oQUhpXFZ2GKVgKOxB8ti.jpg	US
83522	Tito Ortiz	1975-01-23 00:00:00	https://image.tmdb.org/t/p/w500/ivG0rCc5FE1XWdh6CIBTWfeIgBk.jpg	US
6905	Bruce Dern	1936-06-04 00:00:00	https://image.tmdb.org/t/p/w500/oD4nU9p9kCrnrnPP02uPHONMKYc.jpg	US
77808	Randy Charach	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/kztbkYvm8QU8WFvf5BxDAJwvSFs.jpg	CA
73421	Joaquin Phoenix	1974-10-28 00:00:00	https://image.tmdb.org/t/p/w500/u38k3hQBDwNX0VA22aQceDp9Iyv.jpg	PR
237405	Lady Gaga	1986-03-28 00:00:00	https://image.tmdb.org/t/p/w500/yqetkWwPY4lGsdE7uvmCp7ksQf0.jpg	US
2039	Brendan Gleeson	1955-03-29 00:00:00	https://image.tmdb.org/t/p/w500/ctPPJu5ZYDZr1IPmzoNpezczrm0.jpg	IE
2229	Catherine Keener	1959-03-23 00:00:00	https://image.tmdb.org/t/p/w500/n4CTwGszs6cwS1wJRlDQ5Mlh7Ex.jpg	US
1545693	Zazie Beetz	1991-06-01 00:00:00	https://image.tmdb.org/t/p/w500/ijrT4pvALvxU0gphea4YxDnDh6e.jpg	DE
2399836	Harry Lawtey	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/l2qFs3TntkZD0G3zFEd1o2DXSWX.jpg	GB
2131	Ken Leung	1970-01-21 00:00:00	https://image.tmdb.org/t/p/w500/hpatUP6u74gkpDRmn9voNY9V43O.jpg	US
1171570	Jacob Lofland	1996-07-30 00:00:00	https://image.tmdb.org/t/p/w500/hlDVsEhgvNX5xnAcqX3HaBXAgNS.jpg	US
141748	Sharon Washington	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/uUTYgfcmJUfz3cm7cEqiXlHPRAv.jpg	US
17200	Bill Smitrovich	1947-05-16 00:00:00	https://image.tmdb.org/t/p/w500/yzZUYnAdX0MMA8eZMTVsXufRCfU.jpg	US
1180860	John Lacy	1965-08-29 00:00:00	https://image.tmdb.org/t/p/w500/9v2fOfR5UccdFbOuhn7UYmf4cRE.jpg	US
117885	Gattlin Griffith	1998-11-13 00:00:00	https://image.tmdb.org/t/p/w500/esMHJA8lP8y60AqJZH9JJBMIRIz.jpg	US
205128	Mike Houston	1976-02-23 00:00:00	https://image.tmdb.org/t/p/w500/slFvhF8uFXfnrquxVbcbx3lFSRz.jpg	US
1398836	Jimmy Smagula	1976-01-15 00:00:00	https://image.tmdb.org/t/p/w500/eJCPG4KqGQezTNdN4LLzFjHPHOz.jpg	US
159870	Brian Donahue	1962-08-05 00:00:00	https://image.tmdb.org/t/p/w500/ajWAfpzRuc9jI43kSWZjQ1s5mFf.jpg	US
216986	Luke Hemsworth	1980-11-05 00:00:00	https://image.tmdb.org/t/p/w500/djq5j4VVUxpnCvrTnqaax4n3pqD.jpg	AU
192	Morgan Freeman	1937-06-01 00:00:00	https://image.tmdb.org/t/p/w500/905k0RFzH0Kd6gx8oSxRdnr6FL.jpg	US
3325593	Joseph Baena	1997-10-02 00:00:00	https://image.tmdb.org/t/p/w500/fZTpJH57gFkFJpCuhhFL0VuYdA1.jpg	US
61856	Mykel Shannon Jenkins	1969-07-03 00:00:00	https://image.tmdb.org/t/p/w500/byIXjhCcP9D854m5NoFYydW6uLC.jpg	US
3277483	Grant Feely	2011-10-15 00:00:00	https://image.tmdb.org/t/p/w500/7Oo9aQArAoJK1207UOenbk5NP6W.jpg	US
3729583	Connor DeWolfe	2000-08-13 00:00:00	https://image.tmdb.org/t/p/w500/zT0pR8j5LDYSk9Rlwo2xKDR0z2i.jpg	US
2519858	Sean Rogers	1989-09-06 00:00:00	https://image.tmdb.org/t/p/w500/hYZiDuFNriFbLvKoQh0PL5h8Gvc.jpg	US
3817648	Derrick Goodman Jr.	1979-01-29 00:00:00	https://image.tmdb.org/t/p/w500/aPHwhDzwzsXPWTGIqwdVfjwfdJk.jpg	US
3328745	André Wilkerson	1989-06-30 00:00:00	https://image.tmdb.org/t/p/w500/v0tx3sKo2uAtPtr1LhsBJfrkIlZ.jpg	US
1992208	Leslie Sides	1972-10-26 00:00:00	https://image.tmdb.org/t/p/w500/pyrpNdcfT63snOu8RGszWbJ3mYe.jpg	US
4001413	Breana Symone	2001-03-08 00:00:00	https://image.tmdb.org/t/p/w500/5CROlgC3jp8nJ8q8wx7gpqtLazs.jpg	US
466505	Kumail Nanjiani	1978-02-21 00:00:00	https://image.tmdb.org/t/p/w500/9EyrK1Cv7ey1h1GgmsVAOn45w6G.jpg	PK
9281	Elizabeth Banks	1974-02-10 00:00:00	https://image.tmdb.org/t/p/w500/szqEXmC0oAqRnN7zt1XAsbHpJfW.jpg	US
10556	Carol Kane	1952-06-18 00:00:00	https://image.tmdb.org/t/p/w500/dm3Ci8XuVYZBqqlYtaLgth94VUe.jpg	US
139075	David Mitchell	1974-07-14 00:00:00	https://image.tmdb.org/t/p/w500/mHN2NWjBsXseWqq7Zg8K31NS91n.jpg	GB
59784	Carlos Alazraqui	1962-07-20 00:00:00	https://image.tmdb.org/t/p/w500/d2hufnjlfsZiY7N9NLZ6b7FE1IZ.jpg	US
1529387	Brock Baker	1986-03-07 00:00:00	https://image.tmdb.org/t/p/w500/wWNKCFvRXmP8U8VHWxfdbhOEw3e.jpg	US
19547	Gregg Berger	1950-12-10 00:00:00	https://image.tmdb.org/t/p/w500/bMlJUmhblX50gQrnA8XWG7UuaLk.jpg	US
54427	Kimberly Brooks	1968-08-08 00:00:00	https://image.tmdb.org/t/p/w500/iPlCk1VQ8fnAtsMow6HlCZoQc0w.jpg	US
2025381	Sean Chiplock	1990-06-21 00:00:00	https://image.tmdb.org/t/p/w500/8P5OURG4GSdvzt17EqO2W9L8rbz.jpg	US
2447208	Amber Lee Connors	1991-04-09 00:00:00	https://image.tmdb.org/t/p/w500/2Rbv4zNRpIn626N6YdcQojyRoLi.jpg	US
45924	Ian James Corlett	1962-08-29 00:00:00	https://image.tmdb.org/t/p/w500/rQ6qKPg8Tzt9dZPuQpzbnGJJCEY.jpg	CA
60232	David Cowgill	1960-12-08 00:00:00	https://image.tmdb.org/t/p/w500/A3OFXT1LRCzIjvV7VXe4SDTg5U.jpg	US
130081	Robin Atkin Downes	1976-09-06 00:00:00	https://image.tmdb.org/t/p/w500/qb4xPIJGiKyiQ2MhSDQzFWxN0jS.jpg	GB
84213	Bill Farmer	1952-11-14 00:00:00	https://image.tmdb.org/t/p/w500/lhezx68R12s5Bsv7d77BrQb7tWA.jpg	US
170317	Dave Fennoy	1952-01-20 00:00:00	https://image.tmdb.org/t/p/w500/1azEou77GcmST8hYJmV30PhAyO6.jpg	US
143346	Keith Ferguson	1972-02-26 00:00:00	https://image.tmdb.org/t/p/w500/8EvTlmOhP34EZFEGsznqjbr4o4q.jpg	US
188982	Erin Fitzgerald	1972-09-21 00:00:00	https://image.tmdb.org/t/p/w500/fAMOm2xRjbR7nDUo3FsNVy61U70.jpg	CA
1248445	Grant George	1971-05-19 00:00:00	https://image.tmdb.org/t/p/w500/julROMpew9wvfV1z6Lzik1qngsn.jpg	US
1048574	David Kaye	1988-08-04 00:00:00	https://image.tmdb.org/t/p/w500/fAK9KpVtPeZ9MTUXamfVqwUGBId.jpg	CA
52699	Danny Mann	1951-07-28 00:00:00	https://image.tmdb.org/t/p/w500/980QYqXIZCMn5Knx0vjROkw9vKo.jpg	US
2135035	Zeno Robinson	1993-10-25 00:00:00	https://image.tmdb.org/t/p/w500/PyoUSDPm4AiGcp6W2WTBD2zSMt.jpg	US
111529	Tara Sands	1975-09-20 00:00:00	https://image.tmdb.org/t/p/w500/skzAKKthsraauiacZtR2sb7HzS4.jpg	US
67830	Veronica Taylor	1978-04-09 00:00:00	https://image.tmdb.org/t/p/w500/mv4WlzAzQ0XFupD0gy9Kqa6jgiP.jpg	US
71536	Matthew Wood	1972-08-15 00:00:00	https://image.tmdb.org/t/p/w500/u1UjHLTeS5Dregg85A3GICf7Nkf.jpg	US
54693	Emma Stone	1988-11-06 00:00:00	https://image.tmdb.org/t/p/w500/cZ8a3QvAnj2cgcgVL6g4XaqPzpL.jpg	US
18997	Bryce Dallas Howard	1981-03-02 00:00:00	https://image.tmdb.org/t/p/w500/qQX1rhQaJ1G8eMG2RknFKiXfNRc.jpg	US
6944	Octavia Spencer	1970-05-25 00:00:00	https://image.tmdb.org/t/p/w500/35SOy4yQZ9xRSJ0q1L5RLhXfhqN.jpg	US
83002	Jessica Chastain	1977-03-24 00:00:00	https://image.tmdb.org/t/p/w500/vOFrDeYXILnj747dOleaNh4jK3l.jpg	US
999605	Ahna O'Reilly	1984-09-21 00:00:00	https://image.tmdb.org/t/p/w500/8hdw009brGZqFnkrJ1Y8DdEaTrg.jpg	US
19	Allison Janney	1959-11-19 00:00:00	https://image.tmdb.org/t/p/w500/hpBKWV1jjoXQbr1s0iUZTSvw582.jpg	US
221098	Anna Camp	1982-09-27 00:00:00	https://image.tmdb.org/t/p/w500/u9Zb9artInNWijWIzwtDjeQEggF.jpg	US
84300	Christopher Lowell	1984-10-17 00:00:00	https://image.tmdb.org/t/p/w500/pUr7P6cwiJ8fe8Wz5tCtYBvtCkG.jpg	US
18249	Cicely Tyson	1924-12-19 00:00:00	https://image.tmdb.org/t/p/w500/y6mcoaGUwsBejVz4MabdeZNsIAY.jpg	US
6858	Mike Vogel	1979-07-17 00:00:00	https://image.tmdb.org/t/p/w500/5pOkcl3D9JnGMR50gSDaAY2TIry.jpg	US
5606	Sissy Spacek	1949-12-25 00:00:00	https://image.tmdb.org/t/p/w500/wY1d3ek9t4G3bAF04ZrDhcYx5OD.jpg	US
50464	Brian Kerwin	1949-10-25 00:00:00	https://image.tmdb.org/t/p/w500/4OSrhPMEkRHcDXEkXba0FxF0WQD.jpg	US
51682	Wes Chatham	1978-10-11 00:00:00	https://image.tmdb.org/t/p/w500/lFoUyX8FZs3XvUWWItCm2ezvAEs.jpg	US
1367901	Ted Welch	1979-08-06 00:00:00	https://image.tmdb.org/t/p/w500/hse128bUrAVE2Uo61uJBKAkP8T0.jpg	US
83222	Shane McRae	1977-07-23 00:00:00	https://image.tmdb.org/t/p/w500/ixNSdZDJ6fZzZc2Pdx4Dwr8wHir.jpg	US
30861	Leslie Jordan	1955-04-29 00:00:00	https://image.tmdb.org/t/p/w500/3wEqWsL5ku3Gsn1kZRbJbxGuu6W.jpg	US
2453	Mary Steenburgen	1953-02-08 00:00:00	https://image.tmdb.org/t/p/w500/yJhfuqS3yXW7kLSyvRU6n3b35mq.jpg	US
1158114	Tiffany Brouwer	1984-04-02 00:00:00	https://image.tmdb.org/t/p/w500/jxWuGAuUe7rsrFT7qQwyneFiwSS.jpg	US
60877	Carol Sutton	1933-06-29 00:00:00	https://image.tmdb.org/t/p/w500/5kQkv64ubSeFbs2i831mvnh3o2Q.jpg	US
34486	Ashley Johnson	1983-08-09 00:00:00	https://image.tmdb.org/t/p/w500/8s36QwB7Zq3PrbY1W6a6ctTFFoe.jpg	US
52885	Ritchie Montgomery	1954-03-23 00:00:00	https://image.tmdb.org/t/p/w500/5uAXhfX10ImQYl47I04yrL3zQAk.jpg	US
81697	Nelsan Ellis	1977-11-30 00:00:00	https://image.tmdb.org/t/p/w500/1oxqYxlZERsLT1rssot3Wfa88FX.jpg	US
35013	David Oyelowo	1976-04-01 00:00:00	https://image.tmdb.org/t/p/w500/7UZHRwOKe2cYxj8SeNUklyPYkns.jpg	GB
56689	LaChanze	1961-12-16 00:00:00	https://image.tmdb.org/t/p/w500/u1JSaJ3joDqiNXXa1Dy73PSwpqv.jpg	US
13314	Dana Ivey	1941-08-12 00:00:00	https://image.tmdb.org/t/p/w500/oQEeRwEb9w4TuSVp334OP9z6Ljm.jpg	US
15111	Jean-Claude Van Damme	1960-10-18 00:00:00	https://image.tmdb.org/t/p/w500/7DP3bm3MS0qa0L8tBLHGebbCu6H.jpg	BE
7218	Kristanna Loken	1979-10-08 00:00:00	https://image.tmdb.org/t/p/w500/3OUqt5ZsdHZZf4RGxT1f7Bm1hba.jpg	US
86462	Sticky Fingaz	1973-11-03 00:00:00	https://image.tmdb.org/t/p/w500/21IRexFdibIGWyKpb4T2nyi8Q78.jpg	US
35654	Spencer Breslin	1992-05-18 00:00:00	https://image.tmdb.org/t/p/w500/jqZRcEjEt3iodgXoGOZUaahozjm.jpg	US
1008235	Andrey Ivchenko	1971-07-01 00:00:00	https://image.tmdb.org/t/p/w500/iwzi9EbTjZfflzXtmnvOpIf7Bn.jpg	UA
12714	Zack Ward	1970-08-31 00:00:00	https://image.tmdb.org/t/p/w500/xMjoFoo3S7XScOuypj8gqeProiY.jpg	CA
19144	Shannen Doherty	1971-04-12 00:00:00	https://image.tmdb.org/t/p/w500/mx56qq8Md5GsC3TgHfPmbTb9mrv.jpg	US
1635984	Chika Kanamoto	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/aqaUA7c6cOJS3ixL0zdXMwEkx2R.jpg	JP
74375	Cynthia Rothrock	1957-03-08 00:00:00	https://image.tmdb.org/t/p/w500/q1o25yMQNrrU2ekNHqRY0y8gmJZ.jpg	US
1315801	Weston Cage	1990-12-26 00:00:00	https://image.tmdb.org/t/p/w500/x6m7cjArcwxUps004Iuk1v6yQXF.jpg	US
1099744	Kristos Andrews	1990-08-25 00:00:00	https://image.tmdb.org/t/p/w500/t2SXjAL1afX5ZMQPNnhLZBTCdQx.jpg	US
1510263	Jackie Dallas	1984-01-01 00:00:00	https://image.tmdb.org/t/p/w500/qgi2NIFFeDyRgSodxn8UZFpzugx.jpg	US
210451	Danielle Vasinova	1982-09-01 00:00:00	https://image.tmdb.org/t/p/w500/yoOYrqno8GKinev4FtSNYnarcec.jpg	US
1044952	Kris Van Damme	1987-05-20 00:00:00	https://image.tmdb.org/t/p/w500/4465DC6Fz3RUtOGwD2E4xidFr8z.jpg	US
21315	Eric Roberts	1956-04-18 00:00:00	https://image.tmdb.org/t/p/w500/NiWg1TaUcal7xn1ZQeyA2dLd5F.jpg	US
134396	Galadriel Stineman	1990-10-20 00:00:00	https://image.tmdb.org/t/p/w500/cW0xP0I2QC0JCD8tItquX73VeiB.jpg	US
1211636	James Cullen Bressack	1992-02-29 00:00:00	https://image.tmdb.org/t/p/w500/1s89cGaLByNuIyEyZG7rmFmSv0J.jpg	US
1450407	Lorenzo Antonucci	1977-08-18 00:00:00	https://image.tmdb.org/t/p/w500/rUPpfC8HwWdwB8NNP1m1zLPIhlH.jpg	US
1419361	Anna Harr	2000-04-05 00:00:00	https://image.tmdb.org/t/p/w500/sEoHVtcXL6RmX1afkxGIy94jxqA.jpg	US
85193	Nick Diaz	1983-08-02 00:00:00	https://image.tmdb.org/t/p/w500/6w4TJsC75oNVttuyARfsL9Uxol3.jpg	US
224413	Satoshi Hino	1978-08-04 00:00:00	https://image.tmdb.org/t/p/w500/8ZJIiwIVF2zDyyFr7oXewj0eEuu.jpg	US
1353244	Yumi Hara	1985-01-21 00:00:00	https://image.tmdb.org/t/p/w500/dbMtB3stkZarEbHSulpzXXp0un0.jpg	JP
1287796	Masayuki Katou	1972-09-23 00:00:00	https://image.tmdb.org/t/p/w500/1BKgxx1FXJ99WanpgWCBRG6YOHT.jpg	JP
1643476	Yoshino Aoyama	1996-05-15 00:00:00	https://image.tmdb.org/t/p/w500/yPOprcT7tPKR3p79RMYtogTEXGr.jpg	JP
1241562	Hitomi Nabatame	1976-08-04 00:00:00	https://image.tmdb.org/t/p/w500/jidfw5qDgZjC4TPY3YunJQxlEmr.jpg	JP
221773	Saori Hayami	1991-05-29 00:00:00	https://image.tmdb.org/t/p/w500/gLv9lO7dlUbIsmyJUvgegqAAXki.jpg	JP
1248340	Haruka Tomatsu	1990-02-04 00:00:00	https://image.tmdb.org/t/p/w500/geVvuA2zMGE5xzfc20aDelJSelu.jpg	JP
95505	Jacqueline Fernandez	1985-08-11 00:00:00	https://image.tmdb.org/t/p/w500/x7RQ5uI2WFaXOPW1kIe0yUQ0jbe.jpg	BH
53	Peter Stormare	1953-08-27 00:00:00	https://image.tmdb.org/t/p/w500/5muzSVt66Qxc8KuVbq0phZIN9tj.jpg	SE
2051	María Conchita Alonso	1957-06-29 00:00:00	https://image.tmdb.org/t/p/w500/zcDN921xNK0AznoA0TEbdbsPSn3.jpg	CU
149954	Antonino Iuorio	1963-03-29 00:00:00	https://image.tmdb.org/t/p/w500/267gN3jvjC7ljaqjgiiw15xoZ9K.jpg	IT
1251847	Ana Golja	1996-01-31 00:00:00	https://image.tmdb.org/t/p/w500/nAbK9EeAXXzlbABwBeVTBzEQPPE.jpg	CA
1213395	Brianne Tju	1998-06-14 00:00:00	https://image.tmdb.org/t/p/w500/3W3RcXI5TB1sdeRHZVYqJecXLeZ.jpg	US
1298360	Laverne Cox	1972-05-29 00:00:00	https://image.tmdb.org/t/p/w500/p2nUwTJRIqVTVASlu0yKwwU4ls8.jpg	US
2077864	Chase Stokes	1992-09-16 00:00:00	https://image.tmdb.org/t/p/w500/okoMZYMICceGRrca6jhCVkDxVxi.jpg	US
1701014	Kelly Gale	1995-05-14 00:00:00	https://image.tmdb.org/t/p/w500/bU9w5FITuN7TUa9VxFH3whhXFkP.jpg	SE
1442955	Keith Powers	1992-08-22 00:00:00	https://image.tmdb.org/t/p/w500/weKSlGfDRU3RR883Tv6L22Gg4SE.jpg	US
1278888	Will Poston	1980-09-13 00:00:00	https://image.tmdb.org/t/p/w500/qkJP2NaZuEMbc2jeipxnvKwFUJ0.jpg	US
118362	Jillian Murray	1984-06-04 00:00:00	https://image.tmdb.org/t/p/w500/zkt2X0vAGX0qqcRlJJnUkprNQ3k.jpg	US
2209233	Jan Luis Castellanos	1995-09-11 00:00:00	https://image.tmdb.org/t/p/w500/wxKthIepYYY3rEPuRVRyHggn3x7.jpg	DO
2515103	Jordan Sherley	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/5oC1KBMPYAQfJ5lTB576d2bbT0q.jpg	US
2406550	Luke Eisner	1999-01-01 00:00:00	https://image.tmdb.org/t/p/w500/AoS3FymjPIunx8yDIQbMj9tEPCg.jpg	US
1748648	Lindsay Rootare	1992-09-01 00:00:00	https://image.tmdb.org/t/p/w500/kZ2BCqv988A5JeEADPUPXWI3zwX.jpg	US
187400	Laura Gordon	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/7Gro37r1iqm4Wiyf2QlvMPgSeza.jpg	AU
62486	Ian Bliss	1966-06-30 00:00:00	https://image.tmdb.org/t/p/w500/26Ms6gQlbfxAzdrSTKfkcMoJrov.jpg	AU
127734	Georgina Haig	1985-08-03 00:00:00	https://image.tmdb.org/t/p/w500/bawxAaueHk2Jm3BaWLBhdq6MkSU.jpg	AU
1228907	Josh Quong Tart	1975-09-18 00:00:00	https://image.tmdb.org/t/p/w500/bf7M31L7sXOuUZukdVGpxJhmPus.jpg	AU
187494	Steve Mouzakis	1973-06-16 00:00:00	https://image.tmdb.org/t/p/w500/z28JqHK4lHKd09teJk5emcNEAe1.jpg	AU
1538823	Tamala Shelton	1997-05-16 00:00:00	https://image.tmdb.org/t/p/w500/fWzxywxPosKWtTbyIGDvqNRZsBq.jpg	AU
75175	Christopher Kirby	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/8EctNOglWXvubkUulK29bCOItxM.jpg	US
11086	Michael Ironside	1950-02-12 00:00:00	https://image.tmdb.org/t/p/w500/mzHmxtKcMJjDqWxKd67mKQJFW1B.jpg	CA
1407495	Miles Brown	2004-12-24 00:00:00	https://image.tmdb.org/t/p/w500/emQj2h72FGwK5nBOao0yXFFZvHt.jpg	US
1762588	Annouck Hautbois	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/5D66aDzc8QrkNtdeFb0nsFku6Zh.jpg	FR
1758915	Antoine Tomé	1951-03-22 00:00:00	https://image.tmdb.org/t/p/w500/rsq0RJEr1KNT659XhMcgTV1eNjn.jpg	FR
1762592	Alexandre N'Guyen	1987-09-07 00:00:00	https://image.tmdb.org/t/p/w500/gro4w2jqNdiDsdfgYomvmxk62ek.jpg	FR
2153049	Daniel Rocha	1990-11-26 00:00:00	https://image.tmdb.org/t/p/w500/r4ikKsywcA6BiysS7sBiEQfVjtr.jpg	BR
1375966	Tony Le Nguyen	1968-10-03 00:00:00	https://image.tmdb.org/t/p/w500/jxACZAk11A6j6rgd5o5z4mHoEUe.jpg	VN
1262690	Ravel Andrade	1991-11-28 00:00:00	https://image.tmdb.org/t/p/w500/3uR6wch2SJGmZwd7kbyJwCUGHcG.jpg	BR
1510868	Natallia Rodrigues	1980-12-09 00:00:00	https://image.tmdb.org/t/p/w500/jGWkk3aTdwC6p7GU4HrHMWiUCj6.jpg	BR
1137425	Ângela Dip	1961-12-10 00:00:00	https://image.tmdb.org/t/p/w500/rNTVHHu5oQCtM87GPjdSTM0yNeR.jpg	BR
2460383	Tamirys O'Hanna	1993-11-26 00:00:00	https://image.tmdb.org/t/p/w500/gjpvwDennzV59PmUDG551alynBp.jpg	US
1873825	Michelle Rodrigues	1984-05-21 00:00:00	https://image.tmdb.org/t/p/w500/4CSW5dehlpiuUOaipTg0ztUQNdK.jpg	BR
2524	Tom Hardy	1977-09-15 00:00:00	https://image.tmdb.org/t/p/w500/d81K0RH8UX7tZj49tZaQhZ9ewH.jpg	GB
5294	Chiwetel Ejiofor	1977-07-10 00:00:00	https://image.tmdb.org/t/p/w500/kq5DDnqqofoRI0t6ddtRlsJnNPT.jpg	GB
36594	Juno Temple	1989-07-21 00:00:00	https://image.tmdb.org/t/p/w500/wMpZcKp7zaHnmNQooqbve33577Q.jpg	GB
1115	Stephen Graham	1973-08-03 00:00:00	https://image.tmdb.org/t/p/w500/AvBy4b55TtV9KQc4C35mZQZiuLk.jpg	GB
2141479	Peggy Lu	1963-02-22 00:00:00	https://image.tmdb.org/t/p/w500/ng5eaDcOf9kSwIYGNmwF9wEfIHp.jpg	US
10402	Alanna Ubach	1975-10-03 00:00:00	https://image.tmdb.org/t/p/w500/p2sIpgftEIkhPrrpgu8wW8XEpDg.jpg	US
7026	Rhys Ifans	1967-07-22 00:00:00	https://image.tmdb.org/t/p/w500/1D670EEsbky3EtO7XLG32A09p92.jpg	GB
1861573	Clark Backo	1993-09-05 00:00:00	https://image.tmdb.org/t/p/w500/d24KKFxfoql6PBsBPsejFgzhSlH.jpg	CA
4886	Norman Reedus	1969-01-06 00:00:00	https://image.tmdb.org/t/p/w500/ozHPdO5jAt7ozzdZUgyRAMNPSDW.jpg	US
1428023	Femi Adebayo	1978-12-31 00:00:00	https://image.tmdb.org/t/p/w500/3cjueTuQfn6zWv8butBHj34bKHJ.jpg	NG
3329176	Lateef Adedimeji	1986-01-02 00:00:00	https://image.tmdb.org/t/p/w500/cZceb1kk1vWwZX8HkCeVmCgB6nN.jpg	NG
21125	Richard Kind	1956-11-22 00:00:00	https://image.tmdb.org/t/p/w500/yWmuVQeQUzb5OSMVDoWkR0IylCK.jpg	US
19278	Bill Hader	1978-06-07 00:00:00	https://image.tmdb.org/t/p/w500/50FpKsWiyqbZxu0oLBAGbWn7wag.jpg	US
125167	Mindy Kaling	1979-06-24 00:00:00	https://image.tmdb.org/t/p/w500/zd3sxyCKUTIWgvf8tcGo1Gur2By.jpg	US
1371894	Kaitlyn Dias	1999-05-11 00:00:00	https://image.tmdb.org/t/p/w500/oO1srX4pLR87A7YRHayjwKKKqjp.jpg	US
80591	Rashida Jones	1976-02-25 00:00:00	https://image.tmdb.org/t/p/w500/jjp33eRM6oavyesW0UM6XBCxQSa.jpg	US
24358	Lori Alan	1966-07-18 00:00:00	https://image.tmdb.org/t/p/w500/pdqefVlTbIpNObYdIlyWQGYLEBd.jpg	US
1565451	Veronika Bonell	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/q5EtaZrvDrEEvAuLajsXDwTXspL.jpg	US
167295	John Cygan	1954-04-27 00:00:00	https://image.tmdb.org/t/p/w500/sIcRLzUyeOL9ayYOUye3LFWkfuA.jpg	US
1260745	Tony Fucile	1964-01-01 00:00:00	https://image.tmdb.org/t/p/w500/vKxLwEaL6qz7cwrT8m02Lye7wZO.jpg	US
969332	Jacob Hopkins	2002-03-04 00:00:00	https://image.tmdb.org/t/p/w500/5oafwxyGuyn16KusxNxdNf6ackQ.jpg	US
1504904	Molly Jackson	2001-11-22 00:00:00	https://image.tmdb.org/t/p/w500/4oN0KpCg8tAVgotqpXM7NHgYcNO.jpg	DE
214701	Sherry Lynn	1952-05-20 00:00:00	https://image.tmdb.org/t/p/w500/cp7SYig9JVbBWgc2YD4wEUNQGzh.jpg	US
111466	Mona Marshall	1947-08-31 00:00:00	https://image.tmdb.org/t/p/w500/A2RCAt0Xmm3jLBKZogQAJX6eD9n.jpg	US
1236458	Ronnie del Carmen	1959-12-31 00:00:00	https://image.tmdb.org/t/p/w500/lPCmkQK76DOgkmcRjg9394QPyAu.jpg	PH
7905	Mary Gibbs	1996-10-05 00:00:00	https://image.tmdb.org/t/p/w500/nqYOXIaf8ztfacrludRtS1Bytzz.jpg	US
1141501	Carter Hastings	2004-12-17 00:00:00	https://image.tmdb.org/t/p/w500/h8DNoo1bIUtR3TLkvGHyw8BozrZ.jpg	US
72754	Elissa Knight	1975-04-15 00:00:00	https://image.tmdb.org/t/p/w500/exRLyaNaHcgawQA0DoBxo5IvdoI.jpg	US
87819	Dawnn Lewis	1961-08-13 00:00:00	https://image.tmdb.org/t/p/w500/ppxGgmkTczev2VsiOSMfaGUy580.jpg	US
61969	Phil Proctor	1940-07-28 00:00:00	https://image.tmdb.org/t/p/w500/iLTvGROn3XvT0MPPspF2e3OsFCs.jpg	US
86007	Jim Ward	1959-05-19 00:00:00	https://image.tmdb.org/t/p/w500/7Um56ftGoxN6c5GxJSNckeARCDy.jpg	US
2673762	Marisa Abela	1996-12-07 00:00:00	https://image.tmdb.org/t/p/w500/jmrlbz43kUk4H0bcRGVLdJ4RsDl.jpg	GB
85065	Jack O'Connell	1990-08-01 00:00:00	https://image.tmdb.org/t/p/w500/tCzR4clrIkbkijuJBYsNoEuwRDa.jpg	GB
1665	Eddie Marsan	1968-06-09 00:00:00	https://image.tmdb.org/t/p/w500/9atfOgIxhfOKvv2be8HEp6SzOct.jpg	GB
72305	Lesley Manville	1956-03-12 00:00:00	https://image.tmdb.org/t/p/w500/tioPlSoypjdME3oMu3g7XmgIIKS.jpg	GB
1213838	Juliet Cowan	1974-05-21 00:00:00	https://image.tmdb.org/t/p/w500/8zBYU2fqciM8kV6NAg1R6y6JHoh.jpg	GB
24605	Pete Lee-Wilson	1956-03-28 00:00:00	https://image.tmdb.org/t/p/w500/6BIw7dhANZwzX2pSKMycC2X8n2h.jpg	GB
1198488	Harley Bird	2001-12-13 00:00:00	https://image.tmdb.org/t/p/w500/43e76YsHcHGZA7Gj4SoSFSWOGf5.jpg	GB
2355285	Tuwaine Barrett	1995-09-15 00:00:00	https://image.tmdb.org/t/p/w500/qYv12xPApje8Lx7G2EbSrLRBxn2.jpg	GB
55465	Samuel Anderson	1982-04-27 00:00:00	https://image.tmdb.org/t/p/w500/155QL3ZdGm6NseuA2bMnAXyB6hZ.jpg	GB
1683344	Amrou Al-Kadhi	1990-06-23 00:00:00	https://image.tmdb.org/t/p/w500/wGr7Emb8ppfUThAc7rywI6wgfBJ.jpg	GB
75076	Bronson Webb	1983-02-20 00:00:00	https://image.tmdb.org/t/p/w500/foMvmr6ch16GGM1L413KA9UQKIO.jpg	GB
1525322	Daniel Fearn	1977-05-09 00:00:00	https://image.tmdb.org/t/p/w500/u7qWojSsrVrVEDNEJziRj1FiFOu.jpg	GB
1233056	Jack Jones	1938-01-14 00:00:00	https://image.tmdb.org/t/p/w500/fl2OSRND6M7pPbJrFhlMPp6GOq3.jpg	US
76594	Miley Cyrus	1992-11-23 00:00:00	https://image.tmdb.org/t/p/w500/7slnMlDLR1O65U3Hr8gcOmxDlZz.jpg	US
49624	Jensen Ackles	1978-03-01 00:00:00	https://image.tmdb.org/t/p/w500/3DwbC5V1nLK36bpcUZUrYuNrPG1.jpg	US
228721	Darren Criss	1987-02-05 00:00:00	https://image.tmdb.org/t/p/w500/kqdhJuaHjgeVcnmA9DwWEIMdtBb.jpg	US
74541	Corey Stoll	1976-03-14 00:00:00	https://image.tmdb.org/t/p/w500/etqmosIyf1xePKpi3i6rHJCm9GE.jpg	US
1803286	Gideon Adlon	1997-03-30 00:00:00	https://image.tmdb.org/t/p/w500/l8BSlg87Mn75n28P2aXzot6G0pi.jpg	US
1620226	Ike Amadi	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/xsv09XrYPk5bdY3cAUwKqJnraxC.jpg	NG
5375	Geoffrey Arend	1978-02-28 00:00:00	https://image.tmdb.org/t/p/w500/bpqF3V5lK5GxuIU4VuTaVaztIvw.jpg	US
4753	Brian Bloom	1970-06-30 00:00:00	https://image.tmdb.org/t/p/w500/9mZKhI3aVbzZ5Xq43n7fGzWAqi0.jpg	US
66743	Matt Bomer	1977-10-11 00:00:00	https://image.tmdb.org/t/p/w500/dLhMM4xxHXEPydT9Gc5uyVd2Jja.jpg	US
225863	Zach Callison	1997-10-23 00:00:00	https://image.tmdb.org/t/p/w500/gGvcqBYFa0WNyx72FOEMfpSFpKS.jpg	US
34947	Kevin Conroy	1955-11-30 00:00:00	https://image.tmdb.org/t/p/w500/zvWhAwO2l8Kb5IJTwTbKzURypg7.jpg	US
109513	Alexandra Daddario	1986-03-16 00:00:00	https://image.tmdb.org/t/p/w500/nVznarxjPgR2JtMUBNl7TRxqTqH.jpg	US
1181302	Brett Dalton	1983-01-07 00:00:00	https://image.tmdb.org/t/p/w500/tetrTHW9QZoQRiuzPQa5JETQCJv.jpg	US
1692795	Meg Donnelly	2000-07-25 00:00:00	https://image.tmdb.org/t/p/w500/m3CTKUvLB6bw8tkIqBbZiMNgSFo.jpg	US
5377	Ato Essandoh	1972-07-29 00:00:00	https://image.tmdb.org/t/p/w500/kkQFtsIxVUMuYDrVGeRfX2IG2F8.jpg	US
76621	Will Friedle	1976-08-11 00:00:00	https://image.tmdb.org/t/p/w500/Ao3fp9f4loVQ1Vvk6ph8HU5p0Lu.jpg	US
81667	Jennifer Hale	1972-01-30 00:00:00	https://image.tmdb.org/t/p/w500/oNQCrdiSm0mABCcE5YaHwuZQK8X.jpg	CA
83860	Aldis Hodge	1986-09-20 00:00:00	https://image.tmdb.org/t/p/w500/jPpnaAGFXaIeOrRNUHIHxk3fIJL.jpg	US
1367620	Jamie Gray Hyder	1985-04-27 00:00:00	https://image.tmdb.org/t/p/w500/xVg5JQTEsdTw9IVen33g3GkisLg.jpg	US
2128085	Erika Ishii	1987-03-07 00:00:00	https://image.tmdb.org/t/p/w500/bXb3vD7swgJtrTI1OrkWqOoKzcr.jpg	US
34408	Stana Katic	1978-04-26 00:00:00	https://image.tmdb.org/t/p/w500/tqyqLe8EC3ieGPZhYrJqPXOfDMg.jpg	CA
84490	David Kaye	1964-10-14 00:00:00	https://image.tmdb.org/t/p/w500/izxtFSio5twcVA1oJWPvobxpcZj.jpg	CA
34202	Matt Lanter	1983-04-01 00:00:00	https://image.tmdb.org/t/p/w500/2ms8DR9n4wh9ZU6lIuqsE58LPT9.jpg	US
934219	Liam McIntyre	1982-02-08 00:00:00	https://image.tmdb.org/t/p/w500/vTw11F1awNW8AlxInljEsK96cNB.jpg	AU
1230664	Cynthia Kaye McWilliams	1982-01-15 00:00:00	https://image.tmdb.org/t/p/w500/cHc9xD68PKvE20dJERcuK2Et2z3.jpg	DE
38560	Lou Diamond Phillips	1962-02-17 00:00:00	https://image.tmdb.org/t/p/w500/yqGZwaGe8XgoxfO7zmx7weGBaXZ.jpg	PH
90720	Elysia Rotaru	1984-11-09 00:00:00	https://image.tmdb.org/t/p/w500/fqrrrmc91VmLKQu7y4cW26YQKzh.jpg	CA
127712	Matt Ryan	1981-04-11 00:00:00	https://image.tmdb.org/t/p/w500/qLx6rzn6MMcJtTals5Z7Mb6z4Y9.jpg	GB
155669	Keesha Sharp	1973-06-09 00:00:00	https://image.tmdb.org/t/p/w500/wpfOp6Z3kRuQZqVGYzPTohhqoMP.jpg	US
22125	Jimmi Simpson	1975-11-21 00:00:00	https://image.tmdb.org/t/p/w500/gerE8VqXfFyAs3QhbUlwEuZllKq.jpg	US
68763	Dean Winters	1964-07-20 00:00:00	https://image.tmdb.org/t/p/w500/zxgOZAYGxa2qmiZkJKGRIhwbGhG.jpg	US
95101	Charlie Day	1976-02-09 00:00:00	https://image.tmdb.org/t/p/w500/c0HNhjChGybnHa4eoLyqO4dDu1j.jpg	US
61110	Fred Armisen	1966-12-04 00:00:00	https://image.tmdb.org/t/p/w500/nLMCRlt0MV2uu4KPbDPDNsPWfBG.jpg	US
299743	Sebastian Maniscalco	1973-07-08 00:00:00	https://image.tmdb.org/t/p/w500/8TvA9HEwURJmY9MkkUruB4Sl0lR.jpg	US
176340	Charles Martinet	1955-09-17 00:00:00	https://image.tmdb.org/t/p/w500/3IP5hH7697STIaU006WzQaI2phR.jpg	US
24362	Kevin Michael Richardson	1964-10-25 00:00:00	https://image.tmdb.org/t/p/w500/xXt9Nh7RAT5bOen66TaXreNYmCl.jpg	US
110799	Rino Romano	1969-07-01 00:00:00	https://image.tmdb.org/t/p/w500/rpyq7xdQ5zSCHYiwnlPvkx7gLrl.jpg	CA
94820	Jessica DiCicco	1980-06-10 00:00:00	https://image.tmdb.org/t/p/w500/7I9Ma8iV7KyiH7enKWquu7tGgah.jpg	US
89599	Eric Bauza	1979-12-07 00:00:00	https://image.tmdb.org/t/p/w500/afOlsVPQxbtkom604MeCemjlwEV.jpg	CA
113916	Scott Menville	1971-02-12 00:00:00	https://image.tmdb.org/t/p/w500/eI5OhQUfeTgcrikz1cfFhVNhs5u.jpg	US
1573215	Rachel Butera	1972-01-28 00:00:00	https://image.tmdb.org/t/p/w500/j9PbEcUdFkInCdFjQAMNvctfF7j.jpg	US
1327400	Andy Hirsch	1966-03-02 00:00:00	https://image.tmdb.org/t/p/w500/nbUpeq2au83wcu7SLwwHrAwWhjX.jpg	US
1536923	Eric E. Osmond	1971-10-08 00:00:00	https://image.tmdb.org/t/p/w500/pAcUxZUiY9McxtPvFvZtkXYaUyv.jpg	US
34985	Cree Summer	1969-07-07 00:00:00	https://image.tmdb.org/t/p/w500/7DRq0zPUUWu55pUbnc2roVnzOJ9.jpg	US
501	Dakota Fanning	1994-02-23 00:00:00	https://image.tmdb.org/t/p/w500/fXxfYh0NoTiyedRwZPNqBMdz3Eh.jpg	US
10742	Teri Hatcher	1964-12-08 00:00:00	https://image.tmdb.org/t/p/w500/ySmnfZm8ZGabcwp4UwaMDeSzXqx.jpg	US
12094	Jennifer Saunders	1958-07-06 00:00:00	https://image.tmdb.org/t/p/w500/pTgxwHcz9L8SNVYvPJS0o0lgHya.jpg	GB
5539	Dawn French	1957-10-11 00:00:00	https://image.tmdb.org/t/p/w500/eLFCJSTEeh7CDRw50RzowKz4h7V.jpg	GB
65827	Keith David	1956-06-04 00:00:00	https://image.tmdb.org/t/p/w500/dVOK7HNrHpvuFpbzN6pFi4ogBjp.jpg	US
77344	John Hodgman	1971-06-03 00:00:00	https://image.tmdb.org/t/p/w500/xlgpI6x1OECW6V7uB70DG7BirUa.jpg	US
55426	Robert Bailey Jr.	1990-10-20 00:00:00	https://image.tmdb.org/t/p/w500/2CVKz4PSWBXv2IIIX54DW8MVza2.jpg	US
2011359	Emerson Tenney	1997-11-10 00:00:00	https://image.tmdb.org/t/p/w500/oJKpH5903ntxYwiwtWbs0O1toY1.jpg	US
7960	Jerome Ranft	1966-11-23 00:00:00	https://image.tmdb.org/t/p/w500/76XFeM9FdbGkd0mxkEMstQu6na2.jpg	US
17647	Michelle Rodriguez	1978-07-12 00:00:00	https://image.tmdb.org/t/p/w500/wVcbrae4eRqGMFZz8Eh52Dl1biP.jpg	US
8169	Tyrese Gibson	1978-12-30 00:00:00	https://image.tmdb.org/t/p/w500/1K315wBQBvDBuZMlzoozuGsqFXZ.jpg	US
8171	Ludacris	1977-09-11 00:00:00	https://image.tmdb.org/t/p/w500/erkJijujhe48vhJ8iCEtVpNEeVn.jpg	US
22123	Jordana Brewster	1980-04-26 00:00:00	https://image.tmdb.org/t/p/w500/8VzFsSfT7NnMGyH5JQBQdTxDHcO.jpg	PA
61697	Sung Kang	1972-04-08 00:00:00	https://image.tmdb.org/t/p/w500/ox4ti0WmpJoN19n3iYJ2T2vHP5f.jpg	US
117642	Jason Momoa	1979-08-01 00:00:00	https://image.tmdb.org/t/p/w500/3troAR6QbSb6nUFMDu61YCCWLKa.jpg	US
928572	Scott Eastwood	1986-03-21 00:00:00	https://image.tmdb.org/t/p/w500/hBqXeKe2Z7VnAYe7tLTzIvr8po4.jpg	US
1784612	Daniela Melchior	1996-11-01 00:00:00	https://image.tmdb.org/t/p/w500/oyULuaCY8FFNEumFNZwjUoUytcR.jpg	PT
64295	Alan Ritchson	1982-11-28 00:00:00	https://image.tmdb.org/t/p/w500/wdmLUSPEC7dXuqnjTM4NgbjvTKk.jpg	US
15735	Helen Mirren	1945-07-26 00:00:00	https://image.tmdb.org/t/p/w500/vkNbLzKmTbojFN8FvPfjM4CCJ0R.jpg	GB
60073	Brie Larson	1989-10-01 00:00:00	https://image.tmdb.org/t/p/w500/xSGvMwNNJcEQvVcjiIUTyxyMfkZ.jpg	US
976	Jason Statham	1967-07-26 00:00:00	https://image.tmdb.org/t/p/w500/whNwkEQYWLFJA8ij0WyOOAD5xhQ.jpg	GB
6885	Charlize Theron	1975-08-07 00:00:00	https://image.tmdb.org/t/p/w500/ie1KbeYFG5E0GVr1QP7tDNuXvga.jpg	ZA
13299	Rita Moreno	1931-12-11 00:00:00	https://image.tmdb.org/t/p/w500/ekEZJuZc8lujVbhqlTP7NXLze9b.jpg	PR
22462	Joaquim de Almeida	1957-03-15 00:00:00	https://image.tmdb.org/t/p/w500/muXJn8kTEPxJaetkgCyS8RPEzTC.jpg	PT
37149	Luis Da Silva Jr.	1982-08-03 00:00:00	https://image.tmdb.org/t/p/w500/ajavEvDuNcinuw3BJ80OE0sEU5Q.jpg	US
2282001	Ludmilla	1995-04-24 00:00:00	https://image.tmdb.org/t/p/w500/hbEkg827B38ieLV8ZQZf0f65KET.jpg	BR
508582	Miraj Grbić	1976-07-17 00:00:00	https://image.tmdb.org/t/p/w500/ptCynXMskQ8CETCvg6ZjSwcMyVI.jpg	US
124304	Michael Irby	1972-11-16 00:00:00	https://image.tmdb.org/t/p/w500/9cX8pKujyAlOyqGSAgvKNdA3qRj.jpg	US
2545367	Ben-Hur Santos	1985-01-08 00:00:00	https://image.tmdb.org/t/p/w500/jjVqqt2e2b4TgBnrjHwYkKpvSBN.jpg	BR
123846	Debby Ryan	1993-05-13 00:00:00	https://image.tmdb.org/t/p/w500/yqpxtPknFel9TQdb0RUGgptjj9O.jpg	US
2138286	Josh Dun	1988-06-18 00:00:00	https://image.tmdb.org/t/p/w500/xtRSp69dowEWnrEzeGPRWXXZCqs.jpg	US
18918	Dwayne Johnson	1972-05-02 00:00:00	https://image.tmdb.org/t/p/w500/5QApZVV8FUFlVxQpIK3Ew6cqotq.jpg	US
90633	Gal Gadot	1985-04-30 00:00:00	https://image.tmdb.org/t/p/w500/AbXKtWQwuDiwhoQLh34VRglwuBE.jpg	IL
4211960	Ali Baddou	1974-02-28 00:00:00	https://image.tmdb.org/t/p/w500/qfBGks8ynZ1lqTcAEDMNhkFU2IS.jpg	FR
1190668	Timothée Chalamet	1995-12-27 00:00:00	https://image.tmdb.org/t/p/w500/BE2sdjpgsa2rNTFa66f7upkaOP.jpg	US
505710	Zendaya	1996-09-01 00:00:00	https://image.tmdb.org/t/p/w500/3WdOloHpjtjL96uVOhFRRCcYSwq.jpg	US
933238	Rebecca Ferguson	1983-10-19 00:00:00	https://image.tmdb.org/t/p/w500/lJloTOheuQSirSLXNA3JHsrMNfH.jpg	SE
3810	Javier Bardem	1969-03-01 00:00:00	https://image.tmdb.org/t/p/w500/IShnFg6ijWhpbu29dFBd9PtqQg.jpg	ES
16851	Josh Brolin	1968-02-12 00:00:00	https://image.tmdb.org/t/p/w500/sX2etBbIkxRaCsATyw5ZpOVMPTD.jpg	US
86654	Austin Butler	1991-08-17 00:00:00	https://image.tmdb.org/t/p/w500/atdAs4pFGjUQ4m2W8kJYly7N6cC.jpg	US
1373737	Florence Pugh	1996-01-03 00:00:00	https://image.tmdb.org/t/p/w500/6Sjz9teWjrMY9lF2o9FCo4XmoRh.jpg	GB
543530	Dave Bautista	1969-01-18 00:00:00	https://image.tmdb.org/t/p/w500/ymn6iQBJbQZN6BYI60YJDXVP4gF.jpg	US
4690	Christopher Walken	1943-03-31 00:00:00	https://image.tmdb.org/t/p/w500/ApgDL7nudR9T2GpjCG4vESgymO2.jpg	US
121529	Léa Seydoux	1985-07-01 00:00:00	https://image.tmdb.org/t/p/w500/tUfoM95x70Qsb1ElClPSpSrZQ2v.jpg	FR
1640	Stellan Skarsgård	1951-06-13 00:00:00	https://image.tmdb.org/t/p/w500/x78BtYHElirO7Iw8bL4m8CnzRDc.jpg	SE
44079	Charlotte Rampling	1946-02-05 00:00:00	https://image.tmdb.org/t/p/w500/7fhg5FCcl0VfYERP5D0unpybqgx.jpg	GB
2037046	Souheila Yacoub	1992-06-29 00:00:00	https://image.tmdb.org/t/p/w500/8GXQwfBQybNDwinJOQF0dGtlITj.jpg	CH
2974	Roger Yuan	1961-01-25 00:00:00	https://image.tmdb.org/t/p/w500/jHdxbT6n3ToYKw0DVFIUkva86SO.jpg	US
205923	Babs Olusanmokun	1984-09-18 00:00:00	https://image.tmdb.org/t/p/w500/bqycmpUrpISeLzQniiYwAZ5X1RN.jpg	NG
1934576	Giusi Merli	1943-03-26 00:00:00	https://image.tmdb.org/t/p/w500/90lHFn3PUJdoHHzcYRS2Ky1gbyi.jpg	IT
2855994	Akiko Hitomi	1955-10-13 00:00:00	https://image.tmdb.org/t/p/w500/3TMlP0tBoTjfls2UIPfj22zFtLI.jpg	JP
54807	Affif Ben Badra	1960-01-01 00:00:00	https://image.tmdb.org/t/p/w500/6NSxwKLkBk6Hf0MU6NAUgc60qS9.jpg	FR
63007	Kincsö Pethö	1974-12-31 00:00:00	https://image.tmdb.org/t/p/w500/caikYs5IgdiKyxgT8XJbOeGlCWp.jpg	HU
1767276	Cat Simmons	1981-05-04 00:00:00	https://image.tmdb.org/t/p/w500/88D0aX9TkQDW3uy6f2lTdJZ7nKr.jpg	GB
1373526	Burt Caesar	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/kPlOgIX09HO4JximMMxxoJSjbfw.jpg	US
3012028	Amer El-Erwadi	1991-01-01 00:00:00	https://image.tmdb.org/t/p/w500/h7ph8lhpL9TqJUHjDlpvXJtPdhZ.jpg	DE
145536	Leon Herbert	1955-06-18 00:00:00	https://image.tmdb.org/t/p/w500/z1Ap0OjXrO8mwcTqCZt3ycZcfTm.jpg	GY
1935849	Moe Bar-El	1992-05-18 00:00:00	https://image.tmdb.org/t/p/w500/3P24nebiTXbfy9WCfc4p4VRtpu0.jpg	IR
199529	Jordan Long	1973-11-30 00:00:00	https://image.tmdb.org/t/p/w500/ew39mDa4vhhylYnRg5nC8USOwTf.jpg	GB
109167	Tony Cook	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/7F6BWp311YTed9xJ42GpgAckHEE.jpg	GB
3313934	Alan Mehdizadeh	1982-09-04 00:00:00	https://image.tmdb.org/t/p/w500/cIlAUPyKLHANtdUCs1t79KKe1Ik.jpg	GB
2212128	Kajsa Mohammar	1990-01-01 00:00:00	https://image.tmdb.org/t/p/w500/2wtbhHbCF6UdrMLyRfbepS8aViQ.jpg	SE
1398632	Steve Wall	1968-08-26 00:00:00	https://image.tmdb.org/t/p/w500/tEXsLuN0w1aaosb4kzf5DwT7rok.jpg	GB
3314411	Joelle	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/rqmxqILAmCqIXCedRBtgh6NLaw2.jpg	GB
222121	Ben Schwartz	1981-09-15 00:00:00	https://image.tmdb.org/t/p/w500/5vV52TSEIhe4ZZLWwv3i7nfv8we.jpg	US
206	Jim Carrey	1962-01-17 00:00:00	https://image.tmdb.org/t/p/w500/eYE1DDHNJxdgnH31I6v35zL2Ru7.jpg	CA
17605	Idris Elba	1972-09-06 00:00:00	https://image.tmdb.org/t/p/w500/be1bVF7qGX91a6c5WeRPs5pKXln.jpg	GB
1212864	Colleen O'Shaughnessey	1971-09-15 00:00:00	https://image.tmdb.org/t/p/w500/y3Kl5tCX1XD6uyL9wefTRbEXTwj.jpg	US
6384	Keanu Reeves	1964-09-02 00:00:00	https://image.tmdb.org/t/p/w500/4D0PpNI0kmP58hgrwGC3wCjxhnm.jpg	LB
11006	James Marsden	1973-09-18 00:00:00	https://image.tmdb.org/t/p/w500/rKC9jFV501EHwVPeyEXICMNnLBg.jpg	US
208677	Lee Majdoub	1982-05-31 00:00:00	https://image.tmdb.org/t/p/w500/vpF3R2YRCGHseGevmDAhftmOPkO.jpg	LB
110742	Tika Sumpter	1980-06-20 00:00:00	https://image.tmdb.org/t/p/w500/1zTXufyuQFPXVthryH7KVoZAfb7.jpg	US
115974	Adam Pally	1982-03-18 00:00:00	https://image.tmdb.org/t/p/w500/yY13PEaVbPoXT5MkitVxTfdAZnU.jpg	US
85922	Tom Butler	1951-02-01 00:00:00	https://image.tmdb.org/t/p/w500/sMDuFSvna90gGV0jkOK7PDzQC8g.jpg	CA
78080	Krysten Ritter	1981-12-16 00:00:00	https://image.tmdb.org/t/p/w500/vDr20j128E6Uo1XZLChPoW7FbMG.jpg	US
1546282	Natasha Rothwell	1980-10-18 00:00:00	https://image.tmdb.org/t/p/w500/x5KdL3QoS4YuozVpfuPsu3MLwwf.jpg	US
50266	Shemar Moore	1970-04-20 00:00:00	https://image.tmdb.org/t/p/w500/a4Gwr9RUnV2ChKmeDPYPBZouSms.jpg	US
222129	James Wolk	1985-03-22 00:00:00	https://image.tmdb.org/t/p/w500/kINM0yfNAznf777qc9srnbjovcZ.jpg	US
62863	Jorma Taccone	1977-03-19 00:00:00	https://image.tmdb.org/t/p/w500/x7x4NvDauuQ7HA6psLZYZ6m3zTd.jpg	US
115625	Sofia Pernas	1989-07-31 00:00:00	https://image.tmdb.org/t/p/w500/8ewDswRAN8ovgCClAZp4rZkiw7.jpg	MA
1341	Donnie Yen	1963-07-27 00:00:00	https://image.tmdb.org/t/p/w500/hTlhrrZMj8hZVvD17j4KyAFWBHc.jpg	CN
129101	Lance Reddick	1962-06-07 00:00:00	https://image.tmdb.org/t/p/w500/22mVtEXZbpt0J7S0LhIhdkfRrZV.jpg	US
9195	Hiroyuki Sanada	1960-10-12 00:00:00	https://image.tmdb.org/t/p/w500/SOwDxhGnRccP2lAtssQ7TxCzOe.jpg	JP
2337629	Rina Sawayama	1990-08-16 00:00:00	https://image.tmdb.org/t/p/w500/yoo4ZcHjF4G51UDBj7omUQrClYI.jpg	JP
78110	Scott Adkins	1976-06-17 00:00:00	https://image.tmdb.org/t/p/w500/9NRr2a1riIn5CWn5McZLJlk4vxR.jpg	GB
118370	Marko Zaror	1978-06-10 00:00:00	https://image.tmdb.org/t/p/w500/rQ8XFdLmnfXs5x8FsttdOUrFLWa.jpg	CL
3300	Natalia Tena	1984-11-01 00:00:00	https://image.tmdb.org/t/p/w500/7kN9NpECZoR4NLXb4SlpHOaJx7T.jpg	GB
1080969	Shamier Anderson	1991-05-06 00:00:00	https://image.tmdb.org/t/p/w500/vUlPZ1owT67BOQwpIn96ZFjBxg2.jpg	CA
570010	George Georgiou	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/9NoRfi7L87xsmveXpE7ryycsFQy.jpg	GB
2331772	Ivy Quainoo	1992-08-25 00:00:00	https://image.tmdb.org/t/p/w500/q1sFU2MZV7Z3Ni5wlJku8HPS82H.jpg	DE
1327564	Andrej Kaminsky	1964-01-01 00:00:00	https://image.tmdb.org/t/p/w500/xxMY0ZBXqQWe5BbwucYyVCS9P7Y.jpg	FI
2219646	Sven Marquardt	1962-02-03 00:00:00	https://image.tmdb.org/t/p/w500/eDQDiW4xIgcJzxiVo0DU3fLBCbo.jpg	XG
22019	Raicho Vasilev	1975-09-17 00:00:00	https://image.tmdb.org/t/p/w500/fj5lqV9ayJeQg8z7KJmwW4PbHrl.jpg	BG
3978256	Marie Pierra Kakoma	1996-05-27 00:00:00	https://image.tmdb.org/t/p/w500/dTf6dsmpPo6oaqOKKSdWVZufgjM.jpg	US
3248711	Christoph Hofmann	1996-03-05 00:00:00	https://image.tmdb.org/t/p/w500/vnQ6eHhD3CRzpYglFZfUnlfWsAd.jpg	DE
380	Robert De Niro	1943-08-17 00:00:00	https://image.tmdb.org/t/p/w500/cT8htcckIuyI1Lqwt1CvD02ynTh.jpg	US
4432	Frances Conroy	1953-03-15 00:00:00	https://image.tmdb.org/t/p/w500/aJRQAkO24L6bH8qkkE5Iv1nA3gf.jpg	US
16841	Brett Cullen	1956-08-26 00:00:00	https://image.tmdb.org/t/p/w500/4P6TsRcnr9MRbXlCdHitulGM5LT.jpg	US
74242	Shea Whigham	1969-01-05 00:00:00	https://image.tmdb.org/t/p/w500/d3caK3l4UfbnzOxv95wLoFLZzMO.jpg	US
121718	Bill Camp	1964-10-13 00:00:00	https://image.tmdb.org/t/p/w500/yNUJsgkJcJXi5CK3Pk77DmUU8G8.jpg	US
1377670	Glenn Fleshler	1968-09-05 00:00:00	https://image.tmdb.org/t/p/w500/x1Cef2yPZS7bJTwxI7DX3q0HNcv.jpg	US
6181	Josh Pais	1964-06-21 00:00:00	https://image.tmdb.org/t/p/w500/uH90fGfLLzYCX02yOW3kH4LMO7n.jpg	US
1231717	Marc Maron	1963-09-27 00:00:00	https://image.tmdb.org/t/p/w500/2ENNRs7lgbyLfrUN622zRqkYJWL.jpg	US
171297	Sondra James	1939-07-21 00:00:00	https://image.tmdb.org/t/p/w500/eA2gD2JUtXoaGUSYdwenAzeYvwG.jpg	US
155547	Murphy Guyer	1952-12-25 00:00:00	https://image.tmdb.org/t/p/w500/6axiNcYIZmaeRKyfCm3xBHC7KQL.jpg	US
80149	Douglas Hodge	1960-02-25 00:00:00	https://image.tmdb.org/t/p/w500/imdVXxy5QxegiXA0HncT7rRmNk5.jpg	GB
1765331	Dante Pereira-Olson	2008-08-13 00:00:00	https://image.tmdb.org/t/p/w500/zqo2pLRyjm1vIU1AVu2IWMDT8zN.jpg	US
1049916	Hannah Gross	1992-09-25 00:00:00	https://image.tmdb.org/t/p/w500/p94oyYrrywfSH3vkimTL1cbaWQt.jpg	US
52021	Frank Wood	1960-05-06 00:00:00	https://image.tmdb.org/t/p/w500/er5hLYMwjAYb3saRQcNZED4rtgx.jpg	US
10691	April Grace	1962-05-12 00:00:00	https://image.tmdb.org/t/p/w500/nV8nnymN0ClT3xppwhlAtUnjSxa.jpg	US
1123616	Gary Gulman	1970-07-17 00:00:00	https://image.tmdb.org/t/p/w500/luX8IjBnUrfMAvpkkaGibX7feqG.jpg	US
2128773	Sam Morril	1986-08-29 00:00:00	https://image.tmdb.org/t/p/w500/cM9bWItwSDnR1rPa6Wx3ro6bTKG.jpg	US
1631358	Chris Redd	1985-03-25 00:00:00	https://image.tmdb.org/t/p/w500/rGbWKHAMhF1mwnrrQWWhlIuIL98.jpg	US
1219688	Greer Barnes	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/zd1ORoGOMgwEFXlgRyuxO6s4Fpv.jpg	US
155549	Ray Iannicelli	1942-06-28 00:00:00	https://image.tmdb.org/t/p/w500/901ocXTlOo5Ynly56DbRyJ1mQTG.jpg	US
78320	Bryan Callen	1967-01-26 00:00:00	https://image.tmdb.org/t/p/w500/dYlYyeKLC6jXl6twAIsqYQCnFlp.jpg	PH
1292351	Peter Hans Benson	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/oSHUozsEBg8Znp1sCAGlAKyKGyE.jpg	SE
2505669	Tony D. Head	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/fyMJ9lLvMqJqjUg6OaAObXmlSaw.jpg	US
171689	Jeff McCarthy	1954-10-16 00:00:00	https://image.tmdb.org/t/p/w500/1xyUKIybgVk3raZ054iOO1lhlWE.jpg	US
206398	John Cenatiempo	1963-03-05 00:00:00	https://image.tmdb.org/t/p/w500/6cEyUFyS5Tw2LGY0HkjpMjMZDmG.jpg	US
1456745	James Ciccone	1963-06-14 00:00:00	https://image.tmdb.org/t/p/w500/2dkbTiC8rLovUIh5Vw3YSCsDuWH.jpg	US
2507441	Roger Squitero	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/c0lVj8fFoekij1MX8g34Tg5i3j7.jpg	US
1918850	Mary Kate Malat	1994-10-16 00:00:00	https://image.tmdb.org/t/p/w500/5VXrmVllmtoKo1CFhxNZN4lOAhg.jpg	US
1432058	Adrienne Acevedo Lovette	1982-10-02 00:00:00	https://image.tmdb.org/t/p/w500/8pVfVZUBucqlA6FngNavrfwMSf7.jpg	PR
2281904	Jamaal Burcher	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/bVwxTpjB3AVXYy8nYn4vSmsjsMm.jpg	BM
2216410	Jesse Schratz	2007-10-03 00:00:00	https://image.tmdb.org/t/p/w500/8BsMB7iayqmngxzVbetl8dfPlsY.jpg	US
2551677	Isabella Ferreira	2002-12-20 00:00:00	https://image.tmdb.org/t/p/w500/isTgWDgTaolCNXzj6MEmMm4BOfP.jpg	US
1691382	Shade Rupe	1968-08-23 00:00:00	https://image.tmdb.org/t/p/w500/69dc66AU0CYKVS6OKJro704gZEE.jpg	US
1049742	Jade Pettyjohn	2000-11-08 00:00:00	https://image.tmdb.org/t/p/w500/crsqGImbWxWovyywoRqbfni2V3J.jpg	US
1762563	JoJo Siwa	2003-05-19 00:00:00	https://image.tmdb.org/t/p/w500/c4DxZIoszLIx2GNkjsqC8G1bOpB.jpg	US
2602320	Julian Haig	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/uJe5cOkRDW246O9Y3lfNPzH1E9J.jpg	AU
46898	Peter Graham-Gaudreau	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/uxUN4vj7ioO8Oh3m2YW8ZJHh915.jpg	CA
112268	Peter Giles	1971-02-15 00:00:00	https://image.tmdb.org/t/p/w500/cdeLADYlf5zfkOnkX93L6WsegnG.jpg	CA
3223	Robert Downey Jr.	1965-04-04 00:00:00	https://image.tmdb.org/t/p/w500/5qHNjhtjMD4YWH3UP0rm4tKwxCL.jpg	US
103	Mark Ruffalo	1967-11-22 00:00:00	https://image.tmdb.org/t/p/w500/5GilHMOt5PAQh6rlUKZzGmaKEI7.jpg	US
1896	Don Cheadle	1964-11-29 00:00:00	https://image.tmdb.org/t/p/w500/vPzvP0Qik5yHNf6dF2uqLH9HrX1.jpg	US
71580	Benedict Cumberbatch	1976-07-19 00:00:00	https://image.tmdb.org/t/p/w500/fBEucxECxGLKVHBznO0qHtCGiMO.jpg	GB
1136406	Tom Holland	1996-06-01 00:00:00	https://image.tmdb.org/t/p/w500/yxYOaalFh8SUwNE5C0wzOwF89Ny.jpg	GB
172069	Chadwick Boseman	1976-11-29 00:00:00	https://image.tmdb.org/t/p/w500/nL16SKfyP1b7Hk6LsuWiqMfbdb8.jpg	US
8691	Zoe Saldaña	1978-06-19 00:00:00	https://image.tmdb.org/t/p/w500/iOVbUH20il632nj2v01NCtYYeSg.jpg	US
543261	Karen Gillan	1987-11-28 00:00:00	https://image.tmdb.org/t/p/w500/52kqB0Bei1TaTBx2rABrijVhhTG.jpg	GB
91606	Tom Hiddleston	1981-02-09 00:00:00	https://image.tmdb.org/t/p/w500/mclHxMm8aPlCPKptP67257F5GPo.jpg	GB
6162	Paul Bettany	1971-05-27 00:00:00	https://image.tmdb.org/t/p/w500/oNrDowF5cRtK5lJJuCAh0KeFizy.jpg	GB
550843	Elizabeth Olsen	1989-02-16 00:00:00	https://image.tmdb.org/t/p/w500/mbMsmQE5CyMVTIGMGCw2XpcPCOc.jpg	US
53650	Anthony Mackie	1978-09-23 00:00:00	https://image.tmdb.org/t/p/w500/kfTwOYr3iUucmYz8kPjhYy07G2Z.jpg	US
60898	Sebastian Stan	1982-08-13 00:00:00	https://image.tmdb.org/t/p/w500/nKZgixTbHFXpkzzIpMFdLX98GYh.jpg	RO
82104	Danai Gurira	1978-02-14 00:00:00	https://image.tmdb.org/t/p/w500/z7H7QeQvr24vskGlANQhG43vozQ.jpg	US
30082	Benedict Wong	1971-06-03 00:00:00	https://image.tmdb.org/t/p/w500/yYfLyrC2CE6vBWSJfkpuVKL2POM.jpg	GB
139820	Pom Klementieff	1986-05-03 00:00:00	https://image.tmdb.org/t/p/w500/hfUKAI2kXTMMWjno0i4sLPJud5N.jpg	CA
51329	Bradley Cooper	1975-01-05 00:00:00	https://image.tmdb.org/t/p/w500/DPnessSsWqVXRbKm93PtMjB4Us.jpg	US
12052	Gwyneth Paltrow	1972-09-27 00:00:00	https://image.tmdb.org/t/p/w500/m2xcWJvhRdfbHxDj13gTAQ5Is0d.jpg	US
1121	Benicio del Toro	1967-02-19 00:00:00	https://image.tmdb.org/t/p/w500/s1EVFX10YJZTcvkAAq4AcPniS3t.jpg	PR
51663	Sean Gunn	1974-05-22 00:00:00	https://image.tmdb.org/t/p/w500/vpU13iCGqCpCd3LH4Tem6sVr7it.jpg	US
227	William Hurt	1950-03-20 00:00:00	https://image.tmdb.org/t/p/w500/j3mjmuHLBW4XQSw53C8Sh0Lh3ZQ.jpg	US
1083010	Letitia Wright	1993-10-31 00:00:00	https://image.tmdb.org/t/p/w500/f7PevpEeBqwzACPhoZ8K3ktrKvE.jpg	GY
29240	Tom Vaughan-Lawlor	1977-01-01 00:00:00	https://image.tmdb.org/t/p/w500/yArj06agLlBH9LCAp7gxphLkyqV.jpg	IE
1308445	Carrie Coon	1981-01-24 00:00:00	https://image.tmdb.org/t/p/w500/kbuScim9S6q2UKP1jCpp5UZB0P5.jpg	US
1379821	Michael James Shaw	1986-09-16 00:00:00	https://image.tmdb.org/t/p/w500/djaWcSCBpXBV2wirtH4YX6t0YqT.jpg	US
7624	Stan Lee	1922-12-28 00:00:00	https://image.tmdb.org/t/p/w500/kKeyWoFtTqOPsbmwylNHmuB3En9.jpg	US
1447932	Winston Duke	1986-11-15 00:00:00	https://image.tmdb.org/t/p/w500/pqwok07EgGGTCa80kmGQmb8ut8M.jpg	US
139900	Florence Kasumba	1976-10-26 00:00:00	https://image.tmdb.org/t/p/w500/v7armAbV6haib0fTl6ZktTUMRmg.jpg	UG
62105	Kerry Condon	1983-01-04 00:00:00	https://image.tmdb.org/t/p/w500/5sUJoph3b9qwOUXhCss7meBjE49.jpg	IE
1649152	Jacob Batalon	1996-06-06 00:00:00	https://image.tmdb.org/t/p/w500/53YhaL4xw4Sb1ssoHkeSSBaO29c.jpg	US
211937	Tiffany Espensen	1999-02-10 00:00:00	https://image.tmdb.org/t/p/w500/srxz35x7Xxe7JxHeHzX0cRNF3ON.jpg	CN
1517836	Isabella Amara	1998-10-09 00:00:00	https://image.tmdb.org/t/p/w500/hz2uP4Qjucj5my9rLc0FO9aWV2E.jpg	US
212003	Ethan Dizon	2002-01-01 00:00:00	https://image.tmdb.org/t/p/w500/2Zqioe3D9Yb4B8dMUcea6Cy6aoQ.jpg	US
1448180	Ameenah Kaplan	1974-06-17 00:00:00	https://image.tmdb.org/t/p/w500/kECeBrZmUeuo2vbMY86ars99WvV.jpg	US
555249	Ross Marquand	1981-08-22 00:00:00	https://image.tmdb.org/t/p/w500/2CxkVPimin0c2v7fUK3MGjgEnLt.jpg	US
5552	Stephen McFeely	1969-11-12 00:00:00	https://image.tmdb.org/t/p/w500/i9B6gFzExPsh5IEjD2nn4ym4lx2.jpg	US
964421	Aaron Lazar	1976-06-21 00:00:00	https://image.tmdb.org/t/p/w500/87xfF3QmQtYtlENybOvFL3bfMcr.jpg	US
97844	Robert Pralgo	1966-06-04 00:00:00	https://image.tmdb.org/t/p/w500/lF2UcQemojihJM4XlLGkWEEsJuJ.jpg	US
2031105	Olaniyan Thurmon	2002-02-11 00:00:00	https://image.tmdb.org/t/p/w500/tdn6j7JOEAVQwy3TF2xuyDulflT.jpg	US
1480027	Matthew Zuk	1990-05-18 00:00:00	https://image.tmdb.org/t/p/w500/jifQz74EU8qsigSgNZR2u2SDhek.jpg	US
11181	Kenneth Branagh	1960-12-10 00:00:00	https://image.tmdb.org/t/p/w500/AbCqqFxNi5w3nDUFdQt0DGMFh5H.jpg	GB
71189	Cobie Smulders	1982-04-03 00:00:00	https://image.tmdb.org/t/p/w500/1b0mYokcGsfFRge4bjXlS5ihtek.jpg	CA
2234460	Harrison Osterfield	1996-07-04 00:00:00	https://image.tmdb.org/t/p/w500/G6yKGtIVqN7CcrXCe3jRQszUKj.jpg	GB
1979183	Marie Mouroum	1992-07-06 00:00:00	https://image.tmdb.org/t/p/w500/42kktBafPgWXvkrRHVqEglutj1p.jpg	DE
4442307	Lady Cardinal	1987-11-17 00:00:00	https://image.tmdb.org/t/p/w500/qjJEYEGeNFtnilS4iweOy4ckt1a.jpg	US
3202311	Tanya Wheelock	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/dBeJ1hsc49YpLjQbmhi201btaB6.jpg	US
1003260	Nassim Lyes	1988-06-03 00:00:00	https://image.tmdb.org/t/p/w500/nMJ1qjhdfgRT8JuyUfFEkEwihOW.jpg	FR
45152	Olivier Gourmet	1963-07-22 00:00:00	https://image.tmdb.org/t/p/w500/6FQNMThslrNxHimAN2BBCtTYeUM.jpg	BE
1102621	Vithaya Pansringarm	1959-08-11 00:00:00	https://image.tmdb.org/t/p/w500/d27LoRSKh6WBYSQo6MNPNFfB0BQ.jpg	TH
2522177	Kenneth Won	1974-01-18 00:00:00	https://image.tmdb.org/t/p/w500/5vhOcyQ0LgBFXHlvhoJ0IyqwGSX.jpg	US
521673	Sahajak Boonthanakit	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/a36MI02S0f11bJZjBoxkZTsUDAK.jpg	TH
3045013	Chananticha Chaipa	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/lCui0BOOlpWxFrM41NT5jx5SGOG.jpg	TH
1272350	Boonsong Nakphoo	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/9hCUlDrl1SrYbuq9OqZlF4C2Xos.jpg	TH
2424471	Sawanee Utoomma	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/vfr0G13M34r56brKpQ6eJxdp6RZ.jpg	TH
3131642	Narilya Gulmongkolpech	2000-03-26 00:00:00	https://image.tmdb.org/t/p/w500/eBa4fndcdfVcI4dNXi7ZFwMSXHL.jpg	TH
934	Russell Crowe	1964-04-07 00:00:00	https://image.tmdb.org/t/p/w500/rsxGCRtPu42uKDJZlz7qknvz8h6.jpg	NZ
35027	Ryan Simpkins	1998-03-25 00:00:00	https://image.tmdb.org/t/p/w500/iwbcrrYEGv9RWIV62vqcXNRYwXl.jpg	US
86800	Chloe Bailey	1998-07-01 00:00:00	https://image.tmdb.org/t/p/w500/oMP7eRkzyG5khuzgmkBCFut6Yj9.jpg	US
6163	Adam Goldberg	1970-10-25 00:00:00	https://image.tmdb.org/t/p/w500/xEbqDqTWlSSCi4v8FI3S9YSEPJz.jpg	US
17304	Adrian Pasdar	1965-04-30 00:00:00	https://image.tmdb.org/t/p/w500/4KdM69ljovbLumGoVe8ct9s6GJm.jpg	US
11076	David Hyde Pierce	1959-04-03 00:00:00	https://image.tmdb.org/t/p/w500/9BSgq4yxjPry1Oghqq92S4wUIvs.jpg	US
93151	Joshua John Miller	1974-12-26 00:00:00	https://image.tmdb.org/t/p/w500/8OjkRkXUJemmvP3BgSwcg2iupQ5.jpg	US
20767	Samantha Mathis	1970-05-12 00:00:00	https://image.tmdb.org/t/p/w500/7J7gvH1uRqfPAPlg7b35rrxSbLB.jpg	US
3072059	Chris TC Edge	1972-03-13 00:00:00	https://image.tmdb.org/t/p/w500/wqVTBBm11sxgCJT7rluC2Uha1up.jpg	US
13014	Toby Jones	1966-09-07 00:00:00	https://image.tmdb.org/t/p/w500/1qNisdp4f1KstdfvAgYXMdrhwfk.jpg	GB
11355	Jason Isaacs	1963-06-06 00:00:00	https://image.tmdb.org/t/p/w500/s6XRFjqUsrDJfDQuXPOoExAYPmb.jpg	GB
1834	Shirley Henderson	1965-11-24 00:00:00	https://image.tmdb.org/t/p/w500/rWE3okN5EUvCT8DVjK0xobKStfQ.jpg	GB
23076	Robert Hardy	1925-10-29 00:00:00	https://image.tmdb.org/t/p/w500/5FK7rDWRsbNwAMsHHpkpeGafFtu.jpg	GB
9138	Gemma Jones	1942-12-04 00:00:00	https://image.tmdb.org/t/p/w500/hFApnOEWXyE55ONGGXis6a0PPHM.jpg	GB
6199	Miriam Margolyes	1941-05-18 00:00:00	https://image.tmdb.org/t/p/w500/q73xMZveDogt3e5uFknWMExLIyH.jpg	GB
20999	Mark Williams	1959-08-22 00:00:00	https://image.tmdb.org/t/p/w500/gdlEDhxSmPv3hWHbpTuwCI5Jrtk.jpg	GB
8444	Christian Coulson	1978-10-03 00:00:00	https://image.tmdb.org/t/p/w500/kFwnSTUCCRFWSvqQAU1cykrLqPK.jpg	GB
1364032	Hugh Mitchell	1989-09-07 00:00:00	https://image.tmdb.org/t/p/w500/iKGEuJnUbYqxg0DaVexx10X9yNi.jpg	GB
11182	Veronica Clifford	1944-10-20 00:00:00	https://image.tmdb.org/t/p/w500/9Uo6lDdOzRmN7G7DwHrDxVM8B3L.jpg	GB
14950	Jim Norton	1938-01-04 00:00:00	https://image.tmdb.org/t/p/w500/iC9yNaj8NwoKK7WtzNcGgVxBbbg.jpg	IE
79638	Edward Tudor-Pole	1955-12-06 00:00:00	https://image.tmdb.org/t/p/w500/dd1vRAgA7w82NRWoqrx2d4Hwe4k.jpg	GB
1849452	Tony Christian	1975-12-16 00:00:00	https://image.tmdb.org/t/p/w500/vQNmZWh5msxjOYbSn5ZkPVajfgF.jpg	GB
1090783	Charlotte Skeoch	1989-02-22 00:00:00	https://image.tmdb.org/t/p/w500/4elY7wEd2QprwyVyu5buiG0CtLs.jpg	GB
105823	Alfred Burke	1918-02-28 00:00:00	https://image.tmdb.org/t/p/w500/fqkyOLrFk9KcIWp4KwkXW0HUdK3.jpg	GB
133453	Daisy Bates	1974-01-05 00:00:00	https://image.tmdb.org/t/p/w500/wpCeaQPj1f4gDm2NrV30Rg8Tszt.jpg	GB
740	Julian Glover	1935-03-27 00:00:00	https://image.tmdb.org/t/p/w500/yqFGLoY6CRy9jGp3NI328VlsaIG.jpg	GB
553700	Ana Mulvoy Ten	1992-05-08 00:00:00	https://image.tmdb.org/t/p/w500/1GJXZYxG3BXsowSeP7ozv2v0u6h.jpg	GB
36422	Luke Wilson	1971-09-21 00:00:00	https://image.tmdb.org/t/p/w500/nH1h9dZGSBuWIOyX27HpYyYykvr.jpg	US
17141	Greg Kinnear	1963-06-17 00:00:00	https://image.tmdb.org/t/p/w500/w4CVkyjjCBuZXVsdoiKxKeJzFYn.jpg	US
190895	Sarah Gadon	1987-04-04 00:00:00	https://image.tmdb.org/t/p/w500/cxOvcYhyrOMvqTq9rK2tIV69zL3.jpg	CA
27125	Molly Parker	1972-06-30 00:00:00	https://image.tmdb.org/t/p/w500/xo0GT4MAUkqCKKL8qq6WEmHDre5.jpg	CA
37027	Lew Temple	1967-10-02 00:00:00	https://image.tmdb.org/t/p/w500/s8FXAUqIclO4ndI9BsLavrxqQup.jpg	US
5921	Martin Roach	1962-07-15 00:00:00	https://image.tmdb.org/t/p/w500/tTyxAqRDIhyfqRQjM2Opeo42ESc.jpg	CA
69740	Patrick Renna	1979-03-03 00:00:00	https://image.tmdb.org/t/p/w500/6o2qe03mUypeAcL6eXVp7m1EnEZ.jpg	US
1288766	Blake DeLong	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/1ZP7YsBNytRMnRvHqdaSvbjgfE1.jpg	US
1940028	Ali Hassan	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/kSH6qqy9BvDy1VR9TXlb3Jbk1en.jpg	CA
2428442	Davide Fair	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/eekZxvJ37BAHTZpBeDOEC030RSg.jpg	CA
1060114	Jackie English	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/sE7Ydnd13LHOw7BtmrOskdiKCOw.jpg	CA
4794845	Ashley Emerson	2003-06-25 00:00:00	https://image.tmdb.org/t/p/w500/7MKeCfI5ZI304IaD05SCxh2VQJC.jpg	US
4917469	McAuley Tucker	2005-03-23 00:00:00	https://image.tmdb.org/t/p/w500/3FVphuyEWbrUo5Unt4xSaO03lVX.jpg	CA
2185015	Mo Gilligan	1988-02-19 00:00:00	https://image.tmdb.org/t/p/w500/i6heWKdRr6QJYO9VZ3ag2kFsE9H.jpg	GB
2223752	Simone Ashley	1995-03-30 00:00:00	https://image.tmdb.org/t/p/w500/NoWUSMGBrQrX23XK7eVjHlfaqY.jpg	GB
2598	Sophie Okonedo	1968-08-11 00:00:00	https://image.tmdb.org/t/p/w500/fpqohSUUSs1hjc9aHo5x6ypDr5Y.jpg	GB
1146050	Zayn Malik	1993-01-12 00:00:00	https://image.tmdb.org/t/p/w500/morJ0EY4WkhBtaFudSkJ2BoNtA2.jpg	GB
1312166	Dylan Llewellyn	1993-09-10 00:00:00	https://image.tmdb.org/t/p/w500/1NAgIljZXDGwTrzKEQEIWNqGSfe.jpg	GB
1417794	Naomi McDonald	1991-02-02 00:00:00	https://image.tmdb.org/t/p/w500/wesekQ4Yh9zbarbQucYUOcgW0Y9.jpg	GB
214477	Nigel Pilkington	1975-11-28 00:00:00	https://image.tmdb.org/t/p/w500/x7RkFby4eQuSpyYKkT3zwPRY6o7.jpg	GB
3131	Antonio Banderas	1960-08-10 00:00:00	https://image.tmdb.org/t/p/w500/ofgvO1FyEeslDZpt1qCl4qZKEw2.jpg	ES
3136	Salma Hayek Pinault	1966-09-02 00:00:00	https://image.tmdb.org/t/p/w500/1qfYF7NGRObmeKR7IVXUFVIC0CN.jpg	MX
39187	Olivia Colman	1974-01-30 00:00:00	https://image.tmdb.org/t/p/w500/4ZwZ66zXZyX26Kf2wfeMt1tQZQf.jpg	GB
5538	Ray Winstone	1957-02-19 00:00:00	https://image.tmdb.org/t/p/w500/kDShEv6zPfArgcwXliGWKR65Mmo.jpg	GB
1346535	Samson Kayo	1991-06-20 00:00:00	https://image.tmdb.org/t/p/w500/jyGT8cgl6MEANOpRKoHgXaC1yp6.jpg	GB
933558	John Mulaney	1982-08-26 00:00:00	https://image.tmdb.org/t/p/w500/nYa0D4nwtw95p4G9WzkmEoIM1NA.jpg	US
1180099	Da'Vine Joy Randolph	1986-05-21 00:00:00	https://image.tmdb.org/t/p/w500/awNT6lltD8zItbGtolmO8IGT8ot.jpg	US
1371039	Anthony Mendez	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/p6aJA6De9KWR8vlw1nK0VnVJtFy.jpg	US
3815284	Kevin McCann	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/2Ea30PSbNoNkaGBMQHsjW4EfQ1d.jpg	IE
1346997	Bernardo de Paula	1976-03-23 00:00:00	https://image.tmdb.org/t/p/w500/sjvTZ6sfF3xeRsbAaPdV4Qeh2bO.jpg	US
1404102	Betsy Sodaro	1984-06-10 00:00:00	https://image.tmdb.org/t/p/w500/mia2ZT1kMUnKUdT2Q9QZ7u80HJJ.jpg	US
1214638	Artemis Pebdani	1977-08-02 00:00:00	https://image.tmdb.org/t/p/w500/ctwVQYbcOuTIQJ866fi3AhzqKBM.jpg	US
12080	Conrad Vernon	1968-07-11 00:00:00	https://image.tmdb.org/t/p/w500/c7MIz3sy6UPhBh9YnThd7j8ypdl.jpg	US
12095	Cody Cameron	1965-02-28 00:00:00	https://image.tmdb.org/t/p/w500/68Cewzd8H9qFwJclWFl33Fl3N70.jpg	US
1214171	Al Rodrigo	1960-05-29 00:00:00	https://image.tmdb.org/t/p/w500/kyQSlxHVnla3MfXzs2XhKCRHWMw.jpg	US
3464660	Miguel Matrai	2009-01-10 00:00:00	https://image.tmdb.org/t/p/w500/9emFQsvsFMONFpt6b5oMTZLQ8ad.jpg	US
1857635	Pilar Uribe	1970-05-30 00:00:00	https://image.tmdb.org/t/p/w500/dU5ENAPoSDCFIUf1WPyu01ov5RE.jpg	US
1759221	Heidi Gardner	1983-07-27 00:00:00	https://image.tmdb.org/t/p/w500/iONzt7sP8fm5sjgfSenQQU1RAvS.jpg	US
3012833	Januel Mercado	1984-11-23 00:00:00	https://image.tmdb.org/t/p/w500/qrtO9HvIzlwJlyQlhLiI5JeL08o.jpg	US
2017052	Aydrea Walden	1979-09-27 00:00:00	https://image.tmdb.org/t/p/w500/kOVApwJxys8bCZUshVOCew8lFLV.jpg	US
5658	Michael Gambon	1940-10-19 00:00:00	https://image.tmdb.org/t/p/w500/3jdWkDKf4IODbG4JKTeaC7AzxZH.jpg	IE
64	Gary Oldman	1958-03-21 00:00:00	https://image.tmdb.org/t/p/w500/2v9FVVBUrrkW2m3QOcYkuhq9A6o.jpg	GB
11207	David Thewlis	1963-03-20 00:00:00	https://image.tmdb.org/t/p/w500/sNuYyT8ocLlQr3TdAW9CoKVbCU8.jpg	GB
9191	Timothy Spall	1957-02-27 00:00:00	https://image.tmdb.org/t/p/w500/kcXnzkIPUHgCFtWQ7sUjQCrSIME.jpg	GB
7056	Emma Thompson	1959-04-15 00:00:00	https://image.tmdb.org/t/p/w500/xr8Ki3CIqweWWqS5q0kUYdiK6oQ.jpg	GB
11213	Pam Ferris	1948-05-11 00:00:00	https://image.tmdb.org/t/p/w500/aVvdYkgolh22FYqqCJhVO8jd7To.jpg	DE
1666	Julie Christie	1941-04-14 00:00:00	https://image.tmdb.org/t/p/w500/siAi4XZhDPP8LRgbByzwLqVaLIQ.jpg	IN
229672	Lee Ingleby	1976-01-28 00:00:00	https://image.tmdb.org/t/p/w500/vgLBNxTIC9DjfIJZVS83bbyzQOU.jpg	GB
53519	Lenny Henry	1958-08-29 00:00:00	https://image.tmdb.org/t/p/w500/aT5zYMfGI3x4sGtCs9QM4gT0G2h.jpg	GB
1244447	Jimmy Gardner	1924-08-24 00:00:00	https://image.tmdb.org/t/p/w500/v6QxfIDuoCTJlD5Rk6eLw6pnHQc.jpg	GB
1437296	Genevieve Gaunt	1991-01-13 00:00:00	https://image.tmdb.org/t/p/w500/z8PKtHh8V9TpOPOkf8fHjrrHE8s.jpg	GB
34900	Paul Whitehouse	1958-05-17 00:00:00	https://image.tmdb.org/t/p/w500/v24xgnX50qEmH04RUmgC6dSCRYh.jpg	GB
1797012	Ekow Quartey	1990-07-12 00:00:00	https://image.tmdb.org/t/p/w500/p0txe4AFkGe8cg5tuBwTC5bYnq1.jpg	GB
1178198	Ian Brown	1963-02-20 00:00:00	https://image.tmdb.org/t/p/w500/6XxJn5m0SPTbC5VMAENs5TVbYcZ.jpg	GB
1363079	Tom Ackerley	1990-06-13 00:00:00	https://image.tmdb.org/t/p/w500/1oMM60nZYnNrrg0BskREjt1FcRP.jpg	GB
66580	Scott Adsit	1965-11-26 00:00:00	https://image.tmdb.org/t/p/w500/vbbuugUWrZhxA7ASWYiGqdZ6Dtf.jpg	US
515510	Ryan Potter	1995-09-12 00:00:00	https://image.tmdb.org/t/p/w500/3Hdip1zNYrea3V7uzJQYxTps5Ne.jpg	US
82093	Daniel Henney	1979-11-28 00:00:00	https://image.tmdb.org/t/p/w500/elAolohpUG5nS99EZxHZjd44DsS.jpg	US
51990	T.J. Miller	1981-06-04 00:00:00	https://image.tmdb.org/t/p/w500/rRrVvBxOkyYM5XdLXimShHR1Itn.jpg	US
78324	Jamie Chung	1983-04-10 00:00:00	https://image.tmdb.org/t/p/w500/5KS919slWvKwK2fcE3jpkEodlxs.jpg	US
87822	Damon Wayans Jr.	1982-07-30 00:00:00	https://image.tmdb.org/t/p/w500/f6gNg71Js9XqCiXUtyFyXXbJ9ni.jpg	US
589162	Genesis Rodriguez	1987-07-29 00:00:00	https://image.tmdb.org/t/p/w500/gUI9KADVjfHiI8nMc87hkeaWEF3.jpg	US
21088	Alan Tudyk	1971-03-16 00:00:00	https://image.tmdb.org/t/p/w500/jUuUbPuMGonFT5E2pcs4alfqaCN.jpg	US
52792	Maya Rudolph	1972-07-27 00:00:00	https://image.tmdb.org/t/p/w500/9QTtEfAmQOQcGhD12zzxdouLRh4.jpg	US
21132	Abraham Benrubi	1969-10-04 00:00:00	https://image.tmdb.org/t/p/w500/d5pQ1PCv0XDnYXZTbX2t5r4AMph.jpg	US
108253	Katie Lowes	1982-09-22 00:00:00	https://image.tmdb.org/t/p/w500/5IqYIFfcZu7V4wrbzZKVtpkmuSw.jpg	US
287341	Billy Bush	1971-10-13 00:00:00	https://image.tmdb.org/t/p/w500/b1CYHiB4KpGmx6qOIVhvQSZwCYk.jpg	US
7884	Daniel Gerson	1966-08-01 00:00:00	https://image.tmdb.org/t/p/w500/amOuK3ytWV7KXeWrpl9joCglRlF.jpg	US
1340669	Paul Briggs	1974-12-17 00:00:00	https://image.tmdb.org/t/p/w500/9kzPCzw7U47F9jvrZ7gStGQrtZ9.jpg	US
81178	Charlie Adler	1956-10-02 00:00:00	https://image.tmdb.org/t/p/w500/hVENHdlEqsX6vhBW4MTpfYEFFQ3.jpg	US
54698	Marcella Lentz-Pope	1988-08-16 00:00:00	https://image.tmdb.org/t/p/w500/vSzzdPYyGtZGj4RqKsDGdXZN6E0.jpg	US
193254	David Shaughnessy	1957-03-03 00:00:00	https://image.tmdb.org/t/p/w500/pjevZtJQKWwwYGQa2pph409ePP3.jpg	GB
60272	Cam Clarke	1957-11-06 00:00:00	https://image.tmdb.org/t/p/w500/hScRMNVHAFge06mOfFEauKcthtO.jpg	US
36821	Nicholas Guest	1951-05-05 00:00:00	https://image.tmdb.org/t/p/w500/dSA11Xw5JX7uJ3SSFWc1eimtoY4.jpg	US
1225886	Sundra Oakley	1975-01-02 00:00:00	https://image.tmdb.org/t/p/w500/A9Oqn06YAB5lTAYdbNxqiOSFavP.jpg	US
158124	Shane Sweet	1986-01-06 00:00:00	https://image.tmdb.org/t/p/w500/3fVAoIbfMO2XKtMsIOVpo5fkXVq.jpg	US
15831	Frank Welker	1946-03-12 00:00:00	https://image.tmdb.org/t/p/w500/xXODQ5AX6pG4my8ieeEIuiAREXs.jpg	US
176035	Kirk Baily	1963-02-02 00:00:00	https://image.tmdb.org/t/p/w500/pu0kg7Nbaw028jnQlQXLO5ZGaZk.jpg	US
950773	Jackie Gonneau	1962-03-20 00:00:00	https://image.tmdb.org/t/p/w500/kyFKdgHfT3JizvqmC0eFksSijIG.jpg	US
173428	Bridget Hoffman	1957-03-05 00:00:00	https://image.tmdb.org/t/p/w500/fmA0h836dBXd6Uhh3kqfmbG3X0O.jpg	US
1447307	Josie Trinidad	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/rMwIL53SKwZJu7WFW1fcYIVTxhP.jpg	PH
1502453	Daniel Howell	1991-06-11 00:00:00	https://image.tmdb.org/t/p/w500/rDoIMSAMmFLCngD6IyCQ9EuzT3F.jpg	GB
1688572	Phil Lester	1987-01-30 00:00:00	https://image.tmdb.org/t/p/w500/7a3JEDPbaRPhijJPdwZRbToKzeN.jpg	GB
4948620	Udin Wakuk	0001-11-11 00:00:00	https://i.pinimg.com/736x/ac/01/ae/ac01ae9b69d0658bad4ebe422241deb4.jpg	ID
\.


--
-- TOC entry 4997 (class 0 OID 56485)
-- Dependencies: 221
-- Data for Name: Award; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Award" (id, name, year, "countryCode") FROM stdin;
1	Best Picture	1970-01-01 00:00:02.02	US
2	Best Director	1970-01-01 00:00:02.02	KR
3	Best Actor	1970-01-01 00:00:02.02	KR
4	Best Actress	1970-01-01 00:00:02.02	KR
5	Best Supporting Actor	1970-01-01 00:00:02.02	KR
6	Best Supporting Actress	1970-01-01 00:00:02.02	KR
7	Best Original Screenplay	1970-01-01 00:00:02.02	KR
8	Best Adapted Screenplay	1970-01-01 00:00:02.02	KR
9	Best Animated Feature	1970-01-01 00:00:02.02	KR
10	Best International Feature	1970-01-01 00:00:02.02	US
11	Best Documentary Feature	1970-01-01 00:00:02.02	US
12	Best Original Score	1970-01-01 00:00:02.02	US
13	Best Original Song	1970-01-01 00:00:02.02	US
14	Best Sound Editing	1970-01-01 00:00:02.02	JP
15	Best Sound Mixing	1970-01-01 00:00:02.02	JP
16	Best Production Design	1970-01-01 00:00:02.02	JP
17	Best Cinematography	1970-01-01 00:00:02.02	JP
18	Best Makeup and Hairstyling	1970-01-01 00:00:02.02	JP
19	Best Costume Design	1970-01-01 00:00:02.02	JP
20	Best Film Editing	1970-01-01 00:00:02.02	JP
21	Best Visual Effects	1970-01-01 00:00:02.02	US
22	Best Animated Short	1970-01-01 00:00:02.02	US
23	Best Documentary Short	1970-01-01 00:00:02.02	US
24	Best Live Action Short	1970-01-01 00:00:02.02	US
25	Best Director	1970-01-01 00:00:02.02	ID
\.


--
-- TOC entry 4993 (class 0 OID 56468)
-- Dependencies: 217
-- Data for Name: Country; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Country" (code, name) FROM stdin;
AD	Andorra
AE	United Arab Emirates
AF	Afghanistan
AG	Antigua & Barbuda
AI	Anguilla
AL	Albania
AM	Armenia
AN	Netherlands Antilles
AO	Angola
AQ	Antarctica
AR	Argentina
AS	American Samoa
AT	Austria
AU	Australia
AW	Aruba
AZ	Azerbaijan
BA	Bosnia & Herzegovina
BB	Barbados
BD	Bangladesh
BE	Belgium
BF	Burkina Faso
BG	Bulgaria
BH	Bahrain
BI	Burundi
BJ	Benin
BM	Bermuda
BN	Brunei
BO	Bolivia
BR	Brazil
BS	Bahamas
BT	Bhutan
BU	Burma
BV	Bouvet Island
BW	Botswana
BY	Belarus
BZ	Belize
CA	Canada
CC	Cocos (Keeling) Islands
CD	Democratic Republic of the Congo (Kinshasa)
CF	Central African Republic
CG	Republic of the Congo (Brazzaville)
CH	Switzerland
CI	Côte d’Ivoire
CK	Cook Islands
CL	Chile
CM	Cameroon
CN	China
CO	Colombia
CR	Costa Rica
CS	Serbia and Montenegro
CU	Cuba
CV	Cape Verde
CX	Christmas Island
CY	Cyprus
CZ	Czech Republic
DE	Germany
DJ	Djibouti
DK	Denmark
DM	Dominica
DO	Dominican Republic
DZ	Algeria
EC	Ecuador
EE	Estonia
EG	Egypt
EH	Western Sahara
ER	Eritrea
ES	Spain
ET	Ethiopia
FI	Finland
FJ	Fiji
FK	Falkland Islands
FM	Micronesia
FO	Faroe Islands
FR	France
GA	Gabon
GB	United Kingdom
GD	Grenada
GE	Georgia
GF	French Guiana
GH	Ghana
GI	Gibraltar
GL	Greenland
GM	Gambia
GN	Guinea
GP	Guadeloupe
GQ	Equatorial Guinea
GR	Greece
GS	South Georgia & South Sandwich Islands
GT	Guatemala
GU	Guam
GW	Guinea-Bissau
GY	Guyana
HK	Hong Kong SAR China
HM	Heard & McDonald Islands
HN	Honduras
HR	Croatia
HT	Haiti
HU	Hungary
ID	Indonesia
IE	Ireland
IL	Israel
IN	India
IO	British Indian Ocean Territory
IQ	Iraq
IR	Iran
IS	Iceland
IT	Italy
JM	Jamaica
JO	Jordan
JP	Japan
KE	Kenya
KG	Kyrgyzstan
KH	Cambodia
KI	Kiribati
KM	Comoros
KN	St. Kitts & Nevis
KP	North Korea
KR	South Korea
KW	Kuwait
KY	Cayman Islands
KZ	Kazakhstan
LA	Laos
LB	Lebanon
LC	St. Lucia
LI	Liechtenstein
LK	Sri Lanka
LR	Liberia
LS	Lesotho
LT	Lithuania
LU	Luxembourg
LV	Latvia
LY	Libya
MA	Morocco
MC	Monaco
MD	Moldova
ME	Montenegro
MG	Madagascar
MH	Marshall Islands
MK	Macedonia
ML	Mali
MM	Myanmar (Burma)
MN	Mongolia
MO	Macau SAR China
MP	Northern Mariana Islands
MQ	Martinique
MR	Mauritania
MS	Montserrat
MT	Malta
MU	Mauritius
MV	Maldives
MW	Malawi
MX	Mexico
MY	Malaysia
MZ	Mozambique
NA	Namibia
NC	New Caledonia
NE	Niger
NF	Norfolk Island
NG	Nigeria
NI	Nicaragua
NL	Netherlands
NO	Norway
NP	Nepal
NR	Nauru
NU	Niue
NZ	New Zealand
OM	Oman
PA	Panama
PE	Peru
PF	French Polynesia
PG	Papua New Guinea
PH	Philippines
PK	Pakistan
PL	Poland
PM	St. Pierre & Miquelon
PN	Pitcairn Islands
PR	Puerto Rico
PS	Palestinian Territories
PT	Portugal
PW	Palau
PY	Paraguay
QA	Qatar
RE	Réunion
RO	Romania
RS	Serbia
RU	Russia
RW	Rwanda
SA	Saudi Arabia
SB	Solomon Islands
SC	Seychelles
SD	Sudan
SE	Sweden
SG	Singapore
SH	St. Helena
SI	Slovenia
SJ	Svalbard & Jan Mayen
SK	Slovakia
SL	Sierra Leone
SM	San Marino
SN	Senegal
SO	Somalia
SR	Suriname
SS	South Sudan
ST	São Tomé & Príncipe
SU	Soviet Union
SV	El Salvador
SY	Syria
SZ	Eswatini (Swaziland)
TC	Turks & Caicos Islands
TD	Chad
TF	French Southern Territories
TG	Togo
TH	Thailand
TJ	Tajikistan
TK	Tokelau
TL	Timor-Leste
TM	Turkmenistan
TN	Tunisia
TO	Tonga
TP	East Timor
TR	Turkey
TT	Trinidad & Tobago
TV	Tuvalu
TW	Taiwan
TZ	Tanzania
UA	Ukraine
UG	Uganda
UM	U.S. Outlying Islands
US	United States
UY	Uruguay
UZ	Uzbekistan
VA	Vatican City
VC	St. Vincent & Grenadines
VE	Venezuela
VG	British Virgin Islands
VI	U.S. Virgin Islands
VN	Vietnam
VU	Vanuatu
WF	Wallis & Futuna
WS	Samoa
XC	Czechoslovakia
XG	East Germany
XI	Northern Ireland
XK	Kosovo
YE	Yemen
YT	Mayotte
YU	Yugoslavia
ZA	South Africa
ZM	Zambia
ZR	Zaire
ZW	Zimbabwe
RRR	Republik Rakyat Roy
us	united
\.


--
-- TOC entry 5001 (class 0 OID 56503)
-- Dependencies: 225
-- Data for Name: Director; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Director" (id, name, "birthDate", "photoUrl", "countryCode") FROM stdin;
228134	Rupert Sanders	1971-03-16 00:00:00	https://image.tmdb.org/t/p/w500/jG07WemmHOWQvYnKPSdNGioGg7A.jpg	GB
17825	Shawn Levy	1968-07-23 00:00:00	https://image.tmdb.org/t/p/w500/j1CXZgmfvFeD7S3PYtsEk8H3ebB.jpg	CA
88675	Justin Baldoni	1984-01-24 00:00:00	https://image.tmdb.org/t/p/w500/2sc6iUWljADnqtjsaKU3s6f0DGW.jpg	US
182001	Kelsey Mann	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/fbZTKdt6wcZ6s6J0z91ZpxXpqOY.jpg	US
124748	Chris Renaud	1966-12-05 00:00:00	https://image.tmdb.org/t/p/w500/sumBJgBqRkK4XEJ2JYXpad3MTJs.jpg	US
37153	Zoë Kravitz	1988-12-01 00:00:00	https://image.tmdb.org/t/p/w500/A8Ig9UHh8NSiUGg3xChcoF7749w.jpg	US
78108	Isaac Florentine	1958-07-28 00:00:00	https://image.tmdb.org/t/p/w500/4PJrg3l105M2GMNazhu2DXZ1Wce.jpg	US
3084810	Kim Sung-han	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/jG07WemmHOWQvYnKPSdNGioGg7A.jpg	US
510	Tim Burton	1958-08-25 00:00:00	https://image.tmdb.org/t/p/w500/wcjuY5vD1nlfwWNbvvTGg5dGoRR.jpg	US
16847	Eli Roth	1972-04-18 00:00:00	https://image.tmdb.org/t/p/w500/qQTkpxzh1FlBGL1HD5hzdUMxv49.jpg	US
1399841	Adil El Arbi	1988-06-30 00:00:00	https://image.tmdb.org/t/p/w500/hpl12TXFDUjzomftx7zST3M2aLg.jpg	BE
1607016	Coralie Fargeat	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/sNyjxmiGLnRKHsR9GUojdcG0dfK.jpg	FR
3288	Chris Weitz	1969-11-30 00:00:00	https://image.tmdb.org/t/p/w500/u0zSPgtetcsRpqwUqNtVkBYPAnU.jpg	US
1410322	Jason Kim	1981-01-01 00:00:00	https://image.tmdb.org/t/p/w500/olknK7RuDjfjBRrJIh0t4e9IvQb.jpg	KR
84496	Josh Cooley	1979-05-23 00:00:00	https://image.tmdb.org/t/p/w500/rw6TQFIv9L5McYtRLyfTjfeeQfS.jpg	US
2263272	SK Dale	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/8ZwQLeDswGXnnCBpcEdprrUDUZ5.jpg	US
1327760	João Wainer	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/zb0m0H4y5yK3KlteO2xB6PVa7zA.jpg	US
66193	Chris Sanders	1962-03-12 00:00:00	https://image.tmdb.org/t/p/w500/6CtrIOCxggJ5eIAWeFQqd4Hs9FP.jpg	US
2535336	Courtney Paige	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/nDcxoXkzXBkLjEN02JcTfWNfC8K.jpg	US
74655	Jeremy Saulnier	1976-06-10 00:00:00	https://image.tmdb.org/t/p/w500/tTvAWJQFg0uMTCpIb3QphrQQMZA.jpg	US
916958	Liza Johnson	1970-12-13 00:00:00	https://image.tmdb.org/t/p/w500/y7as9fauoSzDo3J8xN9h4RZ6h7M.jpg	US
932248	Fede Álvarez	1978-02-09 00:00:00	https://image.tmdb.org/t/p/w500/f8KjBkmqAyNGTUkZh1oYIURP4id.jpg	UY
61411	Mark Dindal	1960-05-31 00:00:00	https://image.tmdb.org/t/p/w500/333OWiQBGLBjAWUemWySFzxCbhx.jpg	US
18878	Rob Cohen	1949-03-12 00:00:00	https://image.tmdb.org/t/p/w500/kVbB8Q0g8eXsn8l81flyC6TgMPW.jpg	US
4390792	Ryan C. Jaeger	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/jG07WemmHOWQvYnKPSdNGioGg7A.jpg	US
931952	Lee Isaac Chung	1978-10-19 00:00:00	https://image.tmdb.org/t/p/w500/fwiIh7jECjefCco3ZCdug6i3t9U.jpg	US
1503538	Tilman Singer	1988-01-01 00:00:00	https://image.tmdb.org/t/p/w500/gnzVCOobjdiIcxfHqBSnpL5uRgO.jpg	DE
2014826	Jinanavin Veerapatra	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/yv9hj9bMq2TXsPrSlDwOu8NxaGP.jpg	US
2580328	Michael Sarnoski	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/s2bl2Ct2BNLZjXqxHt7SpYgYzLD.jpg	US
1179066	Wes Ball	1980-10-28 00:00:00	https://image.tmdb.org/t/p/w500/zVPXrhuAxYAWlwDEWCaqeUPycFx.jpg	US
118581	Federico Zampaglione	1968-06-29 00:00:00	https://image.tmdb.org/t/p/w500/4tQxaGEdMuuyyOVUjCq3u0t8hvm.jpg	US
2119237	Nikhil Nagesh Bhat	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/rY4WDYSWktZ7QlBr2o9NT0GiInr.jpg	US
2004494	JD Allen	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/jG07WemmHOWQvYnKPSdNGioGg7A.jpg	US
93991	Soi Cheang	1972-01-05 00:00:00	https://image.tmdb.org/t/p/w500/5PKTT0o0Sbkuo2m2I9iooOALYug.jpg	CN
238001	Kirk Harris	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/jG07WemmHOWQvYnKPSdNGioGg7A.jpg	US
11401	John Woo	1946-09-22 00:00:00	https://image.tmdb.org/t/p/w500/s7sDmQq8cegHnsTmD0u2eZ4ArYZ.jpg	CN
16644	Dolph Lundgren	1957-11-03 00:00:00	https://image.tmdb.org/t/p/w500/3MqLWHnFFNGLEOQFlGrIE3rra85.jpg	SE
90609	Osgood Perkins	1974-02-02 00:00:00	https://image.tmdb.org/t/p/w500/sshAqrQ2DV2TUsgBAr1XaYqqxkm.jpg	US
5714	Carlos Saldanha	1965-01-24 00:00:00	https://image.tmdb.org/t/p/w500/oxUlCSgxKaoCRYFyS65PC2fZWrk.jpg	BR
57581	Neil Marshall	1970-05-25 00:00:00	https://image.tmdb.org/t/p/w500/niiQO8m2fEIdmEBYdawulBSIzwY.jpg	GB
1202063	Ninja Thyberg	1984-10-12 00:00:00	https://image.tmdb.org/t/p/w500/9uY75TQt9lX3mK9v3eAmChFUxaC.jpg	SE
98631	Adam Wingard	1982-10-03 00:00:00	https://image.tmdb.org/t/p/w500/csunrewJCACuvM3Ntd9kIi31twa.jpg	US
20629	George Miller	1945-03-03 00:00:00	https://image.tmdb.org/t/p/w500/pPPu5e9UDb7slbqW8Gh2dIJEvni.jpg	AU
2556462	Jian-Ping Li	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/jG07WemmHOWQvYnKPSdNGioGg7A.jpg	US
1163471	Mukunda Michael Dewil	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/jG07WemmHOWQvYnKPSdNGioGg7A.jpg	US
64151	Mike Mitchell	1970-10-18 00:00:00	https://image.tmdb.org/t/p/w500/w6ibMbbw7KBrcWxUb7N7h3GEQGO.jpg	US
586110	Jennifer Phang	1975-10-28 00:00:00	https://image.tmdb.org/t/p/w500/2Eg7Kq1rkMmaPpytHm9bdkyvLvq.jpg	US
1739102	Domingo González	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/jG07WemmHOWQvYnKPSdNGioGg7A.jpg	US
63306	James Watkins	1973-05-20 00:00:00	https://image.tmdb.org/t/p/w500/ik0bbpMrqAaaJlOYB1DbdslQHwh.jpg	GB
173667	Julian Farino	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/hxXRkhFWCdKKklvU9OJk0WSHnZC.jpg	US
11614	M. Night Shyamalan	1970-08-06 00:00:00	https://image.tmdb.org/t/p/w500/tOhFWjauKvJgjCVLJFnhbBCZuxZ.jpg	IN
7256	Lee Tamahori	1950-04-22 00:00:00	https://image.tmdb.org/t/p/w500/lkivtT9U7gLXVnhq5qF9GL3k7NN.jpg	NZ
20019	Lee Daniels	1959-12-24 00:00:00	https://image.tmdb.org/t/p/w500/6boIrLokvene1qlhvb4wiKB5Ikd.jpg	US
2036	Alex Garland	1970-05-26 00:00:00	https://image.tmdb.org/t/p/w500/qSWzYnDw68xm4i5xprH9BwQ6q25.jpg	GB
124279	Brandon Vietti	1974-03-08 00:00:00	https://image.tmdb.org/t/p/w500/3aQCKuGIGzs7yJiD3z12EatL7P8.jpg	US
1673449	Louisa Warren	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/pZJVNjkW7nGTwxQXxelaFezxo97.jpg	US
3033204	Scott Leaver	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/jG07WemmHOWQvYnKPSdNGioGg7A.jpg	US
1551545	Steven Caple Jr.	1988-01-01 00:00:00	https://image.tmdb.org/t/p/w500/aU8p958QyhfV2jurc3L5pn7sN6L.jpg	US
10965	Chris Columbus	1958-09-10 00:00:00	https://image.tmdb.org/t/p/w500/yCyEz90NqjEXKZ7HYcEhDXlLlPc.jpg	US
116805	Paul Feig	1962-09-17 00:00:00	https://image.tmdb.org/t/p/w500/lcD0BkGKWKynUwtPSEDLAsFdIJX.jpg	US
2050340	Justin Lee	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/3F0X6pHEGkplqPBfyazWUUrCKtk.jpg	US
57130	Todd Phillips	1970-12-20 00:00:00	https://image.tmdb.org/t/p/w500/A6FPht87DiqXzp456WjakLi2AtP.jpg	US
41355	Dimitri Logothetis	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/c1sLBTi3hvPouSj6tRnHsjstRmU.jpg	GR
1092607	Benjamin Renner	1983-11-14 00:00:00	https://image.tmdb.org/t/p/w500/yp4ucXRYU5TdMj16glyoYYoxJcw.jpg	FR
55789	Tate Taylor	1969-06-03 00:00:00	https://image.tmdb.org/t/p/w500/iupMPA0UwdFAO66fjlsHF1iZlT5.jpg	US
1211636	James Cullen Bressack	1992-02-29 00:00:00	https://image.tmdb.org/t/p/w500/1s89cGaLByNuIyEyZG7rmFmSv0J.jpg	US
1321076	Naoyuki Ito	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/jG07WemmHOWQvYnKPSdNGioGg7A.jpg	US
1040955	Valeri Milev	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/jG07WemmHOWQvYnKPSdNGioGg7A.jpg	US
36425	McG	1968-08-09 00:00:00	https://image.tmdb.org/t/p/w500/sEcoHVCqc2IrJkxgixGHrDytsyd.jpg	US
1083154	Cameron Cairnes	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/uipeyReF5kffUt0jDVwa6atDVBh.jpg	AU
1565301	Thomas Astruc	1975-01-18 00:00:00	https://image.tmdb.org/t/p/w500/jG07WemmHOWQvYnKPSdNGioGg7A.jpg	FR
592581	Andre Sigwalt	1978-06-25 00:00:00	https://image.tmdb.org/t/p/w500/df7a8FkBJi4r3UURVlEaDDoklMd.jpg	BR
3567018	Ben J. Williams	1998-04-01 00:00:00	https://image.tmdb.org/t/p/w500/ps6qMvKS8FVNJPybSnEPg4qH4LZ.jpg	US
940376	Kelly Marcel	1974-01-10 00:00:00	https://image.tmdb.org/t/p/w500/thpdVW7O1975GcA3eNs1H8UIlmd.jpg	GB
1697556	Bolanle Austen-Peters	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/jG07WemmHOWQvYnKPSdNGioGg7A.jpg	US
12890	Pete Docter	1968-10-09 00:00:00	https://image.tmdb.org/t/p/w500/xz46mHzo8apkVMxmrkMQvqakOL0.jpg	US
1137903	Sam Taylor-Johnson	1967-03-04 00:00:00	https://image.tmdb.org/t/p/w500/4iWEBM7B4nANVZcRaID9XHo4tPl.jpg	GB
2927725	Jeff Wamester	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/uDLvW3b21oINAA5BJiWMf85cDCP.jpg	US
1719706	Aaron Horvath	1980-08-19 00:00:00	https://image.tmdb.org/t/p/w500/6AOmWzdJas3xh0xJOk1mHPstNs2.jpg	US
57646	Henry Selick	1952-11-30 00:00:00	https://image.tmdb.org/t/p/w500/2LvtcpV8njWrp2W9eXmTNjsAWev.jpg	US
18865	Louis Leterrier	1973-06-17 00:00:00	https://image.tmdb.org/t/p/w500/bpqqRRyCLeoAup2OAv1Dtm5C8Tn.jpg	FR
137427	Denis Villeneuve	1967-10-03 00:00:00	https://image.tmdb.org/t/p/w500/zdDx9Xs93UIrJFWYApYR28J8M6b.jpg	CA
93364	Jeff Fowler	1978-07-27 00:00:00	https://image.tmdb.org/t/p/w500/wExdubFgeBkEUP8MojKPKoOcgdZ.jpg	US
40644	Chad Stahelski	1968-09-20 00:00:00	https://image.tmdb.org/t/p/w500/eRCryGwKDH4XqUlrdkERmeBWPo8.jpg	US
51023	Marcus Dunstan	1975-09-19 00:00:00	https://image.tmdb.org/t/p/w500/rGJBPAG8lpkmr0COUNNSK6nnk.jpg	US
19272	Joe Russo	1971-07-18 00:00:00	https://image.tmdb.org/t/p/w500/o0OXjFzL10jCy89iAs7UzzSbyoK.jpg	US
18184	Xavier Gens	1975-04-27 00:00:00	https://image.tmdb.org/t/p/w500/zZ2ZtJeBq0yXB1Z5hSztarGt1yN.jpg	FR
93151	Joshua John Miller	1974-12-26 00:00:00	https://image.tmdb.org/t/p/w500/8OjkRkXUJemmvP3BgSwcg2iupQ5.jpg	US
2253977	Ty Roberts	1974-05-31 00:00:00	https://image.tmdb.org/t/p/w500/qKNvKYGOJOb0W7XlRLapZJQEBm.jpg	US
58421	Christopher Jenkins	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/vAP7L1vMOhm7LArXGESmL7WsPD.jpg	US
1450348	Joel Crawford	1970-01-01 00:00:00	https://image.tmdb.org/t/p/w500/3F60mZB4sGgB51jAIglwn6OrUgB.jpg	US
11218	Alfonso Cuarón	1961-11-28 00:00:00	https://image.tmdb.org/t/p/w500/eoCHiXaQzGgx9RiwXnt3k239FLc.jpg	MX
70238	Chris Williams	1967-11-02 00:00:00	https://image.tmdb.org/t/p/w500/eE2NDdeKN1DC3XuV6L4xuEbVaS.jpg	US
\.


--
-- TOC entry 4995 (class 0 OID 56476)
-- Dependencies: 219
-- Data for Name: Genre; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Genre" (id, name) FROM stdin;
28	Action
12	Adventure
16	Animation
35	Comedy
80	Crime
99	Documentary
18	Drama
10751	Family
14	Fantasy
36	History
27	Horror
10402	Music
9648	Mystery
10749	Romance
878	Science Fiction
10770	TV Movie
53	Thriller
10752	War
37	Western
\.


--
-- TOC entry 5003 (class 0 OID 56512)
-- Dependencies: 227
-- Data for Name: Movie; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Movie" (id, title, synopsis, "posterUrl", "backdropUrl", "videoUrl", "releaseDate", "approvalStatus", rating, "countryCode", "directorId", "userId") FROM stdin;
957452	The Crow	Soulmates Eric and Shelly are brutally murdered when the demons of her dark past catch up with them. Given the chance to save his true love by sacrificing himself, Eric sets out to seek merciless revenge on their killers, traversing the worlds of the living and the dead to put the wrong things right.	https://image.tmdb.org/t/p/w500/58QT4cPJ2u2TqWZkterDq9q4yxQ.jpg	https://image.tmdb.org/t/p/w500/Asg2UUwipAdE87MxtJy7SQo08XI.jpg	https://www.youtube.com/watch?v=4CLE3pWAAr8	2024-08-21 00:00:00	t	5.407	US	228134	2606
533535	Deadpool & Wolverine	A listless Wade Wilson toils away in civilian life with his days as the morally flexible mercenary, Deadpool, behind him. But when his homeworld faces an existential threat, Wade must reluctantly suit-up again with an even more reluctant Wolverine.	https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg	https://image.tmdb.org/t/p/w500/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg	https://www.youtube.com/watch?v=Idh8n5XuYIA	2024-07-24 00:00:00	t	7.671	US	17825	2606
1079091	It Ends with Us	When a woman's first love suddenly reenters her life, her relationship with a charming, but abusive neurosurgeon is upended, and she realizes she must learn to rely on her own strength to make an impossible choice for her future.	https://image.tmdb.org/t/p/w500/cSMdFWmajaX4oUMLx7HEDI84GkP.jpg	https://image.tmdb.org/t/p/w500/4TcpeInvAkxXlVWgoX9izD1cndY.jpg	https://www.youtube.com/watch?v=r-GQvSc5ZGw	2024-08-07 00:00:00	t	6.884	US	88675	2606
1022789	Inside Out 2	Teenager Riley's mind headquarters is undergoing a sudden demolition to make room for something entirely unexpected: new Emotions! Joy, Sadness, Anger, Fear and Disgust, who’ve long been running a successful operation by all accounts, aren’t sure how to feel when Anxiety shows up. And it looks like she’s not alone.	https://image.tmdb.org/t/p/w500/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg	https://image.tmdb.org/t/p/w500/dKvvW3euRwUY0Nyl6JBP5tXLPJW.jpg	https://www.youtube.com/watch?v=u69y5Ie519M	2024-06-11 00:00:00	t	7.642	US	182001	2606
519182	Despicable Me 4	Gru and Lucy and their girls—Margo, Edith and Agnes—welcome a new member to the Gru family, Gru Jr., who is intent on tormenting his dad. Gru also faces a new nemesis in Maxime Le Mal and his femme fatale girlfriend Valentina, forcing the family to go on the run.	https://image.tmdb.org/t/p/w500/wWba3TaojhK7NdycRhoQpsG0FaH.jpg	https://image.tmdb.org/t/p/w500/lgkPzcOSnTvjeMnuFzozRO5HHw1.jpg	https://www.youtube.com/watch?v=LtNYaH61dXY	2024-06-20 00:00:00	t	7.165	US	124748	2606
840705	Blink Twice	When tech billionaire Slater King meets cocktail waitress Frida at his fundraising gala, he invites her to join him and his friends on a dream vacation on his private island. But despite the epic setting, beautiful people, ever-flowing champagne, and late-night dance parties, Frida can sense that there’s something sinister hiding beneath the island’s lush façade.	https://image.tmdb.org/t/p/w500/lZGOK0I2DJSRlEPNOAFTSNxSjDD.jpg	https://image.tmdb.org/t/p/w500/dTaqzXA1auKRUjHPQjR3u0W7Gfl.jpg	https://www.youtube.com/watch?v=jmCCQ80iAf8	2024-08-21 00:00:00	t	6.691	US	37153	2606
949484	Hounds of War	After a mission goes wrong, only one of a group of mercenaries is left alive to avenge his fallen brothers.	https://image.tmdb.org/t/p/w500/lRBT73EWsiQPuqK3YS3BnBW0Zwi.jpg	https://image.tmdb.org/t/p/w500/blqiNjJefmY10Wx6y2vgJJWljJj.jpg	https://www.youtube.com/watch?v=t-WTFeTIjAA	2024-08-29 00:00:00	t	6.223	US	78108	2606
1147710	Hijack 1971	Pilots Tae-in and Gyu-sik are set to fly to Gimpo. Under the guidance of flight attendant Ok-soon, passengers are busy boarding. However, shortly after takeoff, a homemade bomb explodes, turning the cabin into chaos.	https://image.tmdb.org/t/p/w500/1ahGkWMv8Cehlf3hwCSlwJdXaej.jpg	https://image.tmdb.org/t/p/w500/1pbV8uC6EUYOYnPqWfrQFPdAj1O.jpg	https://www.youtube.com/watch?v=UxyutkXQnvA	2024-06-21 00:00:00	t	6.441	KR	3084810	2606
917496	Beetlejuice Beetlejuice	After a family tragedy, three generations of the Deetz family return home to Winter River. Still haunted by Betelgeuse, Lydia's life is turned upside down when her teenage daughter, Astrid, accidentally opens the portal to the Afterlife.	https://image.tmdb.org/t/p/w500/kKgQzkUCnQmeTPkyIwHly2t6ZFI.jpg	https://image.tmdb.org/t/p/w500/A1dZ6faTjg0e6HYftBmEKujuXGQ.jpg	https://www.youtube.com/watch?v=As-vKW4ZboU	2024-09-04 00:00:00	t	7.169	US	510	2606
365177	Borderlands	Returning to her home planet, an infamous bounty hunter forms an unexpected alliance with a team of unlikely heroes. Together, they battle monsters and dangerous bandits to protect a young girl who holds the key to unimaginable power.	https://image.tmdb.org/t/p/w500/865DntZzOdX6rLMd405R0nFkLmL.jpg	https://image.tmdb.org/t/p/w500/mKOBdgaEFguADkJhfFslY7TYxIh.jpg	https://www.youtube.com/watch?v=Icnysn53neU	2024-08-07 00:00:00	t	5.882	US	16847	2606
573435	Bad Boys: Ride or Die	After their late former Captain is framed, Lowrey and Burnett try to clear his name, only to end up on the run themselves.	https://image.tmdb.org/t/p/w500/oGythE98MYleE6mZlGs5oBGkux1.jpg	https://image.tmdb.org/t/p/w500/tncbMvfV0V07UZozXdBEq4Wu9HH.jpg	https://www.youtube.com/watch?v=uWLNl_KQCAU	2024-06-05 00:00:00	t	7.551	US	1399841	2606
933260	The Substance	A fading celebrity decides to use a black market drug, a cell-replicating substance that temporarily creates a younger, better version of herself.	https://image.tmdb.org/t/p/w500/lqoMzCcZYEFK729d6qzt349fB4o.jpg	https://image.tmdb.org/t/p/w500/7h6TqPB3ESmjuVbxCxAeB1c9OB1.jpg	https://www.youtube.com/watch?v=LNlrGhBpYjc	2024-09-07 00:00:00	t	7.179	GB	1607016	2606
1062215	Afraid	Curtis Pike and his family are selected to test a new home device: a digital assistant called AIA. AIA observes the family's behaviors and begins to anticipate their needs. And she can – and will – make sure nothing – and no one – gets in her family's way.	https://image.tmdb.org/t/p/w500/gUREuXCnJLVHsvKXDH9fgIcfM6e.jpg	https://image.tmdb.org/t/p/w500/sjC29cgm4qZAnpOJQbYKCxDCcra.jpg	https://www.youtube.com/watch?v=j2UC6QSNX44	2024-08-28 00:00:00	t	6.4	US	3288	2606
1139817	Officer Black Belt	A talented martial artist who can't walk past a person in need unites with a probation officer to fight and prevent crime as a martial arts officer.	https://image.tmdb.org/t/p/w500/rEaJSXAlNfdhRpDHiNcJsoUa9qE.jpg	https://image.tmdb.org/t/p/w500/wSZbtiFIK1fkKZdSRtn2kz2Ttfd.jpg	https://www.youtube.com/watch?v=WNkGz6aKFvk	2024-09-10 00:00:00	t	7.945	KR	1410322	2606
698687	Transformers One	The untold origin story of Optimus Prime and Megatron, better known as sworn enemies, but once were friends bonded like brothers who changed the fate of Cybertron forever.	https://image.tmdb.org/t/p/w500/qbkAqmmEIZfrCO8ZQAuIuVMlWoV.jpg	https://image.tmdb.org/t/p/w500/tAwfoDyKiYa4KQdUp3DTMrEs4En.jpg	https://www.youtube.com/watch?v=jaVcDaozGgc	2024-09-11 00:00:00	t	7	US	84496	2606
1064028	Subservience	With his wife out sick, a struggling father brings home a lifelike AI, only to have his self-aware new help want everything her new family has to offer... Like the affection of her owner and she'll kill to get it.	https://image.tmdb.org/t/p/w500/gBenxR01Uy0Ev9RTIw6dVBPoyQU.jpg	https://image.tmdb.org/t/p/w500/pysPTtYmTcQBlShcxXZwfs3Zp8H.jpg	https://www.youtube.com/watch?v=z6DLdqf0Bs0	2024-08-15 00:00:00	t	6.41	US	2263272	2606
1186947	Outlaw	At the age of nine, Rebeca is sold by her grandmother to the bookseller who ran Rocinha. Disputed by bicheiros and drug dealers, the community is going through changes in power. Rebeca becomes the wife of the chief drug dealer and, with the death of her partner, his successor. The electrifying trajectory of crime, violence, drugs and love of a female drug kingpin in Rocinha, Rio de Janeiro in the 1980s.	https://image.tmdb.org/t/p/w500/rGS8SzheANVQicNba0GCE6w1XHb.jpg	https://image.tmdb.org/t/p/w500/7cDsJInZGnNC1IFQL5kgYsZSXr3.jpg	https://www.youtube.com/watch?v=OH0EOTBWAF0	2024-06-20 00:00:00	t	6.225	BR	1327760	2606
1184918	The Wild Robot	After a shipwreck, an intelligent robot called Roz is stranded on an uninhabited island. To survive the harsh environment, Roz bonds with the island's animals and cares for an orphaned baby goose.	https://image.tmdb.org/t/p/w500/hn4fOpFlbak5ruxkdrmdijs38Yl.jpg	https://image.tmdb.org/t/p/w500/62zw627mH74rng9zc4tFfaR54KW.jpg	https://www.youtube.com/watch?v=VUCNBAmse04	2024-09-12 00:00:00	t	7.289	US	66193	2606
1012148	Chapel	A man becomes a suspect in a serial murder case after waking from a coma with no recollection of who he is.	https://image.tmdb.org/t/p/w500/94sIggRUBioP19m3vJQfV3lq6Z6.jpg	https://image.tmdb.org/t/p/w500/hZVIwxi6kK4KnpVPEWwdhG0cMM5.jpg	https://www.youtube.com/watch?v=qeJq8GKOJow	2024-01-17 00:00:00	t	6.233	US	2535336	2606
646097	Rebel Ridge	A former Marine confronts corruption in a small town when local law enforcement unjustly seizes the bag of cash he needs to post his cousin's bail.	https://image.tmdb.org/t/p/w500/xEt2GSz9z5rSVpIHMiGdtf0czyf.jpg	https://image.tmdb.org/t/p/w500/cyKH7pDFlxIXluqRyNoHHEpxSDX.jpg	https://www.youtube.com/watch?v=gF3gZicntIw	2024-08-27 00:00:00	t	7.019	US	74655	2606
831815	Saving Bikini Bottom: The Sandy Cheeks Movie	When Bikini Bottom is scooped from the ocean, scientific squirrel Sandy Cheeks and her pal SpongeBob SquarePants saddle up for Texas to save their town.	https://image.tmdb.org/t/p/w500/30YnfZdMNIV7noWLdvmcJS0cbnQ.jpg	https://image.tmdb.org/t/p/w500/hdFIdXwS8FSN2wIsuotjW1mshI0.jpg	https://www.youtube.com/watch?v=Ud6-SGnzH3k	2024-10-18 00:00:00	t	0	US	916958	2606
945961	Alien: Romulus	While scavenging the deep ends of a derelict space station, a group of young space colonizers come face to face with the most terrifying life form in the universe.	https://image.tmdb.org/t/p/w500/b33nnKl1GSFbao4l3fZDDqsMx0F.jpg	https://image.tmdb.org/t/p/w500/9SSEUrSqhljBMzRe4aBTh17rUaC.jpg	https://www.youtube.com/watch?v=x0XDEhP4MQs	2024-08-13 00:00:00	t	7.06	US	932248	2606
748783	The Garfield Movie	Garfield, the world-famous, Monday-hating, lasagna-loving indoor cat, is about to have a wild outdoor adventure! After an unexpected reunion with his long-lost father – scruffy street cat Vic – Garfield and his canine friend Odie are forced from their perfectly pampered life into joining Vic in a hilarious, high-stakes heist.	https://image.tmdb.org/t/p/w500/p6AbOJvMQhBmffd0PIv0u8ghWeY.jpg	https://image.tmdb.org/t/p/w500/1wP1phHo2CROOqzv7Azs0MT5esU.jpg	https://www.youtube.com/watch?v=yk2Ej59DnrE	2024-04-30 00:00:00	t	7.122	US	61411	2606
7451	xXx	Xander Cage is your standard adrenaline junkie with no fear and a lousy attitude. When the US Government "recruits" him to go on a mission, he's not exactly thrilled. His mission: to gather information on an organization that may just be planning the destruction of the world, led by the nihilistic Yorgi.	https://image.tmdb.org/t/p/w500/xeEw3eLeSFmJgXZzmF2Efww0q3s.jpg	https://image.tmdb.org/t/p/w500/qwK9soQmmJ7kRdjLZVXblw3g7AQ.jpg	https://www.youtube.com/watch?v=NgPdDDzVhkA	2002-08-09 00:00:00	t	5.935	US	18878	2606
1329912	Kung Fu Games	Notorious fighters are trapped in lethal martial arts games by a sadistic magnate. Armed only with their combat skills, they face brutal battles for survival in a deadly kill-or-be-killed showdown.	https://image.tmdb.org/t/p/w500/yjDdBBUEBMvyUiVohZ8T7W2IFl6.jpg	https://image.tmdb.org/t/p/w500/s6Fc6Dq55XYPL16GMoipJh8MVG4.jpg	https://www.youtube.com/watch?v=CdBe6qiM1m4	2024-08-23 00:00:00	t	6.25	US	4390792	2606
718821	Twisters	As storm season intensifies, the paths of former storm chaser Kate Carter and reckless social-media superstar Tyler Owens collide when terrifying phenomena never seen before are unleashed. The pair and their competing teams find themselves squarely in the paths of multiple storm systems converging over central Oklahoma in the fight of their lives.	https://image.tmdb.org/t/p/w500/pjnD08FlMAIXsfOLKQbvmO0f0MD.jpg	https://image.tmdb.org/t/p/w500/7aPrv2HFssWcOtpig5G3HEVk3uS.jpg	https://www.youtube.com/watch?v=AZbEi95SuMg	2024-07-10 00:00:00	t	6.978	US	931952	2606
869291	Cuckoo	After reluctantly moving to the German Alps with her father and his new family, Gretchen discovers that their new town hides sinister secrets, as she's plagued by strange noises and frightening visions of a woman pursuing her.	https://image.tmdb.org/t/p/w500/mpryn3TuSPNG5ELRxyrKfblxJ9R.jpg	https://image.tmdb.org/t/p/w500/ndZ0rmPqY8AtXLdvF14hjBhkuDj.jpg	https://www.youtube.com/watch?v=yufRFEtup6w	2024-08-02 00:00:00	t	5.53	US	1503538	2606
1134424	Mantra Warrior: The Legend of The Eight Moons	A story inspired by the original RAMAYANA, retold in a futuristic universe, involving brave warriors who possess ancient powers from another dimension.	https://image.tmdb.org/t/p/w500/sQE0VegwDa0GHjawfNRr1sFgVE2.jpg	https://image.tmdb.org/t/p/w500/2wrdcWrAN53Pl7ahBWMIKMzXBFF.jpg	https://www.youtube.com/watch?v=UW5P7QkYLqY	2023-10-11 00:00:00	t	6.48	TH	2014826	2606
762441	A Quiet Place: Day One	As New York City is invaded by alien creatures who hunt by sound, a woman named Sam fights to survive with her cat.	https://image.tmdb.org/t/p/w500/hU42CRk14JuPEdqZG3AWmagiPAP.jpg	https://image.tmdb.org/t/p/w500/2RVcJbWFmICRDsVxRI8F5xRmRsK.jpg	https://www.youtube.com/watch?v=E-WIb4ATfT8	2024-06-26 00:00:00	t	6.8	US	2580328	2606
653346	Kingdom of the Planet of the Apes	Several generations following Caesar's reign, apes – now the dominant species – live harmoniously while humans have been reduced to living in the shadows. As a new tyrannical ape leader builds his empire, one young ape undertakes a harrowing journey that will cause him to question all he's known about the past and to make choices that will define a future for apes and humans alike.	https://image.tmdb.org/t/p/w500/gKkl37BQuKTanygYQG1pyYgLVgf.jpg	https://image.tmdb.org/t/p/w500/pqRAPgjdaVv5f0rerkrTyTS9jGh.jpg	https://www.youtube.com/watch?v=Tg1FesR8X90	2024-05-08 00:00:00	t	7.133	US	1179066	2606
1091267	The Well	A young restorer travels to a small village to restore a medieval painting to its former glory. She will put her life in danger due to a curse attached to the painting.	https://image.tmdb.org/t/p/w500/zK1X5T7gAdXxLFhj0hYyCTVrvpU.jpg	https://image.tmdb.org/t/p/w500/8vqmXMXsDVSkw6w3asP4Ie8JlSl.jpg	https://www.youtube.com/watch?v=ECRaLzfqQhg	2024-08-01 00:00:00	t	6	IT	118581	2606
1160018	Kill	When an army commando finds out his true love is engaged against her will, he boards a New Dehli-bound train in a daring quest to derail the arranged marriage. But when a gang of knife-wielding thieves begin to terrorize innocent passengers on his train, the commando takes them on himself in a death-defying kill-spree to save those around him — turning what should have been a typical commute into an adrenaline-fueled thrill ride.	https://image.tmdb.org/t/p/w500/m2zXTuNPkywdYLyWlVyJZW2QOJH.jpg	https://image.tmdb.org/t/p/w500/okVLmXL5y18dfN2R4ufMZEGaeCd.jpg	https://www.youtube.com/watch?v=da7lKeeS67c	2024-07-03 00:00:00	t	7.138	IN	2119237	2606
1201734	God of Pain	A man wakes up in the middle of the street with no idea where he is or how he ended up there. Soon he is forced to confront the demons he is battling within before a gateway to the underworld unlocks the secret of Algea the God of Pain.	https://image.tmdb.org/t/p/w500/dF0FAFCfILaor5RBqdNHq24OaIn.jpg	https://image.tmdb.org/t/p/w500/kXPCUNo7ALN0S03AbmTY9Ln6Fbc.jpg	https://www.youtube.com/watch?v=O7OH-cTfpsk	2024-08-20 00:00:00	t	8	US	2004494	2606
923667	Twilight of the Warriors: Walled In	In 1980s Hong Kong, troubled youth Chan Lok-kwun accidentally enters the notorious Kowloon Walled City. Lok-kwun, a refugee from the mainland, struggles to survive by participating in underground fighting rings. He seeks to buy a fake ID to improve his life but is betrayed by Mr. Big, a local crime syndicate boss. In a desperate move, Lok-kwun steals drugs from Mr. Big and flees to the Walled City, where he encounters Cyclone, the local crime lord who rules the area with a mix of authority and compassion.	https://image.tmdb.org/t/p/w500/PywbVPeIhBFc33QXktnhMaysmL.jpg	https://image.tmdb.org/t/p/w500/9juRmk8QjcsUcbrevVu5t8VZy5G.jpg	https://www.youtube.com/watch?v=4kBU6Rff26A	2024-04-23 00:00:00	t	6.566	CN	93991	2606
966576	The Quest for Tom Sawyer's Gold	Agatha Armstrong and her trusty sidekick Mrs. Mac were once the world’s most daring adventurers. But when her son Ant came along, everything quickly changed and her devil-may-care ways took a backseat to being over-protective and terrified of anything that posed a risk to her family.	https://image.tmdb.org/t/p/w500/zceLrHeYOgJHw1tw6MUi15N2NUz.jpg	https://image.tmdb.org/t/p/w500/wQ60FXOHnVimJo6Bpdk6VU0qaP6.jpg	https://www.youtube.com/watch?v=EqjWKr8c-Bo	2023-06-22 00:00:00	t	4.65	US	238001	2606
970347	The Killer	Zee is a feared contract killer known as "the Queen of the Dead," but when she refuses to murder a young blind woman, she finds herself hunted both by criminal colleagues and a determined police detective.	https://image.tmdb.org/t/p/w500/6PCnxKZZIVRanWb710pNpYVkCSw.jpg	https://image.tmdb.org/t/p/w500/tCQfubckzzcuCbsGugkpLhfjS5z.jpg	https://www.youtube.com/watch?v=zgNOS5ofQhw	2024-08-22 00:00:00	t	6.619	US	11401	2606
666035	Wanted Man	Follows a police officer who must retrieve an eyewitness and escort her after a cartel shooting leaves several DEA agents dead, but then he must decide who to trust when they discover that the attack was executed by American forces.	https://image.tmdb.org/t/p/w500/pmdgdb8biQLLzTjySZLPdK13KwM.jpg	https://image.tmdb.org/t/p/w500/ahYDVW0ReOTKI6sbI6du9SoXdX9.jpg	https://www.youtube.com/watch?v=FVHTquAjKdQ	2024-04-01 00:00:00	t	7.055	US	16644	2606
1226578	Longlegs	FBI Agent Lee Harker is assigned to an unsolved serial killer case that takes an unexpected turn, revealing evidence of the occult. Harker discovers a personal connection to the killer and must stop him before he strikes again.	https://image.tmdb.org/t/p/w500/5aj8vVGFwGVbQQs26ywhg4Zxk2L.jpg	https://image.tmdb.org/t/p/w500/bizhlTVjifYQUu4Xrdt7m3TYr7d.jpg	https://www.youtube.com/watch?v=FXOtkvx25gI	2024-05-31 00:00:00	t	6.7	US	90609	2606
826510	Harold and the Purple Crayon	Inside of his book, adventurous Harold can make anything come to life simply by drawing it. After he grows up and draws himself off the book's pages and into the physical world, Harold finds he has a lot to learn about real life.	https://image.tmdb.org/t/p/w500/dEsuQOZwdaFAVL26RjgjwGl9j7m.jpg	https://image.tmdb.org/t/p/w500/vJk9DOLgP23jO5mBnPHE93MFgYu.jpg	https://www.youtube.com/watch?v=-itXhXgatsI	2024-07-31 00:00:00	t	7.045	US	5714	2606
1005076	Duchess	A tough, working-class petty criminal is drawn into the treacherous world of diamond smuggling and morphs into an anti-heroine to be reckoned with in the murky underworld.	https://image.tmdb.org/t/p/w500/5TR7JlJbKucNSq84rkbnjLd1JB5.jpg	https://image.tmdb.org/t/p/w500/aTzpE6136X7Rpx9RtZIDcsjduy0.jpg	https://www.youtube.com/watch?v=Z65PPdXhmn4	2024-08-01 00:00:00	t	6.5	GB	57581	2606
592695	Pleasure	19 year old Linnéa leaves her small town in Sweden and heads for Los Angeles with the aim of becoming the world's next big porn star, but the road to her goal turns out to be bumpier than she imagined.	https://image.tmdb.org/t/p/w500/7Z2K08J0WantJHNa0vLTOmii41l.jpg	https://image.tmdb.org/t/p/w500/AjykZQ9ncgyJoHpMTquDRUAv5VO.jpg	https://www.youtube.com/watch?v=knFkVoNPRHE	2021-10-08 00:00:00	t	6.238	SE	1202063	2606
823464	Godzilla x Kong: The New Empire	Following their explosive showdown, Godzilla and Kong must reunite against a colossal undiscovered threat hidden within our world, challenging their very existence – and our own.	https://image.tmdb.org/t/p/w500/z1p34vh7dEOnLDmyCrlUVLuoDzd.jpg	https://image.tmdb.org/t/p/w500/veIyxxi5Gs8gvztLEW1Ysb8rrzs.jpg	https://www.youtube.com/watch?v=m2u6RfmTXt0	2024-03-27 00:00:00	t	7.163	US	98631	2606
786892	Furiosa: A Mad Max Saga	As the world fell, young Furiosa is snatched from the Green Place of Many Mothers and falls into the hands of a great Biker Horde led by the Warlord Dementus. Sweeping through the Wasteland they come across the Citadel presided over by The Immortan Joe. While the two Tyrants war for dominance, Furiosa must survive many trials as she puts together the means to find her way home.	https://image.tmdb.org/t/p/w500/iADOJ8Zymht2JPMoy3R7xceZprc.jpg	https://image.tmdb.org/t/p/w500/wNAhuOZ3Zf84jCIlrcI6JhgmY5q.jpg	https://www.youtube.com/watch?v=LYV3001u574	2024-05-22 00:00:00	t	7.559	AU	20629	2606
588648	Dragonkeeper	Set in Han Imperial China, the plot follows the adventures of enslaved girl Ping with ancient dragon Long Danzi. Dragons had been banished from the kingdom. Ping, an orphan, finds one of the last remaining dragon eggs. Palace guards force Ping to run away in order to return the dragon egg to the ocean and save all dragons from extinction. Ping discovers that she is a true Dragonkeeper.	https://image.tmdb.org/t/p/w500/ggZGnJLzO3BTu7ysuuIzou3Oex5.jpg	https://image.tmdb.org/t/p/w500/h9YlRHAZWOWtGonllmj6JJg1FrE.jpg	https://www.youtube.com/watch?v=p39fu7weGBQ	2024-04-11 00:00:00	t	7.259	CN	2556462	2606
1129598	Prey	A young couple is compelled to leave their Christian missionary station in the Kalahari Desert after being threatened with death by an extremist militant gang. After crashing their aircraft they must battle man and beast for their lives.	https://image.tmdb.org/t/p/w500/aOsPclgSiOqhndI2Xp2ksz2g9n6.jpg	https://image.tmdb.org/t/p/w500/n3JeGELHa9V6k9mL81ItMxWLSS6.jpg	https://www.youtube.com/watch?v=7KduJUygxKE	2024-03-15 00:00:00	t	6.317	US	1163471	2606
1115396	Hunting Games	When a group of ex-military members is hired to retrieve a lost bag of stolen money, their mission becomes more difficult after a lone hunter finds the bag first.	https://image.tmdb.org/t/p/w500/xVbEJzdMxIQqpuLgla0hU8qr9mt.jpg	https://image.tmdb.org/t/p/w500/x2thJwMJ6oGlhn7UC4vSwHltEw0.jpg	https://www.youtube.com/watch?v=ZCa7T1LdHH4	2023-05-12 00:00:00	t	4.107	US	2050340	2606
1011985	Kung Fu Panda 4	Po is gearing up to become the spiritual leader of his Valley of Peace, but also needs someone to take his place as Dragon Warrior. As such, he will train a new kung fu practitioner for the spot and will encounter a villain called the Chameleon who conjures villains from the past.	https://image.tmdb.org/t/p/w500/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg	https://image.tmdb.org/t/p/w500/4z88bpDf7aqZcYkLDDEIdj8TfZU.jpg	https://www.youtube.com/watch?v=d2OONzqh2jk	2024-03-02 00:00:00	t	7.097	US	64151	2606
974262	Descendants: The Rise of Red	After the Queen of Hearts incites a coup on Auradon, her rebellious daughter Red and Cinderella's perfectionist daughter Chloe join forces and travel back in time to try to undo the traumatic event that set Red's mother down her villainous path.	https://image.tmdb.org/t/p/w500/8fYluTtB3b3HKO7KQa5tzrvGaps.jpg	https://image.tmdb.org/t/p/w500/dn3gbDpXPSwC6saMJOHkCiFA9jn.jpg	https://www.youtube.com/watch?v=zx0uffR2gSA	2024-07-11 00:00:00	t	6.963	US	586110	2606
1010581	My Fault	Noah must leave her city, boyfriend, and friends to move into William Leister's mansion, the flashy and wealthy husband of her mother Rafaela. As a proud and independent 17 year old, Noah resists living in a mansion surrounded by luxury. However, it is there where she meets Nick, her new stepbrother, and the clash of their strong personalities becomes evident from the very beginning.	https://image.tmdb.org/t/p/w500/w46Vw536HwNnEzOa7J24YH9DPRS.jpg	https://image.tmdb.org/t/p/w500/lntyt4OVDbcxA1l7LtwITbrD3FI.jpg	https://www.youtube.com/watch?v=xY-qRGC6Yu0	2023-06-08 00:00:00	t	7.924	ES	1739102	2606
1114513	Speak No Evil	When an American family is invited to spend the weekend at the idyllic country estate of a charming British family they befriended on vacation, what begins as a dream holiday soon warps into a snarled psychological nightmare.	https://image.tmdb.org/t/p/w500/t01TUL5X2oBNF0qjjgS4BXaWplJ.jpg	https://image.tmdb.org/t/p/w500/jnrLpUtOKelKhmGieEBcAvrsrFB.jpg	https://www.youtube.com/watch?v=iSIuxrjTMk0	2024-09-11 00:00:00	t	6.935	US	63306	2606
704239	The Union	A New Jersey construction worker goes from regular guy to aspiring spy when his long-lost high school sweetheart recruits him for an espionage mission.	https://image.tmdb.org/t/p/w500/d9CTnTHip1RbVi2OQbA2LJJQAGI.jpg	https://image.tmdb.org/t/p/w500/4ft6TR9wA6bra0RLL6G7JFDQ5t1.jpg	https://www.youtube.com/watch?v=vea9SdnRMyg	2024-08-15 00:00:00	t	6.277	US	173667	2606
1032823	Trap	A father and teen daughter attend a pop concert, where they realize they're at the center of a dark and sinister event.	https://image.tmdb.org/t/p/w500/jwoaKYVqPgYemFpaANL941EF94R.jpg	https://image.tmdb.org/t/p/w500/p5kpFS0P3lIwzwzHBOULQovNWyj.jpg	https://www.youtube.com/watch?v=mps1HbpECIA	2024-07-31 00:00:00	t	6.509	US	11614	2606
1066262	The Convert	Munro, a soldier turned lay preacher, comes to New Zealand to minister to the first British colonists, but he is converted by the powerful chief Maianui to serve a different purpose.	https://image.tmdb.org/t/p/w500/e5ZqqPlhKstzB4geibpZh38w7Pq.jpg	https://image.tmdb.org/t/p/w500/3EIYw4aJImgsvJsb0ybhOzLk6J3.jpg	https://www.youtube.com/watch?v=6NQkoW7hwi8	2024-03-14 00:00:00	t	6.104	AU	7256	2606
930600	The Deliverance	Ebony Jackson, a struggling single mother fighting her personal demons, moves her family into a new home for a fresh start. But when strange occurrences inside the home raise the suspicions of Child Protective Services and threaten to tear the family apart, Ebony soon finds herself locked in a battle for her life and the souls of her children.	https://image.tmdb.org/t/p/w500/og1FteMFRInoQnlZeWqEn8XpXHh.jpg	https://image.tmdb.org/t/p/w500/qkEnklEGDFy4TRVhuHFn2DI2BP6.jpg	https://www.youtube.com/watch?v=PDcDagDcwPA	2024-08-16 00:00:00	t	6.246	US	20019	2606
929590	Civil War	In the near future, a group of war journalists attempt to survive while reporting the truth as the United States stands on the brink of civil war.	https://image.tmdb.org/t/p/w500/sh7Rg8Er3tFcN9BpKIPOMvALgZd.jpg	https://image.tmdb.org/t/p/w500/en3GU5uGkKaYmSyetHV4csHHiH3.jpg	https://www.youtube.com/watch?v=c2G18nIVpNE	2024-04-10 00:00:00	t	6.932	GB	2036	2606
1155058	Watchmen: Chapter I	In 1985, the murder of a government-sponsored superhero draws his outlawed colleagues out of retirement and into a mystery that threatens to upend their personal lives and the world itself.	https://image.tmdb.org/t/p/w500/tE2vZ6HdlmKaBh0wpsvHCf7HJKo.jpg	https://image.tmdb.org/t/p/w500/4cazJU7Jjb5EukxmT7XRCoO9VnV.jpg	https://www.youtube.com/watch?v=j-s-cxTnH2Q	2024-08-12 00:00:00	t	7.639	US	124279	2606
1130053	Cinderella's Curse	Desperate Cinderella summons her fairy godmother from an ancient flesh-bound book, seeking revenge on her evil stepmother and stepsisters who abuse and torment her daily.	https://image.tmdb.org/t/p/w500/xegGyjYdCcF9X1FWpfw1O1LcFnZ.jpg	https://image.tmdb.org/t/p/w500/orTQxcx2aoNpx1DIKTjBzpzvzd0.jpg	https://www.youtube.com/watch?v=U25gTUIkLoM	2024-05-31 00:00:00	t	5.022	GB	1673449	2606
1051560	The Devil Comes at Night	A washed up boxer searching for his inheritance must fight for his life when he is trapped in his deceased father's farmhouse by a local cannibal cult.	https://image.tmdb.org/t/p/w500/6QIeZuKirT4cXVpW7ilVZmcRmdK.jpg	https://image.tmdb.org/t/p/w500/aGQIIKpAPYNtziFrCCBBgIzmUXe.jpg	https://www.youtube.com/watch?v=uXXtZgTb6xQ	2023-06-06 00:00:00	t	6.923	US	3033204	2606
667538	Transformers: Rise of the Beasts	When a new threat capable of destroying the entire planet emerges, Optimus Prime and the Autobots must team up with a powerful faction known as the Maximals. With the fate of humanity hanging in the balance, humans Noah and Elena will do whatever it takes to help the Transformers as they engage in the ultimate battle to save Earth.	https://image.tmdb.org/t/p/w500/gPbM0MK8CP8A174rmUwGsADNYKD.jpg	https://image.tmdb.org/t/p/w500/2vFuG6bWGyQUzYS9d69E5l85nIz.jpg	https://www.youtube.com/watch?v=ZtuFgnxQMrA	2023-06-06 00:00:00	t	7.305	US	1551545	2606
1094138	Jackpot!	In the near future, a 'Grand Lottery' has been established - the catch: kill the winner before sundown to legally claim their multi-billion dollar jackpot. When Katie Kim mistakenly finds herself with the winning ticket, she reluctantly joins forces with amateur lottery protection agent Noel Cassidy who must get her to sundown in exchange for a piece of her prize.	https://image.tmdb.org/t/p/w500/fOsamTFIyGxjw1jLSKdZYxQBJOT.jpg	https://image.tmdb.org/t/p/w500/diVcZzeebNQuT4wKiflNP76VcsY.jpg	https://www.youtube.com/watch?v=IW7pIYtpp50	2024-08-13 00:00:00	t	6.423	US	116805	2606
889737	Joker: Folie à Deux	While struggling with his dual identity, Arthur Fleck not only stumbles upon true love, but also finds the music that's always been inside him.	https://image.tmdb.org/t/p/w500/uxNG9xZ1ZWXr6K9V3X8n4ysonSP.jpg	https://image.tmdb.org/t/p/w500/AVWlQpVhpudyFsSh3OQIieHHYf.jpg	https://www.youtube.com/watch?v=fiqqAI0e4Nc	2024-10-01 00:00:00	t	6.6	US	57130	2606
940551	Migration	After a migrating duck family alights on their pond with thrilling tales of far-flung places, the Mallard family embarks on a family road trip, from New England, to New York City, to tropical Jamaica.	https://image.tmdb.org/t/p/w500/ldfCF9RhR40mppkzmftxapaHeTo.jpg	https://image.tmdb.org/t/p/w500/2KGxQFV9Wp1MshPBf8BuqWUgVAz.jpg	https://www.youtube.com/watch?v=hWbfohXIdEU	2023-12-06 00:00:00	t	7.446	US	1092607	2606
50014	The Help	Aibileen Clark is a middle-aged African-American maid who has spent her life raising white children and has recently lost her only son; Minny Jackson is an African-American maid who has often offended her employers despite her family's struggles with money and her desperate need for jobs; and Eugenia "Skeeter" Phelan is a young white woman who has recently moved back home after graduating college to find out her childhood maid has mysteriously disappeared. These three stories intertwine to explain how life in Jackson, Mississippi revolves around "the help"; yet they are always kept at a certain distance because of racial lines.	https://image.tmdb.org/t/p/w500/7XLSwxpfpPoJyTdJVot6a42TS2V.jpg	https://image.tmdb.org/t/p/w500/wyvUmyzqGOBDyqLHRSukGDjI7bH.jpg	https://www.youtube.com/watch?v=3eajzW3XW7Q	2011-08-09 00:00:00	t	8.212	US	55789	2606
1049574	Darkness of Man	Russell Hatch, an Interpol operative who takes on the role of father figure to Jayden, the son of an informant killed in a routine raid gone wrong. Years later, Hatch finds himself protecting Jayden and his grandfather from a group of merciless gangs in an all-out turf war, stopping at nothing to protect Jayden and fight anyone getting in his way.	https://image.tmdb.org/t/p/w500/zgZ05k3m1XePSi5nJ0ZKQo5AXWY.jpg	https://image.tmdb.org/t/p/w500/rSRA1p4e3laAAJflzdgtqNlx27Y.jpg	https://www.youtube.com/watch?v=HRKegxOLrOM	2024-05-07 00:00:00	t	6.689	US	1211636	2606
1014505	OVERLORD: The Sacred Kingdom	After twelve years of playing his favorite MMORPG game, Momonga logs in for the last time only to find himself transported into its world playing it indefinitely. Throughout his adventures, his avatar ascends to the title of Sorcerer King Ains Ooal Gown. Once prosperous but now on the brink of ruin, The Sacred Kingdom enjoyed years of peace after construction of an enormous wall protecting them from neighboring invasions. But, one day this comes to an end when the Demon Emperor Jaldabaoth arrives with an army of villainous demi-humans. Fearing invasion of their own lands, the neighboring territory of the Slane Theocracy is forced to beg their enemies at the Sorcerer Kingdom for help. Heeding the call, Momonga, now known as the Sorcerer King Ains Ooal Gown, rallies the Sorcerer Kingdom and its undead army to join the fight alongside the Sacred Kingdom and the Slane Theocracy in hopes to defeat the Demon Emperor.	https://image.tmdb.org/t/p/w500/fggkIB6oeVi5Mpwl0fALLVevAFN.jpg	https://image.tmdb.org/t/p/w500/hkJhGayONXn96CqIRM9GhWKnlCf.jpg	https://www.youtube.com/watch?v=gg5uZ56VmAo	2024-09-20 00:00:00	t	10	JP	1321076	2606
1215162	Kill 'em All 2	Phillip and Suzanne are retired from the spy game, living peacefully off the grid. That's until their whereabout are discovered by Vlad the vengeful brother of their target from the first film.	https://image.tmdb.org/t/p/w500/wCESzMHGkQoVTUNCpH72zuIewWH.jpg	https://image.tmdb.org/t/p/w500/wh1IhMWkW7u5c5bkzSGFylF9G8r.jpg	https://www.youtube.com/watch?v=LrZ9L2K23cw	2024-09-24 00:00:00	t	6.983	US	1040955	2606
748167	Uglies	In a futuristic dystopia with enforced beauty standards, a teen awaiting mandatory cosmetic surgery embarks on a journey to find her missing friend.	https://image.tmdb.org/t/p/w500/jaUu9zHtbcFwrB5Y1DNYE09HMex.jpg	https://image.tmdb.org/t/p/w500/y4NzXdvpJdwRmsnOT7HdkmHh6Yn.jpg	https://www.youtube.com/watch?v=OhcOHkgTrQQ	2024-09-12 00:00:00	t	6.05	US	36425	2606
938614	Late Night with the Devil	A live broadcast of a late-night talk show in 1977 goes horribly wrong, unleashing evil into the nation's living rooms.	https://image.tmdb.org/t/p/w500/mu8LRWT9GHkfiyHm7kgxT6YNvMW.jpg	https://image.tmdb.org/t/p/w500/4yrOyO3N55XazHQXXYoqiiPQd40.jpg	https://www.youtube.com/watch?v=YeKYfneOH3o	2024-03-19 00:00:00	t	7.312	US	1083154	2606
1147400	Miraculous World: Paris, Tales of Shadybug and Claw Noir	Miraculous holders from another world appear in Paris. They come from a parallel universe where everything is reversed: the holders of Ladybug and Black Cat Miraculouses, Shadybug and Claw Noir, are the bad guys, and the holder of the Butterfly Miraculous, Hesperia, is a superhero. Ladybug and Cat Noir will have to help Hesperia counter the attacks of their evil doubles and prevent them from seizing the Butterfly's Miraculous. Can our heroes also help Hesperia make Shadybug and Claw Noir better people?	https://image.tmdb.org/t/p/w500/7Md3nuV0ZprBTnkdR3OrUCEsrSP.jpg	https://image.tmdb.org/t/p/w500/hU1Q9YVzdYhokr8a9gLywnSUMlN.jpg	https://www.youtube.com/watch?v=mqnwoB1xQtU	2023-10-21 00:00:00	t	7.262	FR	1565301	2606
950526	The Smoke Master	The journey of Gabriel and Daniel, two brothers cursed by the Chinese mafia with its feared Three Generations Revenge, who have already reaped the life of their grandfather and their father. To survive, one of the brothers must learn the Smoke Style secrets, a little known Cannabis martial art, taught by a single master, high up in the mountains.	https://image.tmdb.org/t/p/w500/mg6YkwftQOJjpT2ygYlCi11LWeC.jpg	https://image.tmdb.org/t/p/w500/kwzNUM4yZ26XuNAPSyaWwJeWRP4.jpg	https://www.youtube.com/watch?v=FY_YSVWJdhQ	2023-05-18 00:00:00	t	7.463	BR	592581	2606
1140168	Freddy's Fridays	A detective begins to investigate a series of mysterious murders that are connected to a demonic book that brings dolls to life. As the body count begins to rise, the detective soon learns the curse of the demonic Friday and must find a way to stop it before any others disappear.	https://image.tmdb.org/t/p/w500/8smsOtjp8FbBgL8YKrgCADJWEhe.jpg	https://image.tmdb.org/t/p/w500/8AGwtYlvrZWEPo9zQthVd68zxNO.jpg	https://www.youtube.com/watch?v=hOqdJBgPCnQ	2023-10-13 00:00:00	t	3.8	GB	3567018	2606
912649	Venom: The Last Dance	Eddie and Venom are on the run. Hunted by both of their worlds and with the net closing in, the duo are forced into a devastating decision that will bring the curtains down on Venom and Eddie's last dance.	https://image.tmdb.org/t/p/w500/aosm8NMQ3UyoBVpSxyimorCQykC.jpg	https://image.tmdb.org/t/p/w500/3V4kLQg0kSqPLctI5ziYWabAZYF.jpg	https://www.youtube.com/watch?v=FKBN1qAzW3s	2024-10-23 00:00:00	t	0	US	940376	2606
1311550	House of Ga'a	At the height of the Oyo Empire, the ferocious Bashorun Ga'a became more powerful than the kings he enthroned, only to be undone by his own blood.	https://image.tmdb.org/t/p/w500/6yK9hmS641NMwRkR1wWAALWI34t.jpg	https://image.tmdb.org/t/p/w500/c3rwwFFVbkyEI6wPtpPd9lvovPW.jpg	https://www.youtube.com/watch?v=I6uNj0Zlak8	2024-07-26 00:00:00	t	5.929	NG	1697556	2606
150540	Inside Out	When 11-year-old Riley moves to a new city, her Emotions team up to help her through the transition. Joy, Fear, Anger, Disgust and Sadness work together, but when Joy and Sadness get lost, they must journey through unfamiliar places to get back home.	https://image.tmdb.org/t/p/w500/2H1TmgdfNtsKlU9jKdeNyYL5y8T.jpg	https://image.tmdb.org/t/p/w500/j29ekbcLpBvxnGk6LjdTc2EI5SA.jpg	https://www.youtube.com/watch?v=1HFv47QHWJU	2015-06-17 00:00:00	t	7.9	US	12890	2606
998846	Back to Black	The extraordinary story of Amy Winehouse’s early rise to fame from her early days in Camden through the making of her groundbreaking album, Back to Black that catapulted Winehouse to global fame. Told through Amy’s eyes and inspired by her deeply personal lyrics, the film explores and embraces the many layers of the iconic artist and the tumultuous love story at the center of one of the most legendary albums of all time.	https://image.tmdb.org/t/p/w500/xHQEeUT3Ac4fTY72UeNrI75xLtE.jpg	https://image.tmdb.org/t/p/w500/a1m4DAmySexNaaGnjEVA2MKNUCo.jpg	https://www.youtube.com/watch?v=VlW-jEscGgM	2024-04-11 00:00:00	t	6.711	GB	1137903	2606
1209290	Justice League: Crisis on Infinite Earths Part Three	Now fully revealed as the ultimate threat to existence, the Anti-Monitor wages an unrelenting attack on the surviving Earths that struggle for survival in a pocket universe. One by one, these worlds and all their inhabitants are vaporized! On the planets that remain, even time itself is shattered, and heroes from the past join the Justice League and their rag-tag allies against the epitome of evil. But as they make their last stand, will the sacrifice of the superheroes be enough to save us all?	https://image.tmdb.org/t/p/w500/a3q8NkM8uTh9E23VsbUOdDSbBeN.jpg	https://image.tmdb.org/t/p/w500/dsGwCEO8tda4FlgHKvL95f0oQbH.jpg	https://www.youtube.com/watch?v=tQ3Aahb_PDE	2024-07-15 00:00:00	t	7.482	US	2927725	2606
502356	The Super Mario Bros. Movie	While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.	https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg	https://image.tmdb.org/t/p/w500/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg	https://www.youtube.com/watch?v=RjNcTBXTk4I	2023-04-05 00:00:00	t	7.655	US	1719706	2606
14836	Coraline	Wandering her rambling old house in her boring new town, 11-year-old Coraline discovers a hidden door to a strangely idealized version of her life. In order to stay in the fantasy, she must make a frighteningly real sacrifice.	https://image.tmdb.org/t/p/w500/4jeFXQYytChdZYE9JYO7Un87IlW.jpg	https://image.tmdb.org/t/p/w500/pB4FUn08MqRgjxIIUVElljpmnt8.jpg	https://www.youtube.com/watch?v=T6iQnnHNF50	2009-02-05 00:00:00	t	7.886	US	57646	2606
385687	Fast X	Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.	https://image.tmdb.org/t/p/w500/fiVW06jE7z9YnO4trhaMEdclSiC.jpg	https://image.tmdb.org/t/p/w500/4XM8DUTQb3lhLemJC51Jx4a2EuA.jpg	https://www.youtube.com/watch?v=eoOaKN4qCKw	2023-05-17 00:00:00	t	7.092	US	18865	2606
693134	Dune: Part Two	Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, Paul endeavors to prevent a terrible future only he can foresee.	https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg	https://image.tmdb.org/t/p/w500/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg	https://www.youtube.com/watch?v=U2Qp5pL3ovA	2024-02-27 00:00:00	t	8.163	US	137427	2606
939243	Sonic the Hedgehog 3	Sonic, Knuckles, and Tails reunite against a powerful new adversary, Shadow, a mysterious villain with powers unlike anything they have faced before. With their abilities outmatched in every way, Team Sonic must seek out an unlikely alliance in hopes of stopping Shadow and protecting the planet.	https://image.tmdb.org/t/p/w500/mubt4bnVfpJ5lBMq93DidEuMkJr.jpg	https://image.tmdb.org/t/p/w500/m2teNSCH7sxkuXHossRJXhxPKeT.jpg	https://www.youtube.com/watch?v=qSu6i2iFMO0	2024-12-19 00:00:00	t	0	US	93364	2606
603692	John Wick: Chapter 4	With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.	https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg	https://image.tmdb.org/t/p/w500/7I6VUdPj6tQECNHdviJkUHD2u89.jpg	https://www.youtube.com/watch?v=yjRHZEUamCc	2023-03-22 00:00:00	t	7.739	US	40644	2606
475557	Joker	During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.	https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg	https://image.tmdb.org/t/p/w500/gZWl93sf8AxavYpVT1Un6EF3oCj.jpg	https://www.youtube.com/watch?v=-RFFRxcoKfA	2019-10-01 00:00:00	t	8.155	US	57130	2606
1090323	#AMFAD: All My Friends Are Dead	A group of college friends rent an Airbnb for the biggest music festival of the year. But their weekend of partying quickly takes a turn, as the group is murdered one by one, in correspondence with the seven deadly sins.	https://image.tmdb.org/t/p/w500/hbQPeTiRYxLNVOakBboMeCQiwQq.jpg	https://image.tmdb.org/t/p/w500/zODktecT7S3jbEW4tmjRcmlzKke.jpg	https://www.youtube.com/watch?v=8Zv7wd1a-5A	2024-08-29 00:00:00	t	4.667	US	51023	2606
299536	Avengers: Infinity War	As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.	https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg	https://image.tmdb.org/t/p/w500/mDfJG3LC3Dqb67AZ52x3Z0jU0uB.jpg	https://www.youtube.com/watch?v=QwievZ1Tx-8	2018-04-25 00:00:00	t	8.246	US	19272	2606
959092	Mayhem!	Sam is a professional boxer about to get released from prison. While on parole, his past catches up with him and he has no choice but to flee. Five years later, he has rebuilt a simple life on an exotic island in Thailand with his wife and her daughter, but when he gets blackmailed by a dangerous local godfather, he must embark on a dangerous drug smuggling mission which results in a tragedy. Now he has only one purpose: to seek merciless vengeance.	https://image.tmdb.org/t/p/w500/u9035lysUz3ccloQt0SeIp1Mu8a.jpg	https://image.tmdb.org/t/p/w500/aswBReNN2adqTiOBnvh96RCDeJP.jpg	https://www.youtube.com/watch?v=PmcqVmRPgvk	2023-06-28 00:00:00	t	6.675	FR	18184	2606
646683	The Exorcism	A troubled actor begins to unravel while shooting a supernatural horror film, leading his estranged daughter to wonder if he's slipping back into his past addictions or if there's something more sinister at play.	https://image.tmdb.org/t/p/w500/ar2h87jlTfMlrDZefR3VFz1SfgH.jpg	https://image.tmdb.org/t/p/w500/8fNBsXpgMvqk75SPsZzTmIqSRxY.jpg	https://www.youtube.com/watch?v=I1lNNd_klK4	2024-05-30 00:00:00	t	4.944	US	93151	2606
1143508	You Gotta Believe	After dedicating the season to a teammate’s ailing father, a group of underestimated Ft. Worth youth baseball players takes its Cinderella run all the way to the 2002 Little League World Series—culminating in a record-breaking showdown that became an instant ESPN classic.	https://image.tmdb.org/t/p/w500/l4X9SeMFCv414BCt97IBgzYX7JC.jpg	https://image.tmdb.org/t/p/w500/j4CMqgfC8nyLLOYWETXaTInL4Wd.jpg	https://www.youtube.com/watch?v=0r_nbHSOyDE	2024-08-30 00:00:00	t	5.714	US	2253977	2606
567811	10 Lives	A pampered cat takes for granted the lucky hand he has been dealt after he is rescued and loved by Rose, a kind-hearted and passionate student. When he loses his ninth life, fate steps in to set him on a transformative journey.	https://image.tmdb.org/t/p/w500/r2D7MkNocsqKOqGnnGEQThU26JS.jpg	https://image.tmdb.org/t/p/w500/FzntbxhtPGp5gVmie16ry3k7Ow.jpg	https://www.youtube.com/watch?v=RYiN-h_Kbhs	2024-04-18 00:00:00	t	8.399	GB	58421	2606
315162	Puss in Boots: The Last Wish	Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.	https://image.tmdb.org/t/p/w500/kuf6dutpsT0vSVehic3EZIqkOBt.jpg	https://image.tmdb.org/t/p/w500/jr8tSoJGj33XLgFBy6lmZhpGQNu.jpg	https://www.youtube.com/watch?v=tHb7WlgyaUc	2022-12-07 00:00:00	t	8.227	US	1450348	2606
177572	Big Hero 6	A special bond develops between plus-sized inflatable robot Baymax, and prodigy Hiro Hamada, who team up with a group of friends to form a band of high-tech heroes.	https://image.tmdb.org/t/p/w500/2mxS4wUimwlLmI1xp6QW6NSU361.jpg	https://image.tmdb.org/t/p/w500/4s2d3xdyqotiVNHTlTlJjrr3q0H.jpg	https://www.youtube.com/watch?v=8IdMPpKMdcc	2014-10-24 00:00:00	t	7.734	US	70238	2606
5492	Gunner	While on a camping trip in order to reconnect, war veteran Colonel Lee Gunner must save his two sons from a gang of violent bikers when they're kidnapped after accidentally stumbling upon to a massive drug operation.	https://image.tmdb.org/t/p/w500/eEkAY5veAnwxUOOlpF62KawkFO9.jpg	https://image.tmdb.org/t/p/w500/bxwKC4qAbceMgHU1xCCTBK1eYdn.jpg	https://www.youtube.com/watch?v=0PEOojf2ghQ	2024-08-16 00:00:00	f	5.392	US	41355	2606
671	Harry Potter and the Philosopher's Stone	Harry Potter has lived under the stairs at his aunt and uncle's house his whole life. But on his 11th birthday, he learns he's a powerful wizard—with a place waiting for him at the Hogwarts School of Witchcraft and Wizardry. As he learns to harness his newfound powers with the help of the school's kindly headmaster, Harry uncovers the truth about his parents' deaths—and about the villain who's to blame.	https://image.tmdb.org/t/p/w500/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg	https://image.tmdb.org/t/p/w500/t3LicFpYHeYpwqm7L5wDpd22hL5.jpg	https://www.youtube.com/watch?v=l91Km49W9qI	2001-11-16 00:00:00	f	7.913	GB	10965	2606
672	Harry Potter and the Chamber of Secrets	Cars fly, trees fight back, and a mysterious house-elf comes to warn Harry Potter at the start of his second year at Hogwarts. Adventure and danger await when bloody writing on a wall announces: The Chamber Of Secrets Has Been Opened. To save Hogwarts will require all of Harry, Ron and Hermione’s magical abilities and courage.	https://image.tmdb.org/t/p/w500/sdEOH0992YZ0QSxgXNIGLq1ToUi.jpg	https://image.tmdb.org/t/p/w500/yHzyPJrVqlTySQ9mc379yxrLBYQ.jpg	https://www.youtube.com/watch?v=nE11U5iBnH0	2002-11-13 00:00:00	f	7.72	GB	10965	2606
673	Harry Potter and the Prisoner of Azkaban	Year three at Hogwarts means new fun and challenges as Harry learns the delicate art of approaching a Hippogriff, transforming shape-shifting Boggarts into hilarity and even turning back time. But the term also brings danger: soul-sucking Dementors hover over the school, an ally of the accursed He-Who-Cannot-Be-Named lurks within the castle walls, and fearsome wizard Sirius Black escapes Azkaban. And Harry will confront them all.	https://image.tmdb.org/t/p/w500/aWxwnYoe8p2d2fcxOqtvAtJ72Rw.jpg	https://image.tmdb.org/t/p/w500/obKmfNexgL4ZP5cAmzdL4KbHHYX.jpg	https://www.youtube.com/watch?v=VwErvYgoH70	2004-05-31 00:00:00	f	8.019	GB	11218	2606
4011	Beetlejuice	A newly dead New England couple seeks help from a deranged demon exorcist to scare an affluent New York family out of their home.	https://image.tmdb.org/t/p/w500/nnl6OWkyPpuMm595hmAxNW3rZFn.jpg	https://image.tmdb.org/t/p/w500/sIzZQdXY21sEks9lGkGuXzqdGSA.jpg	https://www.youtube.com/watch?v=po1HJbmow0g	1988-03-30 00:00:00	f	7.372	US	510	2606
1329913	SAVE	SSS	sss	sss	sss	2024-11-11 00:00:00	t	\N	ZW	37153	2606
\.


--
-- TOC entry 5004 (class 0 OID 56520)
-- Dependencies: 228
-- Data for Name: MovieActors; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."MovieActors" ("actorId", "movieId") FROM stdin;
137905	957452
1503200	957452
6413	957452
212815	957452
1674734	957452
3578843	957452
20667	957452
993074	957452
1857604	957452
231246	957452
10859	533535
6968	533535
2324569	533535
15576	533535
1464650	533535
15277	533535
54882	533535
1091324	533535
122750	533535
9278	533535
10814	533535
38673	533535
16828	533535
73968	533535
134774	533535
11022	533535
9832	533535
1109702	533535
1492326	533535
230660	533535
80507	533535
215887	533535
1610940	533535
963257	533535
4698632	533535
167008	533535
3158217	533535
78597	533535
59175	533535
4846410	533535
51797	533535
10297	533535
74568	533535
2423284	533535
1674196	533535
59175	1079091
88675	1079091
1855143	1079091
213001	1079091
552252	1079091
26930	1079091
9013	1079091
1388470	1079091
2256	1079091
15905	1079091
209200	1079091
2118672	1079091
131125	1079091
56322	1022789
1903874	1022789
3020876	1022789
51998	1022789
25147	1022789
59258	1022789
169200	1022789
2195140	1022789
1469135	1022789
586757	1022789
2882	1022789
6677	1022789
1294982	1022789
111513	1022789
1260038	1022789
1756597	1022789
3602293	1022789
137262	1022789
64181	1022789
145446	1022789
7908	1022789
1226294	1022789
35515	1022789
12890	1022789
7907	1022789
1224130	1022789
1237	1022789
452205	1022789
4578519	1022789
4495	519182
41091	519182
23659	519182
63522	519182
17743	519182
124750	519182
124747	519182
124748	519182
4581	519182
58769	519182
2000658	519182
125025	519182
35159	519182
31531	519182
15762	519182
1304658	519182
1035822	519182
230436	519182
4815785	519182
1541380	519182
64948	519182
1217803	519182
105191	519182
98429	519182
65640	519182
56348	519182
53209	519182
1865803	519182
938425	519182
61536	519182
41088	519182
4589	519182
34517	519182
1537686	840705
38673	840705
61178	840705
2224	840705
35548	840705
1371297	840705
9640	840705
3514776	840705
3560034	840705
2599167	840705
16935	840705
6677	840705
1985	840705
43373	840705
2221430	840705
976042	840705
37153	840705
77069	840705
81685	949484
418	949484
25702	949484
1457026	949484
80371	949484
1434242	949484
142447	949484
985030	949484
81671	949484
29406	949484
1301638	949484
1493724	949484
17353	949484
75913	1147710
1207629	1147710
1020859	1147710
1466233	1147710
3003147	1147710
1352930	1147710
1108037	1147710
118976	1147710
1295417	1147710
2189618	1147710
2704194	1147710
1078674	1147710
2232	917496
1920	917496
974169	917496
11514	917496
15009	917496
28782	917496
5293	917496
518	917496
3706720	917496
34065	917496
39659	917496
1160625	917496
1401548	917496
225202	917496
1087066	917496
112	365177
55638	365177
25616	365177
8944	365177
1767250	365177
1998541	365177
210665	365177
70851	365177
1356013	365177
2074238	365177
11150	365177
198149	365177
58754	365177
1422571	365177
2758719	365177
1491583	365177
2888	573435
78029	573435
67599	573435
23498	573435
544442	573435
58115	573435
65524	573435
2256312	573435
1399166	573435
74610	573435
62765	573435
1230868	573435
532	573435
224235	573435
119869	573435
1516729	573435
1578220	573435
2089936	573435
4199450	573435
3081264	573435
58733	573435
3568034	573435
4433125	573435
1303873	573435
865	573435
1399841	573435
1399842	573435
3416	933260
1392137	933260
6065	933260
584338	933260
225161	933260
1179888	933260
68842	1062215
77795	1062215
30613	1062215
2378813	1062215
1709431	1062215
83854	1062215
453	1062215
1891984	1062215
1506297	1062215
2941060	1062215
76035	1062215
1257671	1139817
1024396	1139817
2133923	1139817
4475212	1139817
3229192	1139817
223348	1139817
231477	1139817
4256123	1139817
2396991	1139817
3347250	1139817
145989	1139817
2097693	1139817
3245607	1139817
74568	698687
226366	698687
1245	698687
298410	698687
884	698687
2975	698687
65717	698687
2204260	698687
1375036	698687
1736	698687
1717	698687
571562	698687
84496	698687
19537	1064028
2349355	1064028
84613	1064028
3844059	1064028
67247	1064028
1685018	1064028
2507565	1186947
52586	1186947
2218419	1186947
1759957	1186947
55826	1186947
3404719	1186947
1927755	1186947
1267329	1184918
1253360	1184918
1538851	1184918
2440	1184918
1381186	1184918
2	1184918
11514	1184918
10182	1184918
1488236	1184918
1368512	1184918
23680	1184918
42267	1184918
1152021	1184918
1379386	1184918
1449707	1184918
65838	1012148
58058	1012148
343	1012148
1382011	1012148
96277	1012148
1763709	646097
25129	646097
1285	646097
1041440	646097
62562	646097
45398	646097
16584	646097
1797347	646097
2505	646097
156625	646097
1411625	646097
175630	646097
78799	831815
78798	831815
6574	831815
34398	831815
188229	831815
70615	831815
9656	831815
64342	831815
15761	831815
979412	831815
27102	831815
23680	831815
1112414	831815
80634	831815
17414	831815
116315	831815
1683343	945961
2164506	945961
1428070	945961
4848549	945961
107733	945961
73457	748783
2231	748783
1278487	748783
10182	748783
3292	748783
1093919	748783
210172	748783
21422	748783
1564920	748783
19767	748783
2692283	748783
2352372	748783
60736	748783
237087	748783
61411	748783
78047	748783
113235	748783
12835	7451
18514	7451
20982	7451
2231	7451
2341	7451
39849	7451
53348	7451
137332	7451
140250	7451
11160	7451
60705	7451
230176	7451
65240	7451
10207	7451
51302	7451
154837	7451
1054325	7451
1213088	7451
293911	7451
1386009	7451
3260091	7451
16832	7451
558036	7451
82697	7451
10849	7451
15537	7451
1088666	7451
1515687	7451
1088667	7451
1515688	7451
1088668	7451
1088669	7451
1774635	7451
18878	7451
81671	1329912
1110521	1329912
1102421	1329912
2230991	718821
83271	718821
1560244	718821
1602972	718821
16307	718821
145133	718821
1535218	718821
1829245	718821
934289	718821
1466581	718821
1785590	718821
94476	718821
2252989	718821
110993	718821
59843	718821
4830556	718821
1335252	718821
1231768	718821
2956118	718821
97391	718821
4031864	718821
2340180	869291
221018	869291
1202689	869291
20982	869291
1061583	869291
469759	869291
114594	869291
3885284	869291
3987657	869291
1070805	1134424
1267329	762441
1597365	762441
934281	762441
938	762441
1847948	762441
2044689	762441
4803251	762441
2766131	762441
1586047	653346
2146942	653346
79072	653346
1444816	653346
3905	653346
966554	653346
1394427	653346
136295	653346
3757983	653346
103406	653346
78962	653346
94797	653346
581170	653346
58395	653346
236696	653346
1882502	1091267
8776	1091267
27277	1091267
141205	1091267
1479747	1091267
129068	1091267
2011444	1160018
1374676	1160018
2368989	1160018
85684	1160018
4815438	1160018
583940	1160018
2126206	1201734
2425186	1201734
89409	923667
78875	923667
2217481	923667
1674432	923667
1455929	923667
100585	923667
64496	923667
62410	923667
70108	923667
21908	923667
1638505	923667
2684219	923667
1529401	923667
1334855	923667
4684605	923667
137143	923667
1415784	923667
38285	923667
3270592	923667
16484	966576
41687	966576
747	966576
92020	966576
2090007	966576
1762690	966576
2733818	966576
1251069	970347
78423	970347
65731	970347
2048372	970347
5419	970347
1002639	970347
37758	970347
10698	970347
1423713	970347
1643602	970347
1710670	970347
201889	970347
225403	970347
1855944	970347
2987347	970347
4033208	970347
16644	666035
7090	666035
60650	666035
25877	666035
583845	666035
2474268	666035
3608585	666035
1094091	1226578
2963	1226578
56871	1226578
3128	1226578
1002369	1226578
934289	1226578
83445	1226578
1075842	1226578
3177922	1226578
1392937	1226578
61187	1226578
53718	1226578
69899	826510
1488961	826510
11664	826510
1731959	826510
55936	826510
658	826510
81106	826510
206485	826510
2139816	826510
1477896	826510
156831	826510
1074187	826510
1231498	826510
1352662	1005076
58428	1005076
17782	1005076
556168	1005076
50948	1005076
28848	1005076
83225	1005076
586106	1005076
1945695	1005076
2280178	592695
1908347	592695
139422	592695
1903886	592695
1202732	592695
125350	592695
1997424	592695
1679709	592695
132245	592695
1531667	592695
610303	592695
136932	592695
1614301	592695
563723	592695
1946846	592695
142010	592695
1252079	592695
137873	592695
123088	592695
1909553	592695
124045	592695
136093	592695
1040077	592695
1426252	592695
1762569	592695
1522905	592695
123139	592695
135593	592695
550191	592695
3627027	592695
1339697	592695
128068	592695
15556	823464
226366	823464
221018	823464
2948491	823464
60416	823464
123701	823464
15298	823464
1984017	823464
2096500	823464
930817	823464
3366146	823464
1202032	823464
4589985	823464
4636546	823464
4193195	823464
4364226	823464
4719447	823464
1397778	786892
74568	786892
52891	786892
2431565	786892
75122	786892
102603	786892
59117	786892
4441956	786892
73269	786892
24898	786892
1056053	786892
57795	786892
1551044	786892
150030	786892
61784	786892
4377186	786892
3054747	786892
1224391	786892
1125220	786892
1513568	786892
3579580	786892
1445417	786892
56162	786892
66055	786892
3366121	786892
2728596	786892
215913	786892
1014587	786892
4728234	786892
2259333	786892
234548	786892
4589985	786892
3100178	786892
1394433	786892
589542	588648
552962	588648
1224566	588648
2956442	588648
11864	1129598
46593	1129598
8211	1129598
1720565	1129598
1677334	1129598
70851	1011985
1625558	1011985
19492	1011985
4483	1011985
17419	1011985
20904	1011985
6972	1011985
690	1011985
1319469	1011985
171743	1011985
19274	1011985
2282154	1011985
154657	1011985
63235	1011985
4379987	1011985
2357412	1011985
2373501	1011985
971877	1011985
16183	1011985
157865	1011985
18864	1011985
31549	1011985
64151	1011985
102693	1011985
174563	1011985
12097	1011985
232499	1011985
2309874	974262
2630461	974262
1675772	974262
3797199	974262
1980484	974262
1089873	974262
33285	974262
80613	974262
2611805	974262
3922466	974262
1212273	974262
1455769	974262
24200	974262
89719	974262
3555	974262
1990683	974262
2734255	974262
3411744	974262
1280503	974262
1757755	974262
2527414	1010581
2786960	1010581
970027	1010581
1251336	1010581
4105602	1010581
4105605	1010581
31422	1010581
56468	1010581
1206196	1010581
3690350	1010581
5530	1114513
1110405	1114513
59233	1114513
1323109	1114513
2188560	1114513
13240	704239
4587	704239
18999	704239
450	704239
31164	704239
1196822	704239
1517252	704239
17183	704239
55467	704239
11478	704239
65002	704239
2007198	704239
109669	704239
2277896	704239
3725862	704239
1675387	704239
1475496	704239
1553053	704239
4948573	704239
4948619	704239
2766131	704239
4187325	704239
2303017	704239
2299	1032823
3014800	1032823
4340759	1032823
17486	1032823
36819	1032823
156580	1032823
484359	1032823
4264391	1032823
40385	1032823
11614	1032823
1796797	1032823
1251978	1032823
2103859	1032823
1357188	1032823
2436323	1032823
5925	1032823
529	1066262
1254271	1066262
28744	1066262
1365	1066262
152566	1066262
1097391	1066262
3756918	1066262
1615098	1066262
107546	1066262
4825976	1066262
1169229	1066262
205427	1066262
205407	1066262
1193052	1066262
1658802	930600
515	930600
1474123	930600
2214765	930600
53923	930600
60561	930600
4987	930600
13023	930600
80615	930600
65397	930600
74610	930600
1937778	930600
3129672	930600
130689	930600
205	929590
52583	929590
1683343	929590
196179	929590
109019	929590
17039	929590
1385813	929590
1431398	929590
1508173	929590
1457238	929590
1528809	929590
1515510	929590
1327613	929590
2088446	929590
2135069	929590
1689329	929590
88124	929590
1734935	929590
963818	1155058
11782	1155058
35219	1155058
49827	1155058
27993	1155058
15761	1155058
11024	1155058
1194347	1155058
31549	1155058
127387	1155058
25879	1155058
29528	1155058
51798	1155058
28248	1155058
216973	1155058
116315	1155058
106774	1155058
39389	1155058
3323741	1130053
3122182	1130053
3254592	1130053
4429403	1130053
3587720	1130053
3553540	1130053
2469350	1130053
3124678	1130053
4011036	1130053
3570378	1130053
3074171	1051560
1560244	667538
1676520	667538
19540	667538
2372	667538
22970	667538
1620	667538
1427948	667538
1700631	667538
2627590	667538
141610	667538
2940842	667538
1890500	667538
90461	667538
237	667538
59613	667538
937792	667538
2131852	667538
50217	667538
31531	667538
1518933	667538
91671	667538
105875	667538
1625558	1094138
56446	1094138
1489211	1094138
1607789	1094138
1347294	1094138
3103358	1094138
1276759	1094138
57599	1094138
1513304	1094138
75463	1094138
59206	1094138
1230842	1094138
2050577	1094138
198149	1094138
102744	1094138
3759989	1094138
83522	1115396
6905	1115396
11160	1115396
77808	1115396
73421	889737
237405	889737
2039	889737
2229	889737
1545693	889737
4581	889737
2399836	889737
2131	889737
1171570	889737
141748	889737
17200	889737
1180860	889737
117885	889737
205128	889737
1398836	889737
159870	889737
466505	940551
9281	940551
1625558	940551
10556	940551
298410	940551
518	940551
139075	940551
1428070	940551
59784	940551
1529387	940551
19547	940551
571562	940551
54427	940551
70615	940551
35219	940551
2025381	940551
2447208	940551
45924	940551
60232	940551
130081	940551
84213	940551
170317	940551
143346	940551
188982	940551
1248445	940551
1048574	940551
52699	940551
2135035	940551
111529	940551
67830	940551
71536	940551
54693	50014
19492	50014
18997	50014
6944	50014
83002	50014
999605	50014
19	50014
221098	50014
84300	50014
18249	50014
6858	50014
5606	50014
50464	50014
51682	50014
53923	50014
1367901	50014
83222	50014
30861	50014
2453	50014
1158114	50014
60877	50014
34486	50014
52885	50014
81697	50014
35013	50014
56689	50014
13314	50014
15111	1049574
7218	1049574
86462	1049574
35654	1049574
1008235	1049574
12714	1049574
19144	1049574
1635984	1049574
74375	1049574
1315801	1049574
1099744	1049574
1510263	1049574
210451	1049574
1044952	1049574
21315	1049574
134396	1049574
1211636	1049574
1450407	1049574
1419361	1049574
85193	1049574
224413	1014505
1353244	1014505
1287796	1014505
1643476	1014505
1241562	1014505
221773	1014505
1248340	1014505
15111	1215162
95505	1215162
53	1215162
2051	1215162
149954	1215162
1251847	1215162
125025	748167
1213395	748167
1298360	748167
2077864	748167
1701014	748167
1442955	748167
1278888	748167
118362	748167
2209233	748167
2515103	748167
2406550	748167
1748648	748167
83854	938614
187400	938614
62486	938614
127734	938614
1228907	938614
187494	938614
1538823	938614
75175	938614
11086	938614
1407495	938614
1762588	1147400
1758915	1147400
1762592	1147400
2153049	950526
1375966	950526
1262690	950526
1510868	950526
1137425	950526
2460383	950526
1873825	950526
3254592	1140168
3570378	1140168
2524	912649
5294	912649
36594	912649
1115	912649
2141479	912649
10402	912649
7026	912649
1861573	912649
2627590	912649
4886	912649
1428023	1311550
3329176	1311550
56322	150540
169200	150540
21125	150540
19278	150540
59258	150540
125167	150540
1371894	150540
2882	150540
6677	150540
452205	150540
1226294	150540
64181	150540
7908	150540
84496	150540
1237	150540
7907	150540
59784	150540
80591	150540
24358	150540
19547	150540
1565451	150540
167295	150540
12890	150540
1260745	150540
969332	150540
1504904	150540
214701	150540
111466	150540
1236458	150540
143346	150540
7905	150540
1141501	150540
72754	150540
87819	150540
35159	150540
61969	150540
86007	150540
2673762	998846
85065	998846
1665	998846
72305	998846
1213838	998846
24605	998846
1198488	998846
2355285	998846
55465	998846
1683344	998846
75076	998846
1525322	998846
1233056	998846
76594	998846
49624	1209290
228721	1209290
74541	1209290
1803286	1209290
1620226	1209290
5375	1209290
963818	1209290
4753	1209290
66743	1209290
225863	1209290
34947	1209290
109513	1209290
1181302	1209290
31531	1209290
1692795	1209290
5377	1209290
143346	1209290
76621	1209290
81667	1209290
2	1209290
83860	1209290
1367620	1209290
2128085	1209290
34408	1209290
84490	1209290
34202	1209290
934219	1209290
1230664	1209290
38560	1209290
90720	1209290
127712	1209290
51798	1209290
155669	1209290
22125	1209290
216973	1209290
68763	1209290
73457	502356
1397778	502356
95101	502356
70851	502356
298410	502356
19274	502356
61110	502356
299743	502356
176340	502356
24362	502356
65640	502356
110799	502356
31531	502356
94820	502356
89599	502356
113916	502356
59784	502356
1573215	502356
64948	502356
105191	502356
938425	502356
61536	502356
1327400	502356
230436	502356
31549	502356
98429	502356
1536923	502356
34985	502356
501	14836
10742	14836
12094	14836
5539	14836
65827	14836
6972	14836
77344	14836
55426	14836
2011359	14836
7960	14836
12835	385687
17647	385687
8169	385687
8171	385687
56446	385687
1251069	385687
22123	385687
61697	385687
117642	385687
928572	385687
1784612	385687
64295	385687
15735	385687
60073	385687
976	385687
6885	385687
13299	385687
22462	385687
37149	385687
1427948	385687
2282001	385687
508582	385687
124304	385687
2545367	385687
123846	385687
2138286	385687
18918	385687
90633	385687
4211960	385687
1190668	693134
505710	693134
933238	693134
3810	693134
16851	693134
86654	693134
1373737	693134
543530	693134
4690	693134
121529	693134
1640	693134
44079	693134
2037046	693134
2974	693134
205923	693134
1934576	693134
2855994	693134
54807	693134
63007	693134
1767276	693134
1373526	693134
3012028	693134
145536	693134
1935849	693134
199529	693134
2423284	693134
109167	693134
3313934	693134
2212128	693134
1398632	693134
3314411	693134
1397778	693134
222121	939243
206	939243
17605	939243
1212864	939243
6384	939243
11006	939243
208677	939243
2431565	939243
110742	939243
115974	939243
85922	939243
78080	939243
1546282	939243
50266	939243
222129	939243
62863	939243
2627590	939243
115625	939243
6384	603692
1341	603692
137905	603692
6972	603692
2975	603692
129101	603692
6574	603692
9195	603692
2337629	603692
78110	603692
118370	603692
3300	603692
1080969	603692
570010	603692
2331772	603692
1327564	603692
2219646	603692
22019	603692
3978256	603692
3248711	603692
73421	475557
380	475557
1545693	475557
4432	475557
16841	475557
74242	475557
121718	475557
1377670	475557
6181	475557
1231717	475557
171297	475557
155547	475557
80149	475557
1765331	475557
141748	475557
1049916	475557
52021	475557
226366	475557
10691	475557
1123616	475557
2128773	475557
1631358	475557
1219688	475557
155549	475557
78320	475557
1292351	475557
2505669	475557
171689	475557
206398	475557
1456745	475557
2507441	475557
1918850	475557
1432058	475557
15009	475557
2281904	475557
2216410	475557
2551677	475557
1691382	475557
1049742	1090323
1762563	1090323
2602320	1090323
46898	1090323
112268	1090323
3223	299536
16828	299536
74568	299536
16851	299536
103	299536
1245	299536
1896	299536
71580	299536
1136406	299536
172069	299536
8691	299536
543261	299536
91606	299536
6162	299536
550843	299536
53650	299536
60898	299536
17605	299536
82104	299536
22970	299536
30082	299536
139820	299536
543530	299536
12835	299536
51329	299536
73457	299536
12052	299536
1121	299536
51663	299536
227	299536
1083010	299536
236696	299536
29240	299536
1308445	299536
1379821	299536
7624	299536
1447932	299536
139900	299536
62105	299536
102744	299536
1649152	299536
211937	299536
1517836	299536
212003	299536
1767250	299536
1448180	299536
555249	299536
5552	299536
964421	299536
97844	299536
2031105	299536
1480027	299536
11181	299536
2231	299536
71189	299536
2234460	299536
1979183	299536
4442307	299536
3202311	299536
1003260	959092
45152	959092
1102621	959092
2522177	959092
521673	959092
3045013	959092
1272350	959092
2424471	959092
3131642	959092
934	646683
35027	646683
65731	646683
86800	646683
6163	646683
17304	646683
11076	646683
93151	646683
20767	646683
3072059	646683
36422	1143508
17141	1143508
190895	1143508
27125	1143508
37027	1143508
5921	1143508
69740	1143508
1288766	1143508
1940028	1143508
2428442	1143508
1060114	1143508
4794845	1143508
4917469	1143508
2185015	567811
2223752	567811
2598	567811
1146050	567811
1312166	567811
3555	567811
2440	567811
1417794	567811
214477	567811
3131	315162
3136	315162
210172	315162
52583	315162
1373737	315162
39187	315162
5538	315162
1346535	315162
933558	315162
1180099	315162
1371039	315162
3815284	315162
1346997	315162
1404102	315162
1214638	315162
12080	315162
12095	315162
1214171	315162
3464660	315162
1857635	315162
1759221	315162
3012833	315162
2017052	315162
66580	177572
515510	177572
82093	177572
51990	177572
78324	177572
87822	177572
589162	177572
2505	177572
21088	177572
52792	177572
21132	177572
108253	177572
287341	177572
7884	177572
1340669	177572
81178	177572
54698	177572
193254	177572
60272	177572
36821	177572
127387	177572
1225886	177572
7624	177572
158124	177572
15831	177572
60232	177572
176035	177572
950773	177572
173428	177572
1447307	177572
1502453	177572
1688572	177572
194	671
477	671
1643	671
1923	671
4566	671
5049	671
8930	671
10655	671
10732	671
10978	671
10980	671
10981	671
10982	671
10983	671
10984	671
10985	671
10987	671
10988	671
10989	671
10990	671
10991	671
10993	671
11179	671
11180	671
11184	671
11212	671
19903	671
20240	671
56650	671
58778	671
96841	671
96851	671
140368	671
143240	671
225473	671
234923	671
430776	671
871100	671
956224	671
1019545	671
1220119	671
1230975	671
1261131	671
1795303	671
1796507	671
194	672
477	672
740	672
1834	672
1923	672
4566	672
6199	672
8444	672
8930	672
9138	672
10655	672
10978	672
10980	672
10981	672
10982	672
10983	672
10989	672
10990	672
10991	672
10993	672
11179	672
11180	672
11181	672
11182	672
11184	672
11212	672
11355	672
13014	672
14950	672
20999	672
23076	672
79638	672
96841	672
96851	672
105823	672
133453	672
140368	672
234923	672
553700	672
871100	672
956224	672
1090783	672
1364032	672
1796507	672
1849452	672
64	673
477	673
1643	673
1666	673
1923	673
4566	673
5539	673
5658	673
7056	673
9191	673
10978	673
10980	673
10981	673
10982	673
10983	673
10988	673
10989	673
10990	673
10991	673
10993	673
11180	673
11184	673
11207	673
11212	673
11213	673
20999	673
23076	673
34900	673
53519	673
75076	673
96841	673
96851	673
140368	673
229672	673
234923	673
956224	673
1178198	673
1244447	673
1363079	673
1437296	673
1797012	673
528	4011
1920	4011
2232	4011
4004	4011
7447	4011
10565	4011
11514	4011
13243	4011
16935	4011
19545	4011
19754	4011
27264	4011
34535	4011
54813	4011
104944	4011
114604	4011
128621	4011
148130	4011
154073	4011
192	5492
61856	5492
216986	5492
1992208	5492
2519858	5492
3277483	5492
3325593	5492
3328745	5492
3729583	5492
3817648	5492
4001413	5492
4948620	1329913
1091324	1329913
\.


--
-- TOC entry 5006 (class 0 OID 56530)
-- Dependencies: 230
-- Data for Name: MovieAwards; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."MovieAwards" ("movieId", "awardId") FROM stdin;
957452	3
957452	4
957452	1
957452	13
957452	10
957452	5
957452	6
957452	23
533535	7
533535	2
533535	10
533535	17
533535	3
533535	15
533535	24
533535	8
533535	22
1079091	20
1079091	7
1079091	21
1079091	12
1079091	25
1079091	2
1079091	13
1022789	1
1022789	24
1022789	21
1022789	17
1022789	3
1022789	10
1022789	8
1022789	2
519182	11
519182	19
519182	21
519182	8
519182	4
519182	12
519182	1
519182	22
519182	7
840705	24
840705	18
840705	9
840705	8
840705	11
840705	25
840705	17
840705	21
840705	1
949484	12
949484	11
949484	16
949484	6
949484	17
949484	25
949484	22
949484	5
949484	13
1147710	22
1147710	5
1147710	18
1147710	23
1147710	17
1147710	15
1147710	13
1147710	12
1147710	11
1147710	7
917496	18
917496	2
917496	22
917496	11
917496	6
917496	8
917496	20
917496	5
917496	24
365177	18
365177	23
365177	24
365177	4
365177	22
365177	1
365177	6
573435	16
573435	9
573435	18
573435	25
573435	7
573435	23
573435	17
573435	6
573435	2
933260	18
933260	13
933260	22
933260	19
933260	23
933260	16
933260	17
933260	11
1062215	15
1062215	10
1062215	7
1062215	20
1062215	14
1062215	5
1062215	3
1062215	2
1139817	16
1139817	8
1139817	22
1139817	14
1139817	24
1139817	23
1139817	1
1139817	19
698687	18
698687	8
698687	24
698687	11
698687	9
698687	17
698687	12
698687	14
698687	13
1064028	25
1064028	9
1064028	19
1064028	6
1064028	10
1064028	20
1064028	22
1064028	1
1186947	14
1186947	7
1186947	5
1186947	15
1186947	8
1186947	24
1186947	1
1186947	17
1186947	20
1184918	15
1184918	22
1184918	21
1184918	7
1184918	6
1184918	24
1184918	16
1184918	11
1012148	5
1012148	20
1012148	23
1012148	21
1012148	15
1012148	16
1012148	12
1012148	2
646097	15
646097	6
646097	16
646097	4
646097	8
646097	17
646097	21
646097	25
646097	12
831815	18
831815	25
831815	12
831815	24
831815	21
831815	19
831815	17
831815	15
831815	7
831815	4
945961	7
945961	19
945961	2
945961	6
945961	22
945961	9
945961	5
945961	12
945961	1
748783	6
748783	2
748783	21
748783	22
748783	1
748783	24
748783	18
748783	14
7451	14
7451	16
7451	7
7451	5
7451	23
7451	10
7451	11
1329912	23
1329912	11
1329912	10
1329912	3
1329912	22
1329912	8
1329912	14
1329912	15
1329912	6
718821	2
718821	19
718821	4
718821	5
718821	20
718821	23
718821	15
718821	1
718821	11
869291	13
869291	4
869291	2
869291	21
869291	1
869291	8
869291	16
869291	20
1134424	4
1134424	3
1134424	20
1134424	12
1134424	15
1134424	23
1134424	13
1134424	24
1134424	22
1134424	21
762441	19
762441	24
762441	25
762441	3
762441	18
762441	5
762441	16
762441	20
762441	2
653346	6
653346	7
653346	23
653346	3
653346	8
653346	16
653346	18
653346	5
1091267	25
1091267	17
1091267	5
1091267	8
1091267	16
1091267	19
1091267	10
1160018	1
1160018	3
1160018	9
1160018	13
1160018	4
1160018	22
1160018	12
1160018	17
1160018	8
1201734	3
1201734	2
1201734	22
1201734	1
1201734	18
1201734	25
1201734	7
1201734	16
1201734	5
923667	7
923667	13
923667	19
923667	17
923667	14
923667	20
923667	5
923667	15
923667	12
923667	1
966576	19
966576	11
966576	21
966576	3
966576	24
966576	20
966576	5
966576	2
970347	18
970347	20
970347	22
970347	1
970347	12
970347	24
970347	5
970347	16
666035	23
666035	7
666035	15
666035	11
666035	19
666035	1
666035	22
666035	17
666035	2
666035	12
1226578	16
1226578	7
1226578	13
1226578	11
1226578	12
1226578	17
1226578	23
1226578	18
1226578	2
826510	3
826510	25
826510	4
826510	21
826510	20
826510	7
1005076	16
1005076	14
1005076	22
1005076	10
1005076	12
1005076	17
1005076	24
1005076	25
1005076	23
592695	6
592695	7
592695	21
592695	1
592695	8
592695	11
592695	9
823464	24
823464	5
823464	25
823464	20
823464	3
823464	22
823464	19
823464	11
823464	10
823464	2
786892	8
786892	19
786892	4
786892	17
786892	21
786892	14
786892	18
786892	25
588648	2
588648	8
588648	3
588648	1
588648	22
588648	18
588648	7
588648	17
588648	15
588648	4
1129598	25
1129598	18
1129598	11
1129598	4
1129598	23
1129598	21
1129598	12
1129598	16
1011985	21
1011985	7
1011985	13
1011985	14
1011985	19
1011985	6
1011985	18
1011985	2
1011985	24
974262	24
974262	22
974262	21
974262	16
974262	4
974262	6
974262	10
974262	9
1010581	9
1010581	23
1010581	25
1010581	2
1010581	19
1010581	7
1010581	11
1010581	15
1010581	17
1114513	21
1114513	10
1114513	25
1114513	20
1114513	19
1114513	15
1114513	6
1114513	17
1114513	8
704239	18
704239	4
704239	24
704239	7
704239	8
704239	3
704239	9
704239	11
1032823	6
1032823	14
1032823	10
1032823	17
1032823	15
1032823	9
1032823	24
1066262	12
1066262	19
1066262	15
1066262	20
1066262	9
1066262	23
1066262	25
1066262	7
1066262	4
930600	17
930600	5
930600	1
930600	12
930600	22
930600	3
930600	4
930600	21
930600	9
929590	21
929590	8
929590	4
929590	19
929590	23
929590	24
929590	6
1155058	25
1155058	7
1155058	24
1155058	5
1155058	12
1155058	6
1155058	1
1155058	13
1155058	22
1130053	23
1130053	10
1130053	3
1130053	19
1130053	13
1130053	12
1130053	1
1130053	15
1130053	20
1051560	21
1051560	19
1051560	23
1051560	22
1051560	4
1051560	8
1051560	15
1051560	25
1051560	12
667538	2
667538	24
667538	17
667538	25
667538	5
667538	19
667538	8
1094138	9
1094138	20
1094138	1
1094138	21
1094138	7
1094138	6
1094138	4
1115396	14
1115396	16
1115396	24
1115396	22
1115396	1
1115396	23
1115396	3
1115396	8
1115396	13
889737	18
889737	13
889737	10
889737	24
889737	15
889737	17
889737	12
889737	14
940551	14
940551	10
940551	11
940551	5
940551	8
940551	13
940551	18
940551	2
940551	22
50014	16
50014	7
50014	19
50014	5
50014	11
50014	24
50014	8
1049574	12
1049574	3
1049574	23
1049574	18
1049574	21
1049574	1
1049574	13
1049574	8
1014505	6
1014505	9
1014505	12
1014505	15
1014505	8
1014505	14
1014505	4
1014505	21
1014505	13
1014505	18
1215162	18
1215162	12
1215162	9
1215162	22
1215162	11
1215162	8
1215162	25
1215162	1
748167	8
748167	18
748167	16
748167	9
748167	21
748167	20
748167	25
748167	4
748167	7
938614	4
938614	1
938614	8
938614	10
938614	18
938614	17
938614	16
938614	15
938614	7
1147400	25
1147400	6
1147400	20
1147400	24
1147400	3
1147400	9
1147400	8
1147400	23
1147400	12
950526	20
950526	3
950526	15
950526	8
950526	21
950526	19
950526	1
950526	10
1140168	8
1140168	23
1140168	11
1140168	19
1140168	16
1140168	6
1140168	10
1140168	13
912649	8
912649	2
912649	14
912649	1
912649	15
912649	12
912649	21
912649	7
912649	23
1311550	9
1311550	14
1311550	21
1311550	25
1311550	8
1311550	1
1311550	16
1311550	3
1311550	7
1311550	17
150540	16
150540	20
150540	11
150540	2
150540	5
150540	8
150540	14
150540	12
998846	12
998846	15
998846	25
998846	6
998846	10
998846	18
998846	8
998846	3
1209290	23
1209290	14
1209290	3
1209290	5
1209290	25
1209290	22
502356	2
502356	17
502356	15
502356	16
502356	4
502356	22
502356	8
14836	15
14836	16
14836	3
14836	6
14836	14
14836	2
14836	12
14836	21
385687	2
385687	8
385687	3
385687	20
385687	19
385687	16
385687	22
385687	5
693134	15
693134	16
693134	1
693134	3
693134	9
693134	18
693134	24
693134	22
693134	8
939243	1
939243	15
939243	19
939243	6
939243	16
939243	7
939243	25
939243	10
939243	22
603692	10
603692	9
603692	7
603692	25
603692	2
603692	24
603692	12
603692	1
603692	13
475557	5
475557	11
475557	1
475557	17
475557	23
475557	4
475557	3
475557	16
475557	14
1090323	20
1090323	11
1090323	21
1090323	1
1090323	23
1090323	5
1090323	8
1090323	6
1090323	19
299536	3
299536	4
299536	1
299536	20
299536	19
299536	14
299536	6
299536	15
299536	18
959092	5
959092	1
959092	21
959092	11
959092	8
959092	14
959092	12
959092	23
646683	25
646683	10
646683	4
646683	3
646683	5
646683	12
646683	17
1143508	3
1143508	25
1143508	5
1143508	20
1143508	21
1143508	6
1143508	17
1143508	11
567811	11
567811	15
567811	4
567811	13
567811	8
567811	6
315162	7
315162	18
315162	17
315162	14
315162	19
315162	23
177572	4
177572	21
177572	3
177572	13
177572	25
177572	11
177572	19
177572	22
671	1
671	3
671	4
671	17
671	18
671	19
672	6
672	9
672	11
672	12
672	19
672	20
672	21
672	22
673	1
673	2
673	3
673	5
673	8
673	12
673	13
673	15
673	19
673	22
4011	5
4011	7
4011	11
4011	16
4011	17
4011	20
4011	21
4011	24
5492	1
5492	4
5492	5
5492	9
5492	10
5492	12
5492	13
5492	18
5492	21
5492	22
\.


--
-- TOC entry 5005 (class 0 OID 56525)
-- Dependencies: 229
-- Data for Name: MovieGenres; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."MovieGenres" ("genreId", "movieId") FROM stdin;
28	957452
14	957452
27	957452
28	533535
35	533535
878	533535
10749	1079091
18	1079091
16	1022789
10751	1022789
12	1022789
35	1022789
14	1022789
18	1022789
16	519182
10751	519182
35	519182
28	519182
9648	840705
53	840705
28	949484
53	949484
80	1147710
28	1147710
12	1147710
53	1147710
18	1147710
35	917496
14	917496
27	917496
28	365177
878	365177
35	365177
28	573435
80	573435
53	573435
35	573435
18	933260
27	933260
878	933260
27	1062215
878	1062215
53	1062215
28	1139817
35	1139817
80	1139817
16	698687
878	698687
12	698687
10751	698687
878	1064028
53	1064028
27	1064028
28	1186947
80	1186947
18	1186947
16	1184918
878	1184918
10751	1184918
9648	1012148
53	1012148
80	646097
28	646097
53	646097
18	646097
16	831815
35	831815
12	831815
10751	831815
27	945961
878	945961
28	945961
16	748783
35	748783
10751	748783
12	748783
28	748783
28	7451
12	7451
53	7451
80	7451
28	1329912
28	718821
12	718821
53	718821
27	869291
9648	869291
878	869291
16	1134424
28	1134424
12	1134424
14	1134424
878	1134424
27	762441
878	762441
53	762441
878	653346
12	653346
28	653346
27	1091267
28	1160018
80	1160018
53	1160018
18	1160018
27	1201734
878	1201734
53	1201734
28	923667
12	923667
80	923667
53	923667
12	966576
10751	966576
28	970347
53	970347
80	970347
28	666035
80	1226578
27	1226578
53	1226578
12	826510
10751	826510
14	826510
35	826510
28	1005076
80	1005076
53	1005076
18	592695
28	823464
12	823464
878	823464
28	786892
12	786892
878	786892
28	588648
12	588648
16	588648
10751	588648
14	588648
28	1129598
53	1129598
27	1129598
16	1011985
10751	1011985
14	1011985
28	1011985
14	974262
12	974262
10751	974262
35	974262
10749	1010581
18	1010581
27	1114513
53	1114513
28	704239
35	704239
53	1032823
80	1032823
27	1032823
28	1066262
18	1066262
27	930600
53	930600
10752	929590
28	929590
18	929590
16	1155058
18	1155058
878	1155058
27	1130053
14	1130053
27	1051560
878	667538
12	667538
28	667538
35	1094138
878	1094138
28	1094138
28	1115396
53	1115396
10770	1115396
18	889737
80	889737
53	889737
16	940551
28	940551
12	940551
35	940551
10751	940551
18	50014
28	1049574
28	1014505
12	1014505
16	1014505
14	1014505
28	1215162
80	1215162
878	748167
12	748167
28	748167
27	938614
16	1147400
12	1147400
28	1147400
14	1147400
10751	1147400
28	950526
35	950526
14	950526
27	1140168
28	912649
878	912649
12	912649
28	1311550
36	1311550
16	150540
10751	150540
12	150540
18	150540
35	150540
10402	998846
36	998846
18	998846
16	1209290
878	1209290
28	1209290
16	502356
10751	502356
12	502356
14	502356
35	502356
16	14836
10751	14836
14	14836
28	385687
80	385687
53	385687
878	693134
12	693134
878	939243
10751	939243
35	939243
28	939243
12	939243
28	603692
53	603692
80	603692
80	475557
53	475557
18	475557
27	1090323
53	1090323
12	299536
28	299536
878	299536
28	959092
80	959092
18	959092
27	646683
53	646683
10751	1143508
18	1143508
16	567811
35	567811
10751	567811
14	567811
16	315162
12	315162
14	315162
35	315162
10751	315162
12	177572
10751	177572
16	177572
28	177572
35	177572
12	671
14	671
12	672
14	672
12	673
14	673
14	4011
35	4011
28	5492
53	5492
80	5492
28	1329913
35	1329913
\.


--
-- TOC entry 5008 (class 0 OID 56536)
-- Dependencies: 232
-- Data for Name: Review; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Review" (id, "userId", "movieId", content, rating, "approvalStatus") FROM stdin;
6	2612	7451	Bagus	3	f
5	2606	7451	asdas	3	f
3	2606	7451	sda	2	t
4	2606	7451	asd	4	t
1	2606	7451	Jelek	10	t
2	2606	7451	as	10	t
\.


--
-- TOC entry 5010 (class 0 OID 56545)
-- Dependencies: 234
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."User" (id, username, email, password, "photoProfile", provider, role, "isVerified", "verificationCode", "verificationCodeExpired", "verificationRequestDate", "isSuspended", "verificationResetPasswordCode", "verificationResetPasswordCodeExpired", "verificationResetPasswordRequestDate") FROM stdin;
2606	ei	ei@movienexus.com	$2a$10$ygf22k66.dgs2HnOaBX3UeSL2W87wQcpA9OKyDoN3vVnkJDcQYcDa	https://static.wikia.nocookie.net/gensin-impact/images/2/24/Raiden_Shogun_Icon.png	email	admin	t	260621	2024-11-10 16:15:13.722	2024-11-09 16:15:13.722	f	\N	2024-11-10 23:16:09.283	2024-11-09 16:16:09.282
2612	Broy Software	royazizbarera@gmail.com	$2a$10$bv94e0FJZqsEsG2UJ9kvk.rWlCRsxPxCTGB9QVzl2T5a0LdE7jaQi	\N	email	writer	t	\N	\N	2024-11-11 04:43:07.094	t	\N	2024-11-12 11:43:07.095	2024-11-11 04:43:07.094
\.


--
-- TOC entry 4992 (class 0 OID 56459)
-- Dependencies: 216
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
a6c94b1e-2416-432b-9cf4-4acc0fd6528c	3c0bbc8869253a29a7004ef6d525dd279058846912c957ee861990e02cbba9b1	2024-11-09 23:16:04.258731+07	20241103193558_add_pg_trgm_extension	\N	\N	2024-11-09 23:16:04.121848+07	1
f6e1fccb-46be-4489-b364-938cc3688c50	40af651377f29428710e3cbe1d2d120406f2365b862b21906b0d3cdb3baad084	2024-11-09 23:16:04.263077+07	20241104055529_init	\N	\N	2024-11-09 23:16:04.259452+07	1
59d0dcf2-2be2-469b-8b8d-adb5192f22cf	f2285f72df71954c246bf21bf1da254ae2f6cd2fb24d0948ec9f72439c09d687	2024-11-09 23:16:04.268104+07	20241107103759_add_reset_code	\N	\N	2024-11-09 23:16:04.263954+07	1
6659484d-4611-41ca-9d17-d1e7fde687d6	8910569bc8aab7f9adb99f67044f5724e7add56c3989094c2953b8ed5ee62625	2024-11-09 23:16:04.272452+07	20241109120218_aiven	\N	\N	2024-11-09 23:16:04.268929+07	1
1b1a0c2a-40a3-49f4-9413-e86fb8338191	8910569bc8aab7f9adb99f67044f5724e7add56c3989094c2953b8ed5ee62625	2024-11-09 23:16:04.276266+07	20241109120822_init	\N	\N	2024-11-09 23:16:04.273359+07	1
48f158e4-661d-4785-906e-24538d013938	8910569bc8aab7f9adb99f67044f5724e7add56c3989094c2953b8ed5ee62625	2024-11-09 23:16:04.27931+07	20241109120912_init	\N	\N	2024-11-09 23:16:04.276972+07	1
34f2534f-9ddb-4ba4-b9a1-a0174f78f6bd	a8903237cd5862ce2c102b4335b61c7b0dfd12a4747fa31328bc968d91260ffe	2024-11-09 23:16:05.758854+07	20241109161605_init	\N	\N	2024-11-09 23:16:05.754542+07	1
fc261096-c6cf-4a77-87d5-2e7c036da60f	a8903237cd5862ce2c102b4335b61c7b0dfd12a4747fa31328bc968d91260ffe	2024-11-11 11:21:28.29335+07	20241111042128_init	\N	\N	2024-11-11 11:21:28.287541+07	1
\.


--
-- TOC entry 5026 (class 0 OID 0)
-- Dependencies: 222
-- Name: Actor_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Actor_id_seq"', 4948620, true);


--
-- TOC entry 5027 (class 0 OID 0)
-- Dependencies: 220
-- Name: Award_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Award_id_seq"', 26, false);


--
-- TOC entry 5028 (class 0 OID 0)
-- Dependencies: 224
-- Name: Director_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Director_id_seq"', 4390793, false);


--
-- TOC entry 5029 (class 0 OID 0)
-- Dependencies: 218
-- Name: Genre_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Genre_id_seq"', 10771, false);


--
-- TOC entry 5030 (class 0 OID 0)
-- Dependencies: 226
-- Name: Movie_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Movie_id_seq"', 1329913, true);


--
-- TOC entry 5031 (class 0 OID 0)
-- Dependencies: 231
-- Name: Review_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Review_id_seq"', 6, true);


--
-- TOC entry 5032 (class 0 OID 0)
-- Dependencies: 233
-- Name: User_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."User_id_seq"', 2612, true);


--
-- TOC entry 4815 (class 2606 OID 56501)
-- Name: Actor Actor_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Actor"
    ADD CONSTRAINT "Actor_pkey" PRIMARY KEY (id);


--
-- TOC entry 4812 (class 2606 OID 56492)
-- Name: Award Award_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Award"
    ADD CONSTRAINT "Award_pkey" PRIMARY KEY (id);


--
-- TOC entry 4807 (class 2606 OID 56474)
-- Name: Country Country_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Country"
    ADD CONSTRAINT "Country_pkey" PRIMARY KEY (code);


--
-- TOC entry 4818 (class 2606 OID 56510)
-- Name: Director Director_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Director"
    ADD CONSTRAINT "Director_pkey" PRIMARY KEY (id);


--
-- TOC entry 4809 (class 2606 OID 56483)
-- Name: Genre Genre_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Genre"
    ADD CONSTRAINT "Genre_pkey" PRIMARY KEY (id);


--
-- TOC entry 4823 (class 2606 OID 56524)
-- Name: MovieActors MovieActors_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."MovieActors"
    ADD CONSTRAINT "MovieActors_pkey" PRIMARY KEY ("movieId", "actorId");


--
-- TOC entry 4827 (class 2606 OID 56534)
-- Name: MovieAwards MovieAwards_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."MovieAwards"
    ADD CONSTRAINT "MovieAwards_pkey" PRIMARY KEY ("movieId", "awardId");


--
-- TOC entry 4825 (class 2606 OID 56529)
-- Name: MovieGenres MovieGenres_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."MovieGenres"
    ADD CONSTRAINT "MovieGenres_pkey" PRIMARY KEY ("movieId", "genreId");


--
-- TOC entry 4821 (class 2606 OID 56519)
-- Name: Movie Movie_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Movie"
    ADD CONSTRAINT "Movie_pkey" PRIMARY KEY (id);


--
-- TOC entry 4830 (class 2606 OID 56543)
-- Name: Review Review_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Review"
    ADD CONSTRAINT "Review_pkey" PRIMARY KEY (id);


--
-- TOC entry 4833 (class 2606 OID 56558)
-- Name: User User_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);


--
-- TOC entry 4805 (class 2606 OID 56467)
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- TOC entry 4813 (class 1259 OID 56560)
-- Name: Actor_countryCode_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "Actor_countryCode_idx" ON public."Actor" USING btree ("countryCode");


--
-- TOC entry 4810 (class 1259 OID 56559)
-- Name: Award_countryCode_year_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "Award_countryCode_year_idx" ON public."Award" USING btree ("countryCode", year);


--
-- TOC entry 4816 (class 1259 OID 56561)
-- Name: Director_countryCode_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "Director_countryCode_idx" ON public."Director" USING btree ("countryCode");


--
-- TOC entry 4819 (class 1259 OID 56562)
-- Name: Movie_countryCode_directorId_userId_releaseDate_rating_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "Movie_countryCode_directorId_userId_releaseDate_rating_idx" ON public."Movie" USING btree ("countryCode", "directorId", "userId", "releaseDate", rating);


--
-- TOC entry 4828 (class 1259 OID 56563)
-- Name: Review_movieId_userId_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "Review_movieId_userId_idx" ON public."Review" USING btree ("movieId", "userId");


--
-- TOC entry 4831 (class 1259 OID 56564)
-- Name: User_email_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "User_email_key" ON public."User" USING btree (email);


--
-- TOC entry 4834 (class 1259 OID 56565)
-- Name: User_username_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "User_username_idx" ON public."User" USING btree (username);


--
-- TOC entry 4836 (class 2606 OID 56571)
-- Name: Actor Actor_countryCode_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Actor"
    ADD CONSTRAINT "Actor_countryCode_fkey" FOREIGN KEY ("countryCode") REFERENCES public."Country"(code) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 4835 (class 2606 OID 56566)
-- Name: Award Award_countryCode_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Award"
    ADD CONSTRAINT "Award_countryCode_fkey" FOREIGN KEY ("countryCode") REFERENCES public."Country"(code) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 4837 (class 2606 OID 56576)
-- Name: Director Director_countryCode_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Director"
    ADD CONSTRAINT "Director_countryCode_fkey" FOREIGN KEY ("countryCode") REFERENCES public."Country"(code) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 4841 (class 2606 OID 56596)
-- Name: MovieActors MovieActors_actorId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."MovieActors"
    ADD CONSTRAINT "MovieActors_actorId_fkey" FOREIGN KEY ("actorId") REFERENCES public."Actor"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 4842 (class 2606 OID 56601)
-- Name: MovieActors MovieActors_movieId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."MovieActors"
    ADD CONSTRAINT "MovieActors_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES public."Movie"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 4845 (class 2606 OID 56621)
-- Name: MovieAwards MovieAwards_awardId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."MovieAwards"
    ADD CONSTRAINT "MovieAwards_awardId_fkey" FOREIGN KEY ("awardId") REFERENCES public."Award"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 4846 (class 2606 OID 56616)
-- Name: MovieAwards MovieAwards_movieId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."MovieAwards"
    ADD CONSTRAINT "MovieAwards_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES public."Movie"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 4843 (class 2606 OID 56606)
-- Name: MovieGenres MovieGenres_genreId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."MovieGenres"
    ADD CONSTRAINT "MovieGenres_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES public."Genre"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 4844 (class 2606 OID 56611)
-- Name: MovieGenres MovieGenres_movieId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."MovieGenres"
    ADD CONSTRAINT "MovieGenres_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES public."Movie"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 4838 (class 2606 OID 56581)
-- Name: Movie Movie_countryCode_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Movie"
    ADD CONSTRAINT "Movie_countryCode_fkey" FOREIGN KEY ("countryCode") REFERENCES public."Country"(code) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 4839 (class 2606 OID 56586)
-- Name: Movie Movie_directorId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Movie"
    ADD CONSTRAINT "Movie_directorId_fkey" FOREIGN KEY ("directorId") REFERENCES public."Director"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 4840 (class 2606 OID 56591)
-- Name: Movie Movie_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Movie"
    ADD CONSTRAINT "Movie_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 4847 (class 2606 OID 56631)
-- Name: Review Review_movieId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Review"
    ADD CONSTRAINT "Review_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES public."Movie"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 4848 (class 2606 OID 56626)
-- Name: Review Review_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Review"
    ADD CONSTRAINT "Review_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 5017 (class 0 OID 0)
-- Dependencies: 6
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE USAGE ON SCHEMA public FROM PUBLIC;


-- Completed on 2024-12-02 22:10:21

--
-- PostgreSQL database dump complete
--

