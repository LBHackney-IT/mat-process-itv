/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { defineFeature, loadFeature } from "jest-cucumber";
import { join } from "path";
import { until } from "selenium-webdriver";
import Expect from "../helpers/Expect";

jest.setTimeout(120 * 1000);

const presentTenantRef = "b6e72c28-7957-e811-8126-70106faa6a31";
const imagePath = join(__dirname, "..", "__fixtures__", "image.jpg");
const processData = {
  property: {
    outside: {
      images: [imagePath],
    },
    rooms: {
      canEnterAll: "no",
      notes: [
        {
          value: "Room notes",
          isPostVisitAction: false,
        },
      ],
    },
    propertyOccupied: {
      isPropertyOccupied: "yes",
      notes: [
        {
          value: "Property occupied notes",
          isPostVisitAction: false,
        },
      ],
    },
    gas: {
      hasBoilerChecked: "yesTenantHasCertificate",
      images: [imagePath],
      visitDate: {
        day: "01",
        month: "01",
        year: "2012",
      },
      notes: [
        {
          value: "Gas boiler notes",
          isPostVisitAction: false,
        },
      ],
    },
    decorationPack: {
      hasDecorationPack: "yes",
      hasPermission: "yes",
      notes: [
        {
          value: "Decoration pack notes",
          isPostVisitAction: false,
        },
      ],
    },
    laminatedFlooring: {
      hasLaminatedFlooring: "yes",
      hasPermission: "yes",
      images: [imagePath],
      notes: [
        {
          value: "Laminated flooring notes",
          isPostVisitAction: false,
        },
      ],
    },
    alterations: {
      hasAlterations: "yes",
      images: [imagePath],
      notes: [
        {
          value: "Alterations notes",
          isPostVisitAction: false,
        },
      ],
    },
    garden: {
      hasGarden: "yes",
      type: "private",
      isMaintained: "yes",
      images: [imagePath],
      notes: [
        {
          value: "Garden notes",
          isPostVisitAction: false,
        },
      ],
    },
    repairs: {
      needsRepairs: "yes",
      images: [imagePath],
      notes: [
        {
          value: "Repairs notes",
          isPostVisitAction: false,
        },
      ],
    },
    fireExit: {
      hasFireExit: "yes",
      isAccessible: "yes",
      notes: [
        {
          value: "Fire exit notes",
          isPostVisitAction: false,
        },
      ],
    },
    smokeAlarm: {
      hasSmokeAlarm: "yes",
      isWorking: "yes",
      notes: [
        {
          value: "Smoke alarm notes",
          isPostVisitAction: false,
        },
      ],
    },
    metalGates: {
      hasMetalGates: "yes",
      combustibleItemsBehind: "yes",
      furtherActionRequired: "yes",
      images: [imagePath],
      notes: [
        {
          value: "Metal gates notes",
          isPostVisitAction: false,
        },
      ],
    },
    doorMats: {
      hasPlaced: "yes",
      furtherActionRequired: "yes",
      notes: [
        {
          value: "Door mats notes",
          isPostVisitAction: false,
        },
      ],
    },
    communalAreas: {
      hasLeftCombustibleItems: "yes",
      furtherActionRequired: "yes",
      notes: [
        {
          value: "Communal areas notes",
          isPostVisitAction: false,
        },
      ],
    },
    pets: {
      hasPets: "yes",
      petTypes: ["dog", "cat"],
      hasPermission: "yes",
      images: [imagePath],
      notes: [
        {
          value: "Pets notes",
          isPostVisitAction: false,
        },
      ],
    },
    antisocialBehaviour: {
      tenantUnderstands: "yes",
      notes: [
        {
          value: "Antisocial behaviour notes",
          isPostVisitAction: false,
        },
      ],
    },
    refuse: {
      tenantKnowsAboutRefuse: "yes",
      tenantHasFoodBin: "yes",
      notes: [
        {
          value: "Refuse and recycling notes",
          isPostVisitAction: false,
        },
      ],
    },
    queries: {
      tenantHasBooklet: "yes",
      bookletNotes: [
        {
          value: "Booklet notes",
          isPostVisitAction: false,
        },
      ],
      tenantHasHomeQueries: "yes",
      homeQueriesNotes: [
        {
          value: "Home queries notes",
          isPostVisitAction: false,
        },
      ],
      tenantHasFacilitiesQueries: "yes",
      facilitiesQueriesNotes: [
        {
          value: "Facilities queries notes",
          isPostVisitAction: false,
        },
      ],
    },
    otherComments: {
      images: [imagePath],
      notes: [
        {
          value: "Other comments notes",
          isPostVisitAction: false,
        },
      ],
    },
  },
  isUnannouncedVisit: {
    value: "no",
    notes: [
      {
        value: "Unannounced visit notes",
        isPostVisitAction: false,
      },
    ],
  },
  isVisitInside: {
    value: "no",
    notes: [
      {
        value: "Visit inside notes",
        isPostVisitAction: false,
      },
    ],
  },
  tenantsPresent: [presentTenantRef],
  household: {
    documents: {
      images: [imagePath],
    },
    houseMovingSchemes: {
      notes: [
        {
          value: "House moving schemes notes",
          isPostVisitAction: false,
        },
      ],
    },
    memberChanges: {
      notes: [
        {
          value: "Member changes notes",
          isPostVisitAction: false,
        },
      ],
    },
    paymentCard: {
      type: "yes has card",
      notes: [
        {
          value: "Payment card notes",
          isPostVisitAction: false,
        },
      ],
    },
    rentArrears: {
      type: "yes has plan",
      notes: [
        {
          value: "Rent arrears notes",
          isPostVisitAction: false,
        },
      ],
    },
    housingBenefits: {
      hasApplied: "yes application declined",
      notes: [
        {
          value: "Housing benefits notes",
          isPostVisitAction: false,
        },
      ],
    },
    incomeOfficer: {
      wantsToContact: "yes",
      notes: [
        {
          value: "Income officer notes",
          isPostVisitAction: false,
        },
      ],
    },
  },
  healthConcerns: {
    value: "yes",
    who: [presentTenantRef],
    moreInfo: ["dementia", "smoking"],
    notes: [
      {
        value: "Health concerns notes",
        isPostVisitAction: false,
      },
    ],
  },
  disability: {
    value: "yes",
    whoDisability: [presentTenantRef],
    pipOrDLA: "yes",
    whoPIP: [presentTenantRef],
    whoDLA: [presentTenantRef],
    notes: [
      {
        value: "Disability notes",
        isPostVisitAction: false,
      },
    ],
  },
  supportNeeds: {
    residentSustainmentNotes: [
      {
        value: "Resident sustainment notes",
        isPostVisitAction: false,
      },
    ],
    befriendingNotes: [
      {
        value: "Befriending notes",
        isPostVisitAction: false,
      },
    ],
    adultSafeguardingNotes: [
      {
        value: "Adult safeguarding notes",
        isPostVisitAction: false,
      },
    ],
    childrenYoungPeopleSafeguardingNotes: [
      {
        value: "Children young people safeguarding notes",
        isPostVisitAction: false,
      },
    ],
    domesticSexualViolenceNotes: [
      {
        value: "Domestic sexual violence notes",
        isPostVisitAction: false,
      },
    ],
    mentalHealth18To65Notes: [
      {
        value: "Mental health 18 to 65 notes",
        isPostVisitAction: false,
      },
    ],
    mentalHealthOver65Notes: [
      {
        value: "Mental health over 65 notes",
        isPostVisitAction: false,
      },
    ],
  },
  residents: {
    [presentTenantRef]: {
      id: {
        type: "valid passport",
        images: [imagePath],
        notes: [
          {
            value: "ID notes",
            isPostVisitAction: false,
          },
        ],
      },
      photo: {
        isWilling: "yes",
        images: [imagePath],
      },
      nextOfKin: {
        fullName: "Next of kin name",
        relationship: "Next of kin relationship",
        mobileNumber: "0123455789",
        otherNumber: "9876543210",
        email: "next@of.kin",
        address: "1 Next of Kin Road\nKinsville\nNK0 0NK",
      },
      carer: {
        hasCarer: "yes",
        type: "registered",
        isLiveIn: "yes",
        liveInStartDate: "August 2018",
        fullName: "Carer name",
        phoneNumber: "0123455789",
        relationship: "Carer relationship",
        notes: [
          {
            value: "Carer notes",
            isPostVisitAction: false,
          },
        ],
      },
      otherSupport: {
        hasSignedUp: "yes",
        notes: [
          {
            value: "GP notes",
            isPostVisitAction: false,
          },
        ],
        fullName: "Other support name",
        role: "other support role",
        organisation: "other organisation",
        phoneNumber: "0123455789",
      },
      disabilities: {
        what: ["vision", "hearing"],
      },
      signature: "",
    },
  },
  other: {
    notes: [
      {
        value: "Other notes",
        isPostVisitAction: false,
      },
    ],
  },
};

