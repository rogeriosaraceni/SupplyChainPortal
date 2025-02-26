"use strict";

/** ////////////////////////////////////////////////////////////////////
 * Main JS
 *
 * - enable tooltips Bootstrap
 *
--------------------------------------------------------------------- */

/** --------------------------------------------------------------------
 * enable tooltips Bootstrap
--------------------------------------------------------------------- */
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));