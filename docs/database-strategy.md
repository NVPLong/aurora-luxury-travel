# Database Strategy — Aurora

Scalable data architecture for the global luxury travel editorial.

## 1. Primary Database
- **Type**: Relational (PostgreSQL).
- **Justification**: Complex relationships between destinations, categories, users, and curated itineraries require ACID compliance and strong relational integrity.

## 2. Modeling & Persistence
- **ORM**: Prisma.
- **Migration Strategy**: Version-controlled Prisma migrations.
- **Agent Skill**: Use `.skills/aurora-database-design/SKILL.md` before schema or migration work.
- **Schema Focus**:
  - `Destination`: Core editorial data.
  - `DestinationImage`: Cloudinary asset, focal point, license, attribution, and usage context.
  - `EditorialMoment`: Signature moments connected to a destination.
  - `JourneyStep`: Time-of-day itinerary rhythm connected to a destination.
  - `VectorMetadata`: Embedding references for RAG.
  - `UserCollection`: Many-to-many relationship for "Saved Trips."

## 3. Scalability Considerations
- **Read Replicas**: Planned for global traffic in V3.
- **Caching**: Redis layer for high-traffic destination pages to minimize DB hits.
