# FinGuard Engineering Standards

**Version:** 1.0  
**Status:** Approved  
**Last Updated:** 14 July 2026

---

# 1. Purpose

This document defines the engineering standards for the FinGuard project.

Its purpose is to ensure consistency in repository structure, documentation, development workflow, Git practices and quality standards throughout the project.

All contributors are expected to follow these standards.

---

# 2. Repository Structure

The repository follows a responsibility-based folder structure.

```
FinGuard/
│
├── app/
│   ├── backend/
│   └── frontend/
│
├── automation/
│
├── docs/
│
├── infrastructure/
│
├── tools/
│
├── README.md
└── .gitignore
```

## Folder Responsibilities

| Folder | Responsibility |
|---------|----------------|
| app | Production application code |
| automation | UI, API and performance automation |
| docs | Product, engineering and QA documentation |
| infrastructure | Deployment and infrastructure configuration |
| tools | Reserved for reusable engineering utilities. Remains empty until required. |

### Engineering Rule

Every top-level folder must have one clearly defined responsibility.

---

# 3. Documentation Strategy

Documentation is organised by **business module**, not by document type.

Example:

```
docs/

features/

    authentication/

    accounts/

    transactions/

architecture/

standards/

sprints/
```

Each business module contains all documentation related to that module.

Examples include:

- Requirements
- User Stories
- Acceptance Criteria
- API Documentation
- Testing Documentation

Cross-project documentation remains centralised.

Examples:

- Engineering Standards
- Architecture Decision Records (ADR)
- Sprint Documentation

---

# 4. Naming Convention

## Feature ID

Format

```
FG-<MODULE>-001
```

Examples

```
FG-AUTH-001
FG-ACC-001
FG-TRX-001
```

Feature IDs are permanent identifiers and never change.

---

## Local Feature Identifiers

Within each feature:

| Item | Format |
|------|---------|
| Feature Requirement | FR1 |
| User Story | US1 |
| Acceptance Criteria | AC1 |
| Business Rule | BR1 |

These identifiers restart for every feature.

---

## Architecture Decision Records

Format

```
ADR-001
ADR-002
```

ADRs remain globally numbered because they may affect multiple modules.

---

# 5. Git Branch Strategy

The project follows a lightweight feature branch workflow.

## Permanent Branch

```
main
```

The main branch must always remain stable.

---

## Feature Branches

Format

```
feature/FG-AUTH-001-customer-login
```

---

## Bug Fix Branches

Format

```
bugfix/FG-AUTH-001-invalid-email-validation
```

or

```
bugfix/session-timeout
```

---

## Documentation Branches

Documentation changes are normally committed with the related feature branch.

Separate documentation branches should only be created for major documentation initiatives.

---

## Pull Requests

Every feature should be merged through a Pull Request.

Merged feature branches should be deleted after merge.

---

# 6. Commit Message Convention

The project follows Conventional Commit principles.

## Format

Feature-specific commits

```
<type>(<Feature-ID>): <description>
```

Example

```
feat(FG-AUTH-001): implement customer login endpoint
```

Repository-wide commits

```
<type>: <description>
```

Example

```
docs: update engineering standards
```

---

## Approved Commit Types

| Type | Purpose |
|------|---------|
| feat | New functionality |
| fix | Bug fixes |
| docs | Documentation |
| test | Tests and automation |
| refactor | Code restructuring without behaviour change |
| chore | Maintenance |
| perf | Performance improvements |
| ci | CI/CD configuration |

---

## Commit Principles

- One logical change per commit.
- Commit messages must clearly describe the change.
- Avoid generic commit messages such as "Updated files" or "Final changes".

---

# 7. Definition of Ready (DoR)

Development may begin only when the following are complete:

- Business Requirements approved
- User Stories completed
- Acceptance Criteria completed
- Business Rules documented
- Dependencies identified
- Architecture Review completed (if required)

---

# 8. Definition of Done (DoD)

A feature is considered complete only when:

- Development completed
- Manual testing completed
- Automation completed (where applicable)
- Documentation updated
- Pull Request merged
- Feature branch deleted

## Knowledge Check

Before closing a feature, the developer must be able to confidently explain:

- Business purpose
- Design decisions
- API behaviour
- Testing strategy
- Automation approach

If the implementation cannot be confidently explained, the feature is not considered complete.

---

# 9. Guiding Principles

The FinGuard project follows these engineering principles:

- Documentation before implementation
- One responsibility per folder
- Small, meaningful commits
- Stable main branch
- Feature-driven development
- Traceable engineering decisions
- Testable software
- Maintainable architecture
- Learn the reason behind every implementation

---

# 10. Change Management

Engineering standards are living documents.

Any future modification to these standards must:

- Be discussed
- Be approved
- Record the reason for change
- Increment the document version

---

**End of Engineering Standards v1.0**