defineFeature(loadFeature("./end-to-end.feature"), (test) => {
  test("Performing a check", ({ when, then }) => {
    when("I complete a process", async () => {
      const processRef = process.env.TEST_PROCESS_REF;

      // Index page
      await browser!.getRelative("", true);

      // Wait for redirect.
      await browser!.wait(
        until.elementLocated({
          css: '[data-testid="submit"]',
        }),
        10000
      );

      // Loading page
      await expect(browser!.getCurrentUrl()).resolves.toContain(
        `${processRef}/loading`
      );

      // Wait for data fetching.
      await browser!.waitForEnabledElement(
        {
          css: '[data-testid="submit"]',
        },
        1000,
        10000
      );

      await browser!.submit();

      // Visit attempt page
      await expect(browser!.getCurrentUrl()).resolves.toContain(
        `${processRef}/outside`
      );

      (
        await browser!.waitForEnabledElement({
          name: "outside-property-images",
        })
      ).sendKeys(processData.property.outside.images[0]);
      (
        await browser!.waitForEnabledElement({
          name: "metal-gate-images",
        })
      ).sendKeys(processData.property.metalGates.images[0]);

      await browser!.submit();

      // Start check page
      await expect(browser!.getCurrentUrl()).resolves.toContain(
        `${processRef}/start`
      );

      await browser!.submit();

      // About visit page
      await expect(browser!.getCurrentUrl()).resolves.toContain(
        `${processRef}/about-visit`
      );

      (
        await browser!.waitForEnabledElement({
          id: `unannounced-visit-${processData.isUnannouncedVisit.value}`,
        })
      ).click();
      (
        await browser!.waitForEnabledElement({
          name: "unannounced-visit-notes",
        })
      ).sendKeys(processData.isUnannouncedVisit.notes[0].value);
      (
        await browser!.waitForEnabledElement({
          id: `inside-property-${processData.isVisitInside.value}`,
        })
      ).click();
      (
        await browser!.waitForEnabledElement({
          name: "inside-property-notes",
        })
      ).sendKeys(processData.isVisitInside.notes[0].value);

      await browser!.submit();

      // Sections page
      await expect(browser!.getCurrentUrl()).resolves.toContain(
        `${processRef}/sections`
      );

      await browser!.waitForEnabledElement(
        {
          css: '[href$="/present-for-check"]',
        },
        10000
      );

      await browser!.submit({
        css: '[href$="/present-for-check"]',
      });

      //fix this
      // Present for check page
      // await expect(browser!.getCurrentUrl()).resolves.toContain(
      //   `${processRef}/present-for-check`
      // );

      // (
      //   await browser!.waitForEnabledElement({
      //     id: `tenants-present-${processData.tenantsPresent[0].replace(
      //       /\s/g,
      //       "-"
      //     )}`,
      //   })
      // ).click();

      // await browser!.submit();

      // Verify tenant details page
      await expect(browser!.getCurrentUrl()).resolves.toContain(
        `${processRef}/verify`
      );

      await browser!.submit({
        css: `[href$="/id/${presentTenantRef}"]`,
      });

      // ID page
      await expect(browser!.getCurrentUrl()).resolves.toContain(
        `/id/${presentTenantRef}`
      );

      (
        await browser!.waitForEnabledElement({
          id: `id-type-${processData.residents[
            presentTenantRef
          ].id.type.replace(/\s/g, "-")}`,
        })
      ).click();
      (
        await browser!.waitForEnabledElement({
          name: "id-images",
        })
      ).sendKeys(processData.residents[presentTenantRef].id.images[0]);
      (
        await browser!.waitForEnabledElement({
          id: "id-notes-summary",
        })
      ).click();
      (
        await browser!.waitForEnabledElement({
          name: "id-notes",
        })
      ).sendKeys(processData.residents[presentTenantRef].id.notes[0].value);

      await browser!.submit();

      // Tenant photo page
      await expect(browser!.getCurrentUrl()).resolves.toContain(
        `/tenant-photo/${presentTenantRef}`
      );

      (
        await browser!.waitForEnabledElement({
          id: `tenant-photo-willing-${processData.residents[presentTenantRef].photo.isWilling}`,
        })
      ).click();
      (
        await browser!.waitForEnabledElement({
          name: "tenant-photo",
        })
      ).sendKeys(processData.residents[presentTenantRef].photo.images[0]);

      await browser!.submit();

      // Next of kin page
      await expect(browser!.getCurrentUrl()).resolves.toContain(
        `/next-of-kin/${presentTenantRef}`
      );

      (
        await browser!.waitForEnabledElement({
          name: "next-of-kin-full-name",
        })
      ).sendKeys(processData.residents[presentTenantRef].nextOfKin.fullName);
      (
        await browser!.waitForEnabledElement({
          name: "next-of-kin-relationship",
        })
      ).sendKeys(
        processData.residents[presentTenantRef].nextOfKin.relationship
      );
      (
        await browser!.waitForEnabledElement({
          name: "next-of-kin-mobile-number",
        })
      ).sendKeys(
        processData.residents[presentTenantRef].nextOfKin.mobileNumber
      );
      (
        await browser!.waitForEnabledElement({
          name: "next-of-kin-other-number",
        })
      ).sendKeys(processData.residents[presentTenantRef].nextOfKin.otherNumber);
      (
        await browser!.waitForEnabledElement({
          name: "next-of-kin-email",
        })
      ).sendKeys(processData.residents[presentTenantRef].nextOfKin.email);
      (
        await browser!.waitForEnabledElement({
          name: "next-of-kin-address",
        })
      ).sendKeys(processData.residents[presentTenantRef].nextOfKin.address);

      await browser!.submit();

      // Carer page
      await expect(browser!.getCurrentUrl()).resolves.toContain(
        `/carer/${presentTenantRef}`
      );

      (
        await browser!.waitForEnabledElement({
          id: `carer-needed-${processData.residents[presentTenantRef].carer.hasCarer}`,
        })
      ).click();
      (
        await browser!.waitForEnabledElement({
          id: `carer-type-${processData.residents[presentTenantRef].carer.type}`,
        })
      ).click();
      (
        await browser!.waitForEnabledElement({
          id: "carer-live-in-yes",
        })
      ).click();
      (
        await browser!.waitForEnabledElement({
          name: "carer-live-in-start-date",
        })
      ).sendKeys(processData.residents[presentTenantRef].carer.liveInStartDate);
      (
        await browser!.waitForEnabledElement({
          name: "carer-full-name",
        })
      ).sendKeys(processData.residents[presentTenantRef].carer.fullName);
      (
        await browser!.waitForEnabledElement({
          name: "carer-relationship",
        })
      ).sendKeys(processData.residents[presentTenantRef].carer.relationship);
      (
        await browser!.waitForEnabledElement({
          name: "carer-phone-number",
        })
      ).sendKeys(processData.residents[presentTenantRef].carer.phoneNumber);
      (
        await browser!.waitForEnabledElement({
          id: "carer-notes-summary",
        })
      ).click();
      (
        await browser!.waitForEnabledElement({
          name: "carer-notes",
        })
      ).sendKeys(processData.residents[presentTenantRef].carer.notes[0].value);

      await browser!.submit();

      //Gp and Other support page
      await expect(browser!.getCurrentUrl()).resolves.toContain(
        `/other-support/${presentTenantRef}`
      );
      (
        await browser!.waitForEnabledElement({
          name: "gp-signed-up",
        })
      ).sendKeys(
        processData.residents[presentTenantRef].otherSupport.notes[0].value
      );

      (
        await browser!.waitForEnabledElement({
          name: "other-support-full-name",
        })
      ).sendKeys(processData.residents[presentTenantRef].otherSupport.fullName);
      (
        await browser!.waitForEnabledElement({
          name: "other-support-role",
        })
      ).sendKeys(processData.residents[presentTenantRef].otherSupport.role);
      (
        await browser!.waitForEnabledElement({
          name: "other-support-organisation",
        })
      ).sendKeys(
        processData.residents[presentTenantRef].otherSupport.organisation
      );
      (
        await browser!.waitForEnabledElement({
          name: "  other-support-phone-number",
        })
      ).sendKeys(
        processData.residents[presentTenantRef].otherSupport.phoneNumber
      );

      await browser!.submit();

      // Verify tenant details page
      await expect(browser!.getCurrentUrl()).resolves.toContain(
        `${processRef}/verify`
      );

      await browser!.submit();

      // Sections page
      await expect(browser!.getCurrentUrl()).resolves.toContain(
        `${processRef}/sections`
      );

      await browser!.waitForEnabledElement(
        {
          css: '[href$="/household"]',
        },
        10000
      );

      await browser!.submit({
        css: '[href$="/household"]',
      });

      // Household page
      await expect(browser!.getCurrentUrl()).resolves.toContain(
        `${processRef}/household`
      );

      (
        await browser!.waitForEnabledElement({
          name: "household-document-images",
        })
      ).sendKeys(processData.household.documents.images[0]);
      (
        await browser!.waitForEnabledElement({
          id: "house-moving-schemes-notes-summary",
        })
      ).click();
      (
        await browser!.waitForEnabledElement({
          name: "house-moving-schemes-notes",
        })
      ).sendKeys(processData.household.houseMovingSchemes.notes[0].value);
      (
        await browser!.waitForEnabledElement({
          id: "member-changes-notes-summary",
        })
      ).click();
      (
        await browser!.waitForEnabledElement({
          name: "member-changes-notes",
        })
      ).sendKeys(processData.household.memberChanges.notes[0].value);

      await browser!.submit();

      // Rent page
      await expect(browser!.getCurrentUrl()).resolves.toContain(
        `${processRef}/rent`
      );
      (
        await browser!.waitForEnabledElement({
          id: `received-payment-card-${processData.household.paymentCard.type.replace(
            /\s/g,
            "-"
          )}`,
        })
      ).click();
      (
        await browser!.waitForEnabledElement({
          id: "payment-card-notes-summary",
        })
      ).click();
      (
        await browser!.waitForEnabledElement({
          name: "payment-card-notes",
        })
      ).sendKeys(processData.household.paymentCard.notes[0].value);
      (
        await browser!.waitForEnabledElement({
          id: `rent-arrears-type-${processData.household.rentArrears.type.replace(
            /\s/g,
            "-"
          )}`,
        })
      ).click();
      (
        await browser!.waitForEnabledElement({
          id: "rent-arrears-notes-summary",
        })
      ).click();
      (
        await browser!.waitForEnabledElement({
          name: "rent-arrears-notes",
        })
      ).sendKeys(processData.household.rentArrears.notes[0].value);
      (
        await browser!.waitForEnabledElement({
          id: `has-applied-for-housing-benefit-${processData.household.housingBenefits.hasApplied.replace(
            /\s/g,
            "-"
          )}`,
        })
      ).click();
      (
        await browser!.waitForEnabledElement({
          id: "housing-benefits-notes-summary",
        })
      ).click();
      (
        await browser!.waitForEnabledElement({
          name: "housing-benefits-notes",
        })
      ).sendKeys(processData.household.housingBenefits.notes[0].value);
      (
        await browser!.waitForEnabledElement({
          id: `contact-income-officer-${processData.household.incomeOfficer.wantsToContact.replace(
            /\s/g,
            "-"
          )}`,
        })
      ).click();
      (
        await browser!.waitForEnabledElement({
          id: "income-officer-notes-summary",
        })
      ).click();
      (
        await browser!.waitForEnabledElement({
          name: "income-officer-notes",
        })
      ).sendKeys(processData.household.incomeOfficer.notes[0].value);

      await browser!.submit();

      // Other property page

      // Sections page
      await expect(browser!.getCurrentUrl()).resolves.toContain(
        `${processRef}/sections`
      );

      await browser!.waitForEnabledElement({ css: '[href$="/rooms"]' }, 10000);

      await browser!.submit({
        css: '[href$="/rooms"]',
      });

      // Rooms page deleted

      // Property occupation page
      await expect(browser!.getCurrentUrl()).resolves.toContain(
        `${processRef}/property-occupation`
      );

      (
        await browser!.waitForEnabledElement({
          id: `is-property-occupied-${processData.property.propertyOccupied.isPropertyOccupied}`,
        })
      ).click();
      (
        await browser!.waitForEnabledElement({
          name: "property-occupied-notes",
        })
      ).sendKeys(processData.property.propertyOccupied.notes[0].value);

      await browser!.submit();

      // Gas page
      await expect(browser!.getCurrentUrl()).resolves.toContain(
        `${processRef}/gas`
      );
      (
        await browser!.waitForEnabledElement({
          id: `has-boiler-checked-${processData.property.gas.hasBoilerChecked}`,
        })
      ).click();
      (
        await browser!.waitForEnabledElement({
          name: "boiler-checked-notes",
        })
      ).sendKeys(processData.property.propertyOccupied.notes[0].value);

      await browser!.submit();

      // Decoration pack page
      await expect(browser!.getCurrentUrl()).resolves.toContain(
        `${processRef}/decoration-pack`
      );

      (
        await browser!.waitForEnabledElement({
          id: `decoration-pack-delivered-${processData.property.decorationPack.hasDecorationPack}`,
        })
      ).click();
      (
        await browser!.waitForEnabledElement({
          name: "decoration-pack-notes",
        })
      ).sendKeys(processData.property.decorationPack.notes[0].value);

      await browser!.submit();

      // Laminated flooring page
      await expect(browser!.getCurrentUrl()).resolves.toContain(
        `${processRef}/laminated-flooring`
      );

      (
        await browser!.waitForEnabledElement({
          id: `has-laminated-flooring-${processData.property.laminatedFlooring.hasLaminatedFlooring}`,
        })
      ).click();
      (
        await browser!.waitForEnabledElement({
          id: `has-laminated-flooring-${processData.property.laminatedFlooring.hasPermission}`,
        })
      ).click();
      (
        await browser!.waitForEnabledElement({
          name: "laminated-flooring-images",
        })
      ).sendKeys(processData.property.laminatedFlooring.images[0]);
      (
        await browser!.waitForEnabledElement({
          name: "laminated-flooring-notes",
        })
      ).sendKeys(processData.property.laminatedFlooring.notes[0].value);

      await browser!.submit();

      // Alterations changes page
      await expect(browser!.getCurrentUrl()).resolves.toContain(
        `${processRef}/alterations`
      );

      (
        await browser!.waitForEnabledElement({
          id: `has-alterations-${processData.property.alterations.hasAlterations}`,
        })
      ).click();
      (
        await browser!.waitForEnabledElement({
          name: "alterations-images",
        })
      ).sendKeys(processData.property.alterations.images[0]);
      (
        await browser!.waitForEnabledElement({
          name: "alterations-notes",
        })
      ).sendKeys(processData.property.alterations.notes[0].value);

      await browser!.submit();

      // Damage page deleted

      // Roof page deleted

      // Garden page
      await expect(browser!.getCurrentUrl()).resolves.toContain(
        `${processRef}/garden`
      );

      (
        await browser!.waitForEnabledElement({
          id: `has-garden-${processData.property.garden.hasGarden}`,
        })
      ).click();
      (
        await browser!.waitForEnabledElement({
          id: `garden-type-${processData.property.garden.type}`,
        })
      ).click();
      (
        await browser!.waitForEnabledElement({
          id: `is-maintained-${processData.property.garden.isMaintained}`,
        })
      ).click();
      (
        await browser!.waitForEnabledElement({
          name: "garden-images",
        })
      ).sendKeys(processData.property.garden.images[0]);
      (
        await browser!.waitForEnabledElement({
          name: "garden-notes",
        })
      ).sendKeys(processData.property.garden.notes[0].value);

      await browser!.submit();

      // Repairs page
      await expect(browser!.getCurrentUrl()).resolves.toContain("/repairs");
      (
        await browser!.waitForEnabledElement({
          id: `needs-repairs-${processData.property.repairs.needsRepairs}`,
        })
      ).click();
      (
        await browser!.waitForEnabledElement({ name: "repairs-images" })
      ).sendKeys(processData.property.repairs.images[0]);
      (
        await browser!.waitForEnabledElement({ name: "repairs-notes" })
      ).sendKeys(processData.property.repairs.notes[0].value);

      await browser!.submit();

      // Fire exit page
      await expect(browser!.getCurrentUrl()).resolves.toContain(
        `${processRef}/fire-exit`
      );

      (
        await browser!.waitForEnabledElement({
          id: `has-fire-exit-${processData.property.fireExit.hasFireExit}`,
        })
      ).click();
      (
        await browser!.waitForEnabledElement({
          id: `is-accessible-${processData.property.fireExit.isAccessible}`,
        })
      ).click();
      (
        await browser!.waitForEnabledElement({
          name: "fire-exit-notes",
        })
      ).sendKeys(processData.property.fireExit.notes[0].value);

      await browser!.submit();

      // Smoke alarm page
      await expect(browser!.getCurrentUrl()).resolves.toContain(
        `${processRef}/smoke-alarm`
      );

      (
        await browser!.waitForEnabledElement({
          id: `has-smoke-alarm-${processData.property.smokeAlarm.hasSmokeAlarm}`,
        })
      ).click();
      (
        await browser!.waitForEnabledElement({
          id: `is-working-${processData.property.smokeAlarm.isWorking}`,
        })
      ).click();
      (
        await browser!.waitForEnabledElement({
          name: "smoke-alarm-notes",
        })
      ).sendKeys(processData.property.smokeAlarm.notes[0].value);

      await browser!.submit();

      // Metal gates page
      await expect(browser!.getCurrentUrl()).resolves.toContain(
        `${processRef}/metal-gates`
      );

      (
        await browser!.waitForEnabledElement({
          id: `has-metal-gates-${processData.property.metalGates.hasMetalGates}`,
        })
      ).click();
      (
        await browser!.waitForEnabledElement({
          id: `combustible-items-behind-gates-${processData.property.metalGates.combustibleItemsBehind}`,
        })
      ).click();
      (
        await browser!.waitForEnabledElement({
          id: `further-action-required-${processData.property.metalGates.furtherActionRequired}`,
        })
      ).click();
      (
        await browser!.waitForEnabledElement({
          name: "metal-gates-notes",
        })
      ).sendKeys(processData.property.metalGates.notes[0].value);

      await browser!.submit();

      // Door mats page
      await expect(browser!.getCurrentUrl()).resolves.toContain(
        `${processRef}/door-mats`
      );

      (
        await browser!.waitForEnabledElement({
          id: `has-placed-${processData.property.doorMats.hasPlaced}`,
        })
      ).click();
      (
        await browser!.waitForEnabledElement({
          id: `further-action-required-${processData.property.doorMats.furtherActionRequired}`,
        })
      ).click();
      (
        await browser!.waitForEnabledElement({
          name: "door-mats-notes",
        })
      ).sendKeys(processData.property.doorMats.notes[0].value);

      await browser!.submit();

      // Communal areas page
      await expect(browser!.getCurrentUrl()).resolves.toContain(
        `${processRef}/communal-areas`
      );

      (
        await browser!.waitForEnabledElement({
          id: `has-left-combustible-items-${processData.property.communalAreas.hasLeftCombustibleItems}`,
        })
      ).click();
      (
        await browser!.waitForEnabledElement({
          id: `further-action-required-${processData.property.communalAreas.furtherActionRequired}`,
        })
      ).click();
      (
        await browser!.waitForEnabledElement({
          name: "communal-areas-notes",
        })
      ).sendKeys(processData.property.communalAreas.notes[0].value);

      await browser!.submit();

      // Pets page
      await expect(browser!.getCurrentUrl()).resolves.toContain(
        `${processRef}/pets`
      );

      (
        await browser!.waitForEnabledElement({
          id: `has-pets-${processData.property.pets.hasPets}`,
        })
      ).click();
      (
        await browser!.waitForEnabledElement({
          id: `pet-type-${processData.property.pets.petTypes[0]}`,
        })
      ).click();
      (
        await browser!.waitForEnabledElement({
          id: `pet-type-${processData.property.pets.petTypes[1]}`,
        })
      ).click();
      (
        await browser!.waitForEnabledElement({
          id: `has-permission-${processData.property.pets.hasPermission}`,
        })
      ).click();
      (
        await browser!.waitForEnabledElement({
          name: "pets-permission-images",
        })
      ).sendKeys(processData.property.pets.images[0]);
      (
        await browser!.waitForEnabledElement({
          name: "pets-notes",
        })
      ).sendKeys(processData.property.pets.notes[0].value);

      await browser!.submit();

      // Antisocial behaviour page
      await expect(browser!.getCurrentUrl()).resolves.toContain(
        `${processRef}/antisocial-behaviour`
      );

      (
        await browser!.waitForEnabledElement({
          id: `tenant-understands-${processData.property.antisocialBehaviour.tenantUnderstands}`,
        })
      ).click();
      (
        await browser!.waitForEnabledElement({
          name: "antisocial-behaviour-notes",
        })
      ).sendKeys(processData.property.antisocialBehaviour.notes[0].value);

      await browser!.submit();

      // Refuse and recycling page
      await expect(browser!.getCurrentUrl()).resolves.toContain(
        `${processRef}/refuse`
      );
      (
        await browser!.waitForEnabledElement({
          id: `tenant-knows-about-refuse-${processData.property.refuse.tenantKnowsAboutRefuse}`,
        })
      ).click();
      (
        await browser!.waitForEnabledElement({
          id: `tenant-has-food-bin-${processData.property.refuse.tenantHasFoodBin}`,
        })
      ).click();
      (
        await browser!.waitForEnabledElement({
          name: "refuse-notes",
        })
      ).sendKeys(processData.property.refuse.notes[0].value);

      await browser!.submit();

      // Queries page
      await expect(browser!.getCurrentUrl()).resolves.toContain(
        `${processRef}/queries`
      );
      (
        await browser!.waitForEnabledElement({
          id: `tenant-has-booklet-${processData.property.queries.tenantHasBooklet}`,
        })
      ).click();
      (
        await browser!.waitForEnabledElement({
          name: "refuse-notes",
        })
      ).sendKeys(processData.property.queries.bookletNotes[0].value);
      (
        await browser!.waitForEnabledElement({
          id: `tenant-has-home-queries-${processData.property.queries.tenantHasHomeQueries}`,
        })
      ).click();
      (
        await browser!.waitForEnabledElement({
          name: "refuse-notes",
        })
      ).sendKeys(processData.property.queries.homeQueriesNotes[0].value);
      (
        await browser!.waitForEnabledElement({
          id: `tenant-has-facilities-queries-${processData.property.queries.tenantHasFacilitiesQueries}`,
        })
      ).click();
      (
        await browser!.waitForEnabledElement({
          name: "refuse-notes",
        })
      ).sendKeys(processData.property.queries.facilitiesQueriesNotes[0].value);

      await browser!.submit();

      // Other comments page
      await expect(browser!.getCurrentUrl()).resolves.toContain(
        `${processRef}/other-comments`
      );

      (
        await browser!.waitForEnabledElement({
          name: "other-comments-images",
        })
      ).sendKeys(processData.property.otherComments.images[0]);
      (
        await browser!.waitForEnabledElement({
          name: "other-comments-notes",
        })
      ).sendKeys(processData.property.otherComments.notes[0].value);

      await browser!.submit();

      // Sections page
      await expect(browser!.getCurrentUrl()).resolves.toContain(
        `${processRef}/sections`
      );

      await browser!.waitForEnabledElement(
        {
          css: '[href$="/home-check"]',
        },
        10000
      );

      await browser!.submit({
        css: '[href$="/home-check"]',
      });

      // Health concerns page
      await expect(browser!.getCurrentUrl()).resolves.toContain(
        `${processRef}/health`
      );

      (
        await browser!.waitForEnabledElement({
          id: `health-concerns-${processData.healthConcerns.value}`,
        })
      ).click();
      (
        await browser!.waitForEnabledElement({
          id: `health-concerns-who-${processData.healthConcerns.who[0].replace(
            /\s/g,
            "-"
          )}`,
        })
      ).click();
      (
        await browser!.waitForEnabledElement({
          id: `health-concerns-more-info-${processData.healthConcerns.moreInfo[0]}`,
        })
      ).click();
      (
        await browser!.waitForEnabledElement({
          id: `health-concerns-more-info-${processData.healthConcerns.moreInfo[1]}`,
        })
      ).click();
      (
        await browser!.waitForEnabledElement({
          name: "health-notes",
        })
      ).sendKeys(processData.healthConcerns.notes[0].value);

      await browser!.submit();

      // Disability page
      await expect(browser!.getCurrentUrl()).resolves.toContain(
        `${processRef}/disability`
      );

      (
        await browser!.waitForEnabledElement({
          id: `disability-${processData.disability.value}`,
        })
      ).click();
      (
        await browser!.waitForEnabledElement({
          id: `who-disability-${processData.disability.whoDisability[0].replace(
            /\s/g,
            "-"
          )}`,
        })
      ).click();
      (
        await browser!.waitForEnabledElement({
          id: `what-disabilities-${processData.disability.whoDisability[0].replace(
            /\s/g,
            "-"
          )}-${processData.residents[presentTenantRef].disabilities.what[0]}`,
        })
      ).click();
      (
        await browser!.waitForEnabledElement({
          id: `what-disabilities-${processData.disability.whoDisability[0].replace(
            /\s/g,
            "-"
          )}-${processData.residents[presentTenantRef].disabilities.what[1]}`,
        })
      ).click();
      (
        await browser!.waitForEnabledElement({
          id: `pip-or-dla-${processData.disability.pipOrDLA}`,
        })
      ).click();
      (
        await browser!.waitForEnabledElement({
          id: `who-pip-${processData.disability.whoPIP[0].replace(/\s/g, "-")}`,
        })
      ).click();
      (
        await browser!.waitForEnabledElement({
          id: `who-dla-${processData.disability.whoDLA[0].replace(/\s/g, "-")}`,
        })
      ).click();
      (
        await browser!.waitForEnabledElement({
          name: "disability-notes",
        })
      ).sendKeys(processData.disability.notes[0].value);

      await browser!.submit();

      // Support needs page
      await expect(browser!.getCurrentUrl()).resolves.toContain(
        `${processRef}/support-needs`
      );
      (
        await browser!.waitForEnabledElement({
          id: "resident-sustainment-notes-summary",
        })
      ).click();
      (
        await browser!.waitForEnabledElement({
          name: "resident-sustainment-notes",
        })
      ).sendKeys(processData.supportNeeds.residentSustainmentNotes[0].value);
      (
        await browser!.waitForEnabledElement({
          id: "befriending-notes-summary",
        })
      ).click();
      (
        await browser!.waitForEnabledElement({
          name: "befriending-notes",
        })
      ).sendKeys(processData.supportNeeds.befriendingNotes[0].value);
      (
        await browser!.waitForEnabledElement({
          id: "adult-safeguarding-notes-summary",
        })
      ).click();
      (
        await browser!.waitForEnabledElement({
          name: "adult-safeguarding-notes",
        })
      ).sendKeys(processData.supportNeeds.adultSafeguardingNotes[0].value);
      (
        await browser!.waitForEnabledElement({
          id: "childrens-safeguarding-notes-summary",
        })
      ).click();
      (
        await browser!.waitForEnabledElement({
          name: "childrens-safeguarding-notes",
        })
      ).sendKeys(
        processData.supportNeeds.childrenYoungPeopleSafeguardingNotes[0].value
      );
      (
        await browser!.waitForEnabledElement({
          id: "domestic-violence-notes-summary",
        })
      ).click();
      (
        await browser!.waitForEnabledElement({
          name: "domestic-violence-notes",
        })
      ).sendKeys(processData.supportNeeds.domesticSexualViolenceNotes[0].value);
      (
        await browser!.waitForEnabledElement({
          id: "mental-health-18-65-notes-summary",
        })
      ).click();
      (
        await browser!.waitForEnabledElement({
          name: "mental-health-18-65-notes",
        })
      ).sendKeys(processData.supportNeeds.mentalHealth18To65Notes[0].value);
      (
        await browser!.waitForEnabledElement({
          id: "mental-health-over-65-notes-summary",
        })
      ).click();
      (
        await browser!.waitForEnabledElement({
          name: "mental-health-over-65-notes",
        })
      ).sendKeys(processData.supportNeeds.mentalHealthOver65Notes[0].value);
      await browser!.submit();

      // Sections page
      await expect(browser!.getCurrentUrl()).resolves.toContain(
        `${processRef}/sections`
      );

      await browser!.waitForEnabledElement({ css: '[href$="/review"]' }, 10000);

      await browser!.submit({
        css: '[href$="/review"]',
      });

      // Review page
      await expect(browser!.getCurrentUrl()).resolves.toContain(
        `${processRef}/review`
      );

      // Review page - Tenancy summary section
      await Expect.pageToContain("Hackney, London, E8");
      await Expect.pageToContain("Dorian");
      await Expect.pageToContain("Secure");
      await Expect.pageToContain("12 November 2007");

      // Review page - Household section
      await Expect.pageToContain("Household");
      await Expect.pageToContain("Member changes notes");
      await Expect.pageToContain("House moving schemes notes");
      await Expect.pageToContain(
        "Yes, but tenant has an action plan to clear arrears"
      );
      await Expect.pageToContain("Yes, but application declined");
      await Expect.pageToContain("Housing benefits notes");
      await Expect.pageToContain("Rent arrears notes");
      await Expect.pageToContain("Income officer notes");
      await Expect.pageToContain("Other property notes");

      // Review page - Property inspection section
      await Expect.pageToContain("Room notes");
      await Expect.pageToContain("Laminated flooring notes");
      await Expect.pageToContain("Alterations notes");
      await Expect.pageToContain("Damage notes");
      await Expect.pageToContain("Garden notes");
      await Expect.pageToContain("Fire exit notes");
      await Expect.pageToContain("Smoke alarm notes");
      await Expect.pageToContain("Metal gates notes");
      await Expect.pageToContain("Door mats notes");
      await Expect.pageToContain("Communal areas notes");
      await Expect.pageToContain("Cat, Dog");
      await Expect.pageToContain("Antisocial behaviour notes");
      await Expect.pageToContain("Other comments notes");
      await Expect.pageToContain("Repairs notes");

      // Review page - Wellbeing support section
      await Expect.pageToContain("Dorian");
      await Expect.pageToContain("Dementia, Smoking");
      await Expect.pageToContain("Health concerns notes");
      await Expect.pageToContain("Disability notes");
      await Expect.pageToContain("Children young people safeguarding notes");
      await Expect.pageToContain("Mental health 18 to 65 notes");
      await Expect.pageToContain("Mental health over 65 notes");

      (
        await browser!.waitForEnabledElement({
          name: "other-notes",
        })
      ).sendKeys(processData.other.notes[0].value);

      await browser!.submit();

      //Closed review page
      await expect(browser!.getCurrentUrl()).resolves.toContain(
        `${processRef}/closed-review`
      );

      //Closed review page - Tenancy summary section
      await Expect.pageToContain("Hackney, London, E8");
      await Expect.pageToContain("Dorian");
      await Expect.pageToContain("Secure");
      await Expect.pageToContain("12 November 2007");

      // Closed review page - Household section
      await Expect.pageToContain("Household");
      await Expect.pageToContain("Member changes notes");
      await Expect.pageToContain("House moving schemes notes");
      await Expect.pageToContain(
        "Yes, but tenant has an action plan to clear arrears"
      );
      await Expect.pageToContain("Yes, but application declined");
      await Expect.pageToContain("Housing benefits notes");
      await Expect.pageToContain("Rent arrears notes");
      await Expect.pageToContain("Income officer notes");
      await Expect.pageToContain("Other property notes");

      //Closed review page - Property inspection section
      await Expect.pageToContain("Room notes");
      await Expect.pageToContain("Laminated flooring notes");
      await Expect.pageToContain("Structural changes notes");
      await Expect.pageToContain("Damage notes");
      await Expect.pageToContain("Garden notes");
      await Expect.pageToContain("Fire exit notes");
      await Expect.pageToContain("Smoke alarm notes");
      await Expect.pageToContain("Metal gates notes");
      await Expect.pageToContain("Door mats notes");
      await Expect.pageToContain("Communal areas notes");
      await Expect.pageToContain("Cat, Dog");
      await Expect.pageToContain("Antisocial behaviour notes");
      await Expect.pageToContain("Other comments notes");
      await Expect.pageToContain("Repairs notes");

      //Closed review page - Wellbeing support section
      await Expect.pageToContain("Dorian");
      await Expect.pageToContain("Dementia, Smoking");
      await Expect.pageToContain("Health concerns notes");
      await Expect.pageToContain("Disability notes");
      await Expect.pageToContain("Children young people safeguarding notes");
      await Expect.pageToContain("Mental health 18 to 65 notes");
      await Expect.pageToContain("Mental health over 65 notes");

      (
        await browser!.waitForEnabledElement({
          name: "other-notes",
        })
      ).sendKeys(processData.other.notes[0].value);

      await browser!.submit();

      // Submit page
      await expect(browser!.getCurrentUrl()).resolves.toContain(
        `${processRef}/submit`
      );

      await browser!.submit();

      // Wait for the submission to finish.
      await browser!.wait(until.urlMatches(/\/confirmed$/));

      // Confirmed page
      await expect(browser!.getCurrentUrl()).resolves.toContain(
        `${processRef}/confirmed`
      );
    });

    then("I should see that the process has been submitted", async () => {
      await Expect.pageToContain("has been submitted for manager review");
    });

    then("the data in the backend should match the answers given", async () => {
      const response = await fetch(
        `https://${process.env.PROCESS_API_HOST}${process.env.PROCESS_API_BASE_URL}/v1/processData/${process.env.TEST_PROCESS_REF}`,
        {
          method: "GET",
          headers: {
            "X-API-KEY": process.env.PROCESS_API_KEY || "",
          },
        }
      );

      expect(response.status).toEqual(200);

      const responseData = await response.json();

      const persistedProcessData = JSON.parse(
        JSON.stringify(responseData.processData.processData).replace(
          /image:[\w-]+?.+?(?=")/g,
          imagePath
        )
      );

      expect(persistedProcessData.submitted).toBeDefined();
      expect({
        ...persistedProcessData,
        submitted: undefined,
      }).toEqual(processData);
    });
  });
});
